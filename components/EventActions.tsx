import React, { useState } from 'react';
import { EVENT_INFO } from '../data';
import { useTranslation } from '../contexts/TranslationContext';

const EVENT_TITLE = 'Marché Printanier - Ghislenghien';
const EVENT_START = new Date('2026-05-03T10:00:00+02:00');
const EVENT_END = new Date('2026-05-03T18:00:00+02:00');
const LOCATION = EVENT_INFO.lieu;

function toGoogleCalendarUrl(): string {
  const format = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT_TITLE,
    dates: `${format(EVENT_START)}/${format(EVENT_END)}`,
    details: `Marché artisanal printanier. ${EVENT_INFO.horaires}. ${EVENT_INFO.entree}.`,
    location: LOCATION,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

function toOutlookUrl(): string {
  const params = new URLSearchParams({
    subject: EVENT_TITLE,
    startdt: EVENT_START.toISOString(),
    enddt: EVENT_END.toISOString(),
    body: `Marché artisanal printanier. ${EVENT_INFO.horaires}. ${EVENT_INFO.entree}.`,
    location: LOCATION,
  });
  return `https://outlook.live.com/calendar/0/action/compose?${params.toString()}`;
}

function getIcsBlobUrl(): string {
  const format = (d: Date) => d.toISOString().replace(/-|:|\.\d{3}/g, '');
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${format(EVENT_START)}`,
    `DTEND:${format(EVENT_END)}`,
    `SUMMARY:${EVENT_TITLE}`,
    `DESCRIPTION:Marché artisanal printanier. ${EVENT_INFO.horaires}. ${EVENT_INFO.entree}.`,
    `LOCATION:${LOCATION}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  return URL.createObjectURL(blob);
}

export const EventActions: React.FC = () => {
  const { t } = useTranslation();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const text = `${EVENT_TITLE} - ${EVENT_INFO.date} - ${LOCATION}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: EVENT_TITLE,
          text,
          url,
        });
      } catch (e) {
        copyShareLink(url, text);
      }
    } else {
      copyShareLink(url, text);
    }
  };

  const copyShareLink = (url: string, text: string) => {
    navigator.clipboard.writeText(`${text}\n${url}`);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  const handleIcsDownload = () => {
    const url = getIcsBlobUrl();
    const a = document.createElement('a');
    a.href = url;
    a.download = 'marche-printanier-ghislenghien.ics';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative">
        <button
          type="button"
          onClick={() => setCalendarOpen(!calendarOpen)}
          className="inline-flex items-center gap-2 bg-white border-2 border-emerald-200 text-emerald-700 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-50 hover:border-emerald-300 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {t('event.addToCalendar')}
        </button>
        {calendarOpen && (
          <>
            <div className="absolute top-full left-0 mt-1 py-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-20">
              <a
                href={toGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 rounded-t-xl"
              >
                Google Calendar
              </a>
              <a
                href={toOutlookUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
              >
                Outlook
              </a>
              <button
                type="button"
                onClick={() => { handleIcsDownload(); setCalendarOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 rounded-b-xl"
              >
                Apple / iCal (.ics)
              </button>
            </div>
            <div
              className="fixed inset-0 z-10"
              aria-hidden
              onClick={() => setCalendarOpen(false)}
            />
          </>
        )}
      </div>
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 bg-white border-2 border-emerald-200 text-emerald-700 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-50 hover:border-emerald-300 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        {shareCopied ? t('event.copied') : t('event.share')}
      </button>
    </div>
  );
};

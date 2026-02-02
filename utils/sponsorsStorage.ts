import { Sponsor } from '../types';
import { SPONSORS } from '../data';

const STORAGE_KEY = 'marche-printanier-sponsors';

export function getSponsors(): Sponsor[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return SPONSORS;
    const parsed = JSON.parse(raw) as Sponsor[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SPONSORS;
  } catch {
    return SPONSORS;
  }
}

export function setSponsors(sponsors: Sponsor[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sponsors));
}

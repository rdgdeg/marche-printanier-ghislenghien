# Guide de déploiement sur Vercel

## Méthode 1 : Via l'interface Vercel (Recommandé)

### Étape 1 : Préparer le projet
1. Assurez-vous que votre projet est sur GitHub, GitLab ou Bitbucket
2. Si ce n'est pas le cas, initialisez Git et poussez votre code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <URL_DE_VOTRE_REPO>
   git push -u origin main
   ```

### Étape 2 : Créer un compte Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up" et connectez-vous avec GitHub/GitLab/Bitbucket

### Étape 3 : Importer le projet
1. Dans le dashboard Vercel, cliquez sur "Add New Project"
2. Sélectionnez votre repository (marché-printanier-de-ghislenghien)
3. Vercel détectera automatiquement que c'est un projet Vite

### Étape 4 : Configuration
Vercel devrait détecter automatiquement :
- **Framework Preset** : Vite
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

Si ce n'est pas le cas, configurez manuellement :
- **Framework Preset** : Vite
- **Root Directory** : `./` (laisser vide si à la racine)
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

### Étape 5 : Déployer
1. Cliquez sur "Deploy"
2. Attendez que le build se termine (environ 1-2 minutes)
3. Votre site sera disponible sur une URL comme : `https://votre-projet.vercel.app`

---

## Méthode 2 : Via la CLI Vercel

### Étape 1 : Installer Vercel CLI
```bash
npm install -g vercel
```

### Étape 2 : Se connecter
```bash
vercel login
```

### Étape 3 : Déployer
Depuis le dossier de votre projet :
```bash
vercel
```

Suivez les instructions :
- **Set up and deploy?** → Y
- **Which scope?** → Votre compte
- **Link to existing project?** → N (première fois)
- **Project name?** → marché-printanier-de-ghislenghien (ou le nom que vous voulez)
- **Directory?** → ./ (appuyez sur Entrée)
- **Override settings?** → N

### Étape 4 : Déploiement en production
Pour déployer en production :
```bash
vercel --prod
```

---

## Configuration importante

Le fichier `vercel.json` a été créé pour :
- Configurer les rewrites pour le HashRouter de React Router
- Définir les commandes de build
- Spécifier le répertoire de sortie

---

## Variables d'environnement (si nécessaire)

Si vous avez des variables d'environnement :
1. Allez dans votre projet sur Vercel
2. Settings → Environment Variables
3. Ajoutez vos variables (ex: `GEMINI_API_KEY`)

---

## Mises à jour automatiques

Une fois connecté à Git :
- Chaque push sur la branche `main` déclenchera un déploiement automatique
- Les autres branches créeront des preview deployments

---

## URL personnalisée

Pour ajouter un domaine personnalisé :
1. Allez dans Settings → Domains
2. Ajoutez votre domaine
3. Suivez les instructions DNS

---

## Support

- Documentation Vercel : https://vercel.com/docs
- Support : https://vercel.com/support

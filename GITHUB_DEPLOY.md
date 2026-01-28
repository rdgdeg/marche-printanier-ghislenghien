# Guide pour pousser sur GitHub et déployer sur Vercel

## Étape 1 : Créer un nouveau repository sur GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `marche-printanier-ghislenghien` (ou le nom que vous préférez)
   - **Description** : "Site web du Marché Artisanal Printanier de Ghislenghien"
   - **Visibility** : Public ou Private (selon votre préférence)
   - **NE PAS** cocher "Initialize with README" (le projet existe déjà)
4. Cliquez sur **"Create repository"**

## Étape 2 : Changer le remote Git

Le projet a actuellement un remote qui pointe vers un autre projet. Il faut le changer :

```bash
# Supprimer l'ancien remote
git remote remove origin

# Ajouter le nouveau remote (remplacez USERNAME et REPO_NAME)
git remote add origin https://github.com/VOTRE_USERNAME/marche-printanier-ghislenghien.git

# Vérifier que c'est bien configuré
git remote -v
```

## Étape 3 : Commiter et pousser le code

```bash
# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Initial commit - Site Marché Printanier Ghislenghien"

# Pousser sur GitHub
git push -u origin main
```

Si vous avez une erreur de branche, essayez :
```bash
git branch -M main
git push -u origin main
```

## Étape 4 : Déployer sur Vercel depuis GitHub

Une fois le code sur GitHub :

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur **"Add New Project"**
4. Sélectionnez le repository `marche-printanier-ghislenghien`
5. Vercel détectera automatiquement :
   - Framework : Vite
   - Build Command : `npm run build`
   - Output Directory : `dist`
6. Cliquez sur **"Deploy"**
7. Attendez 1-2 minutes
8. Votre site sera en ligne ! 🎉

## Avantages de cette méthode

✅ **Déploiements automatiques** : Chaque push sur GitHub déclenche un nouveau déploiement
✅ **Historique Git** : Tous vos changements sont sauvegardés
✅ **Collaboration facile** : D'autres personnes peuvent contribuer
✅ **Preview deployments** : Chaque branche crée une preview URL
✅ **Rollback facile** : Vous pouvez revenir à une version précédente

## Commandes rapides

```bash
# Après chaque modification, pour mettre à jour :
git add .
git commit -m "Description des changements"
git push

# Vercel déploiera automatiquement !
```

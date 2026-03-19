# 📋 JobTrack

> Application de suivi de candidatures — Stage, Alternance, CDI, CDD

![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38BDF8?style=flat&logo=tailwindcss)
![Pinia](https://img.shields.io/badge/Pinia-2.x-F7D336?style=flat&logo=pinia)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase)

---

## ✨ Fonctionnalités
- **Vue Liste** — tableau avec tri et filtres
- **Ajout / Modification / Suppression** de candidatures
- **Filtres** par type de contrat (Stage, Alternance, CDI, CDD) et par statut
- **Recherche** en temps réel
- **Statistiques** — taux de réponse, nombre d'entretiens, offres reçues
- **Dark mode** — automatique selon les préférences système

---

## 🚀 Stack technique

| Couche | Technologie |
|---|---|
| Framework | Vue 3 + TypeScript |
| Build | Vite |
| UI | DaisyUI+ Tailwind CSS |
| Icônes | Lucide Vue Next |
| State | Pinia |
| Routing | Vue Router 4 |
| Base de données | Supabase |
| Déploiement | Vercel |

---

## 📦 Installation

### Prérequis

- Node.js 18+
- npm ou pnpm

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/ton-pseudo/jobtrack.git
cd jobtrack

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env
```

### Variables d'environnement

Renseigner les valeurs dans le fichier `.env` :

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Lancer en développement

```bash
npm run dev
```

L'application est accessible sur [http://localhost:5173](http://localhost:5173)

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── KanbanBoard.vue     # Vue kanban avec colonnes
│   ├── JobCard.vue         # Carte candidature
│   ├── JobFormModal.vue    # Formulaire ajout / édition
│   ├── AppHeader.vue       # Header avec recherche
│   ├── StatusBadge.vue     # Badge statut coloré
│   └── AppButton.vue       # Bouton réutilisable
├── views/
│   ├── HomeView.vue        # Page principale (kanban)
│   ├── ListView.vue        # Page liste
│   └── StatsView.vue       # Page statistiques
├── stores/
│   └── jobs.js             # Store Pinia (state global)
├── composables/
│   ├── useJobs.js          # Logique métier candidatures
│   └── useFilters.js       # Logique de filtrage
├── services/
│   └── supabase.js         # Client Supabase
├── router/
│   └── index.js            # Configuration des routes
└── main.js                 # Point d'entrée
```

---

## 🗄️ Schéma base de données

```sql
create table jobs (
  id          uuid primary key default gen_random_uuid(),
  company     text not null,
  role        text not null,
  type        text check (type in ('Stage','Alternance','CDI','CDD')),
  status      text check (status in ('Envoyée','Vue','Entretien','Offre','Refus')),
  city        text,
  url         text,
  notes       text,
  applied_at  date default current_date,
  created_at  timestamptz default now()
);
```

---

## 🛠️ Scripts disponibles

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production
npm run preview    # Prévisualiser le build
npm run lint       # Linter ESLint
npm run type-check # Vérification TypeScript
```

---

## 🚢 Déploiement

Le projet est déployé automatiquement sur **Vercel** à chaque push sur `main`.

```bash
# Build manuel
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

---

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Crée une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commit tes changements (`git commit -m 'feat: ajout de la fonctionnalité X'`)
4. Push sur la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvre une Pull Request

---

## 📄 Licence

MIT — voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">
  Fait avec ❤️ et Vue 3
</div>
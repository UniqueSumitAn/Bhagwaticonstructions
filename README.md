# Bhagwati Constructions

Next.js (App Router) + TypeScript + MongoDB (Mongoose) + Tailwind starter.

## Stack

- **Next.js 15** with the App Router
- **TypeScript** in strict mode
- **MongoDB** via **Mongoose**, with a cached connection that survives dev hot-reloads
- **Tailwind CSS**
- **ESLint** (`next/core-web-vitals` + `next/typescript`)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# then edit .env.local and set MONGODB_URI

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## MongoDB

The connection helper lives at [src/lib/mongodb.ts](src/lib/mongodb.ts). It caches the
connection on `globalThis` so Next.js dev mode doesn't open a new socket on every hot reload.

Set `MONGODB_URI` in `.env.local`. For local development:

```
MONGODB_URI=mongodb://localhost:27017/bhagwati
```

For Atlas:

```
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/bhagwati?retryWrites=true&w=majority
```

## Project structure

```
src/
  app/
    api/
      health/route.ts        GET  /api/health        — DB ping
      projects/route.ts      GET  /api/projects      — list
                             POST /api/projects      — create
      projects/[id]/route.ts GET/PATCH/DELETE /api/projects/:id
    layout.tsx
    page.tsx
    globals.css
  lib/
    mongodb.ts               cached Mongoose connection
  models/
    Project.ts               sample Mongoose model
```

## Scripts

| Command | What it does |
|--|--|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Try the API

```bash
# health
curl http://localhost:3000/api/health

# create a project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"name":"Sky Tower","location":"Indore","status":"in_progress"}'

# list
curl http://localhost:3000/api/projects
```

# shadiWalaGhar

A WedMeGood-inspired wedding vendor discovery and booking platform.

## Stack
- Frontend: Next.js (App Router) + TypeScript + Tailwind
- Backend: NestJS + TypeScript
- ORM: Prisma (MySQL, via the `@prisma/adapter-mariadb` driver adapter)
- Cache: Redis (Upstash) — to be added
- Queues: BullMQ + Redis — to be added
- Media storage: S3 / Cloudinary / MinIO — to be added
- Architecture: Modular monolith (vendor/booking/review/user modules)

## Folders
- `frontend/` — Next.js app (dev port 3001)
- `backend/` — NestJS app (dev port 4000, routes under `/api`)
- `database/` — reserved for standalone DB scripts/docs (Prisma schema itself lives in `backend/prisma`)

## Getting started

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env   # update DATABASE_URL with your MySQL connection string
npx prisma generate
npx prisma migrate dev --name init   # creates tables once a real DB is configured
npm run start:dev
```
Backend runs at `http://localhost:4000`, API routes under `http://localhost:4000/api`.

### 2. Frontend
```bash
cd frontend
npm install
cp .env.local.example .env.local   # points at the backend API
npm run dev
```
Frontend runs at `http://localhost:3001` and calls the backend via `NEXT_PUBLIC_API_URL`.

The homepage includes a live connectivity check against `GET /api/health`.

## Deployment (free tier)
- Frontend → Vercel
- Backend → Render/Railway
- DB → Neon/Supabase/Railway (or any MySQL-compatible host)
- Redis → Upstash
- Storage → Cloudinary or self-hosted MinIO

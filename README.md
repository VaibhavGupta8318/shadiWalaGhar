# WedMeGood Clone

## Stack
- Frontend: React + Next.js
- Backend: NestJS
- ORM: Prisma
- Database: MySQL (or PostgreSQL)
- Cache: Redis (Upstash)
- Queues: BullMQ + Redis
- Media storage: S3 / Cloudinary / MinIO
- Architecture: Modular monolith (vendor/booking/review/user modules)

## Folders
- `frontend/` — Next.js app
- `backend/` — NestJS app
- `database/` — Prisma schema, migrations, seed scripts

## Deployment (free tier)
- Frontend → Vercel
- Backend → Render/Railway
- DB → Neon/Supabase/Railway
- Redis → Upstash
- Storage → Cloudinary or self-hosted MinIO

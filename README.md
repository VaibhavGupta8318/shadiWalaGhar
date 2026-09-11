# shadiWalaGhar

A WedMeGood-inspired wedding vendor discovery and booking platform — couples
discover and book venues, photographers, decorators, caterers and more, all
in one place.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 |
| Backend | NestJS 12 + TypeScript |
| ORM | Prisma 7 (MySQL, via the `@prisma/adapter-mariadb` driver adapter) |
| Validation | class-validator / class-transformer (NestJS `ValidationPipe`) |
| Database | MySQL |
| Cache | Redis (Upstash) — planned, not yet integrated |
| Queues | BullMQ + Redis — planned, not yet integrated |
| Media storage | S3 / Cloudinary / MinIO — planned, not yet integrated |
| Architecture | Modular monolith — one deployable backend, split into independent domain modules (`users`, `vendors`, `bookings`, `reviews`) that can be extracted into microservices later if needed |

## Folder Structure

```
shadiWalaGhar/
├── frontend/                    Next.js app (dev port 3001)
│   └── src/
│       ├── app/                 Routing only — layout.tsx, page.tsx, globals.css
│       ├── components/
│       │   ├── layout/          Navbar, Footer
│       │   ├── sections/        Hero, Categories, Stats, CallToAction
│       │   └── ui/              Reusable primitives (Button, CategoryCard, ...)
│       ├── constants/           Static page data (categories, stats, nav links)
│       ├── types/                Shared TypeScript interfaces
│       └── lib/                 API client (fetch wrapper for the backend)
│
├── backend/                     NestJS app (dev port 4000, routes under /api)
│   ├── prisma/
│   │   └── schema.prisma        Database schema (User, Vendor, Booking, Review)
│   └── src/
│       ├── modules/
│       │   ├── users/           module + controller + service + dto/
│       │   ├── vendors/         module + controller + service + dto/
│       │   ├── bookings/        module + controller + service + dto/
│       │   └── reviews/         module + controller + service + dto/
│       ├── prisma/              PrismaModule / PrismaService (shared DB access)
│       ├── app.module.ts        Wires all modules together
│       └── main.ts              Bootstrap: CORS, global prefix, validation
│
└── database/                    Reserved for standalone DB scripts/docs
                                  (the actual schema lives in backend/prisma)
```

## Prerequisites

- Node.js 20+ and npm
- A MySQL-compatible database — locally installed, via Docker, or a free-tier
  cloud instance (Railway, PlanetScale, Neon, etc.)

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/VaibhavGupta8318/shadiWalaGhar.git
cd shadiWalaGhar
```

### 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set `DATABASE_URL` to your MySQL connection string:

```
DATABASE_URL="mysql://<user>:<password>@<host>:3306/<database>"
PORT=4000
FRONTEND_URL="http://localhost:3001"
```

Generate the Prisma client and create the database tables:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Start the backend in watch mode:

```bash
npm run start:dev
```

The backend runs at `http://localhost:4000`, with all API routes under
`http://localhost:4000/api` (e.g. `GET /api/health`, `GET /api/vendors`).

### 3. Frontend setup

Open a second terminal:

```bash
cd frontend
npm install
cp .env.local.example .env.local
```

`.env.local` already points at the backend by default:

```
NEXT_PUBLIC_API_URL="http://localhost:4000/api"
```

Start the frontend:

```bash
npm run dev
```

The frontend runs at `http://localhost:3001`. The homepage does a live
server-side connectivity check against `GET /api/health` and shows the
result in the footer.

### 4. Verify everything is connected

Open `http://localhost:3001` in your browser — you should see the landing
page with a "Backend: Connected" badge in the footer. If it says "Offline",
make sure the backend is running and `NEXT_PUBLIC_API_URL` matches the
backend's actual port.

## API Overview

All routes are prefixed with `/api`.

| Method | Route | Description |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/users` | List users |
| GET | `/users/:id` | Get a user |
| POST | `/users` | Create a user |
| GET | `/vendors?category=` | List vendors, optionally filtered by category |
| GET | `/vendors/:id` | Get a vendor |
| POST | `/vendors` | Create a vendor |
| GET | `/bookings` | List bookings |
| GET | `/bookings/:id` | Get a booking |
| POST | `/bookings` | Create a booking |
| GET | `/reviews?vendorId=` | List reviews for a vendor |
| POST | `/reviews` | Create a review |

## Working with the Database (Prisma)

- Schema lives in `backend/prisma/schema.prisma`.
- After changing the schema, generate a migration:
  ```bash
  npx prisma migrate dev --name <describe-the-change>
  ```
- Migration files are committed to git under `backend/prisma/migrations/` —
  this is how the schema stays in sync across every developer's machine.
- To apply existing migrations without creating a new one (e.g. after
  pulling changes from git):
  ```bash
  npx prisma migrate deploy
  ```
- To inspect data visually:
  ```bash
  npx prisma studio
  ```

> Multiple developers should each run their own local (or personal cloud)
> database and sync the **schema** via committed migration files — not
> share one live database for daily development. A separate shared
> staging database is recommended for integration testing.

## Deployment (Free Tier)

| Service | Where |
|---|---|
| Frontend | Vercel |
| Backend | Render / Railway |
| Database | Neon / Supabase / Railway (or any MySQL-compatible host) |
| Redis | Upstash |
| Media storage | Cloudinary or self-hosted MinIO |

Remember to set `FRONTEND_URL` (backend) and `NEXT_PUBLIC_API_URL`
(frontend) to the deployed URLs, and configure CORS accordingly.

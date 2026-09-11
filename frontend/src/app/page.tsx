import { getHealth } from "@/lib/api";

export default async function Home() {
  let status: string;
  let isConnected = true;

  try {
    status = await getHealth();
  } catch {
    status = "Could not reach backend";
    isConnected = false;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
        shadiWalaGhar
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Frontend (Next.js) &harr; Backend (NestJS) connectivity check
      </p>
      <div
        className={`rounded-full px-4 py-2 font-mono text-sm ${
          isConnected
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
        }`}
      >
        Backend status: {status}
      </div>
    </div>
  );
}

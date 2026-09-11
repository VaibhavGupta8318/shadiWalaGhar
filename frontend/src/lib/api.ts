const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';

export async function getHealth(): Promise<string> {
  const res = await fetch(`${API_URL}/health`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }
  return res.text();
}

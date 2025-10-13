// app/writer/poetries/page.tsx
import PoetriesClient from "@/components/PoetriesClient";
import { Poetry } from "@/types/poetry";

export default async function PoetriesPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/poetries`, {
    next: { revalidate: 60 }, // cache for 1 minute
  });

  if (!res.ok) throw new Error("Failed to fetch poetries");

  const poetries: Poetry[] = await res.json();

  return <PoetriesClient poetries={poetries} />;
}

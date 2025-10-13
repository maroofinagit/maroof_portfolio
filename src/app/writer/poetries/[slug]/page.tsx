import { Poetry } from "@/types/poetry";
import { notFound, useRouter } from "next/navigation";
import PoetryDetail from "@/components/PoetryDetail";

export default async function PoetryPage({ params }: { params: Promise<{ slug: string }> }) {
    
    const { slug } = await params; 

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/poetries/${slug}`, { next: { revalidate: 60 } });

    if (!res.ok) return notFound();

    const poetry: Poetry = await res.json();

    return <PoetryDetail poetry={poetry} />;

}

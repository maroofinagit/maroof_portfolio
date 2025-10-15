import { Poetry } from "@/types/poetry";
import { notFound, useRouter } from "next/navigation";
import PoetryDetail from "@/components/PoetryDetail";
import { client } from "@/lib/sanity";

export default async function PoetryPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const query = `*[_type == "poetry" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      content,
      meanings[]{
        word,
        meaning
      },
      tags,
      date
    }`;

    const poetry: Poetry | null = await client.fetch(query, { slug });


    return <PoetryDetail poetry={poetry} />;

}

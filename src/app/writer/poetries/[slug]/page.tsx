import { Poetry } from "@/types/poetry";
import PoetryDetail from "@/components/PoetryDetail";
import { client } from "@/lib/sanity";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const query = `*[_type == "poetry" && slug.current == $slug][0]{
    title,
    desc,
    "cover": cover.asset->url
  }`;

  const poetry: Poetry | null = await client.fetch(query, { slug });

  if (!poetry) {
    return {
      title: "Blog Not Found",
      description: "This poetry does not exist.",
    };
  }

  return {
    title: "Maroof Ali Syed | Portfolio",
    description: "Portfolio of Maroof Ali Syed - Full-Stack Developer, writer and UI/UX Designer.",
    openGraph: {
      title: `${poetry.title} - by Maroof Ali Syed | Portfolio`,
      description: "Portfolio of Maroof Ali Syed - Full-Stack Developer, writer and UI/UX Designer.",
      url: "https://maroofalysyed.vercel.app/maroof.jpg",
      images: [
        {
          url: "https://maroofalysyed.vercel.app/maroof.jpg",
          width: 1200,
          height: 630,
          alt: poetry.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${poetry.title} - by Maroof Ali Syed | Portfolio`,
      description: "Portfolio of Maroof Ali Syed - Full-Stack Developer, writer and UI/UX Designer.",
      images: ["https://maroofalysyed.vercel.app/maroof.jpg"],
    },
  };
}

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

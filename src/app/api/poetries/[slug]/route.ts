import { client } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

// GET /api/poetry/[slug]
export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    try {
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

        const poetry = await client.fetch(query, { slug });

        if (!poetry) {
            return NextResponse.json(
                { message: "Poetry not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(poetry, { status: 200 });
    } catch (error: any) {
        console.error("Error fetching poetry:", error);
        return NextResponse.json(
            { message: "Error fetching poetry", error: error.message },
            { status: 500 }
        );
    }
}

// app/blogs/[slug]/page.tsx
import BlogDetail from "@/components/BlogDetail";
import { client, urlFor } from "@/lib/sanity";
import { Blog } from "@/types/blog";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    desc,
    "cover": cover.asset->url
  }`;

    const blog: Blog | null = await client.fetch(query, { slug });

    if (!blog) {
        return {
            title: "Blog Not Found",
            description: "This blog does not exist.",
        };
    }

    return {
        title: "Maroof Ali Syed | Portfolio",
        description: "Portfolio of Maroof Ali Syed - Full-Stack Developer, writer and UI/UX Designer.",
        openGraph: {
            title: `${blog.title} - by Maroof Ali Syed | Portfolio`,
            description: "Portfolio of Maroof Ali Syed - Full-Stack Developer, writer and UI/UX Designer.",
            url: "https://maroofalysyed.vercel.app/maroof.jpg",
            images: [
                {
                    url: "https://maroofalysyed.vercel.app/maroof.jpg",
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${blog.title} - by Maroof Ali Syed | Portfolio`,
            description: "Portfolio of Maroof Ali Syed - Full-Stack Developer, writer and UI/UX Designer.",
            images: ["https://maroofalysyed.vercel.app/maroof.jpg"],
        },
    };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const query = `*[_type == "blog" && slug.current == $slug][0]{
          _id,
          title,
          desc,
          slug,
          date,
          "cover": cover.asset->url,
          content,
          tags
        }`

    const blog: Blog | null = await client.fetch(query, { slug })

    return <BlogDetail blog={blog} />;
}

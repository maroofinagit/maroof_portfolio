// app/blogs/[slug]/page.tsx
import BlogDetail from "@/components/BlogDetail";
import { client } from "@/lib/sanity";
import { Blog } from "@/types/blog";
import React from "react";

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

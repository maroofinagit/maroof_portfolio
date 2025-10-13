// app/blogs/[slug]/page.tsx
import BlogDetail from "@/components/BlogDetail";
import { Blog } from "@/types/blog";
import { notFound } from "next/navigation";
import React from "react";


export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) return notFound();

    const blog: Blog = await res.json();

    return <BlogDetail blog={blog} />;
}

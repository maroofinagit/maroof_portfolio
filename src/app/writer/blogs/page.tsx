// app/writer/blogs/page.tsx
import BlogsList from "@/components/BlogsClient";
import { Blog } from "@/types/blog";

export default async function BlogsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/blogs`, {
    next: { revalidate: 60 }, // cache 1 minute
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blogs: Blog[] = await res.json();

  return <BlogsList blogs={blogs} />;
}

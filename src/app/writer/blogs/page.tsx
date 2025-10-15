// app/writer/blogs/page.tsx
import BlogsList from "@/components/BlogsClient";
import { client } from "@/lib/sanity";
import { Blog } from "@/types/blog";

export const revalidate = 60;

export default async function BlogsPage() {

  const query = `*[_type == "blog"]{
      _id,
      title,
      desc,
      slug,
      date,
      "cover": cover.asset->url,
      tags
    } | order(date desc)`

  const blogs: Blog[] = await client.fetch(query)

  return <BlogsList blogs={blogs} />;
}

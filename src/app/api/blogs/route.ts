// app/api/blogs/route.js
import { client } from '@/lib/sanity'

export async function GET() {
    try {
        const query = `*[_type == "blog"]{
      _id,
      title,
      desc,
      slug,
      date,
      "cover": cover.asset->url,
      tags
    } | order(date desc)`

        const blogs = await client.fetch(query)

        return new Response(JSON.stringify(blogs))
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to patch blogs" }))
    }
}

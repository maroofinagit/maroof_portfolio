// app/api/blogs/[slug]/route.js
import { client } from '@/lib/sanity'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    try {
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

        const blog = await client.fetch(query, { slug })

        if (!blog) {
            return new Response(JSON.stringify({ error: 'Blog not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        return new Response(JSON.stringify(blog), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        return new Response(JSON.stringify({ error }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}

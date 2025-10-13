import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET() {
    try {
        const data = await client.fetch(`
      *[_type=="poetry"] | order(date desc){
        _id, title,slug, content, meanings, tags, date
      }
    `)
        return NextResponse.json(data)
    } catch (err) {
        return NextResponse.json({ error: "Failed to fetch poetries" }, { status: 500 })
    }
}

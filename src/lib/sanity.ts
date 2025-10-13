import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // find in sanity.json or manage.sanity.io
    dataset: 'production',
    apiVersion: '2025-10-11',    // today’s date is fine
    useCdn: false, // `false` if you need the latest data instantly
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

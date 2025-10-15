// app/writer/poetries/page.tsx
import PoetriesClient from "@/components/PoetriesClient";
import { client } from "@/lib/sanity";
import { Poetry } from "@/types/poetry";

export const revalidate = 60;

export default async function PoetriesPage() {

  const query = `*[_type=="poetry"] | order(date desc){
        _id, title,slug, content, meanings, tags, date
      }`;

  const poetries: Poetry[] = await client.fetch(query);

  return <PoetriesClient poetries={poetries} />;
}

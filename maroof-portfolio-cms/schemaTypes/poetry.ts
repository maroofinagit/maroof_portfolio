import { defineType, defineField } from "sanity";

export default defineType({
    name: "poetry",
    title: "Poetry",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "content",
            title: "Poem Content",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "meanings",
            title: "Word Meanings",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "word", title: "Word", type: "string" },
                        { name: "meaning", title: "Meaning", type: "string" },
                    ],
                },
            ],
            description: "Add explanations for specific words used in the poem",
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
        }),
    ],
});

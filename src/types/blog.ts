import { PortableTextBlock } from "sanity";

export interface Blog {
    _id: string;
    title: string;
    desc: string;
    slug: {
        current: string;
    };
    date: string;
    cover?: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    content: PortableTextBlock[];
    tags: string[];
}

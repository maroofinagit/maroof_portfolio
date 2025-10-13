export interface Meaning {
    word: string;
    meaning: string;
}


export interface Poetry {
    _id: string; // Sanity's id
    title: string;
    slug: {
        current: string;
    };
    content: string;
    meanings?: Meaning[];
    tags?: string[];
    category?: string;
    date: string;
}
// types/book.ts
export interface Book {
    _id: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    longDescription?: string;
    language?: string;
    genre?: string;
    price: number;
    pageCount?: number;
    coverImage: string;
    binding?: string;
    previewImages?: string[];
    status?: string;
    amazonLink?: string;
    flipkartLink?: string;
}

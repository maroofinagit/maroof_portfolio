import { Book } from "@/types/book";

const books: Book[] = [
    {
        _id: "1",
        title: "Jayeza",
        slug: "jayeza",
        description: "Jayeza is a Roman Urdu poetry collection where each poem is accompanied by a short story that deepens its meaning. Through themes of love, loss, and quiet faith, the book reflects inner emotions with simplicity and sincerity, inviting readers to pause and see their own experiences mirrored in words.",

        longDescription: "Jayeza is a reflective collection of Roman Urdu poetry that turns inward, exploring emotions that are often felt but rarely spoken. Each poem is accompanied by a brief narrative, offering context and depth without overpowering the verse itself. Love appears in its gentlest form as well as in its absence, loss lingers as memory rather than finality, and faith emerges quietly, guiding thought rather than demanding attention. The language remains simple and intimate, allowing the reader to connect naturally with the emotions unfolding on the page. \n \n What sets Jayeza apart is its storytelling approach. Every poem is followed by a short reflection or story that reveals the emotional space from which the verse was born.These narratives do not explain the poetry; instead, they sit beside it, like a soft echo, helping the reader feel the weight of each emotion more clearly.This blend of poetry and prose creates a slow, immersive reading experience one meant to be read thoughtfully, not hurriedly.\n \nPresented as a softcover edition of around 70 pages, Jayeza is designed to be light in form yet deep in meaning.It is a book meant to be held close, revisited often, and read in quiet moments of solitude.Whether approached as poetry, reflection, or personal conversation, Jayeza offers a gentle companion for those who find beauty in introspection and honesty in simplicity.",

        language: "Roman Urdu",
        genre: "Poetry",
        pageCount: 72,
        binding: "Paperback",
        price: 349,
        coverImage: "/jayezacover.jpg",
        previewImages: [
            "/jayezacover1.jpg",
            "/jayezacover2.jpg",
            "/jayezacover3.jpg",
        ],
        status: "Coming Soon in January 2026",
    },
    {
        _id: "2",
        title: "Barkat",
        slug: "barkat",
        description:
            "Barkat is a love story novel set during the lockdown, blending Gen-Z reality with old-school romance, where a girl becomes a quiet blessing in a boy’s life, proving that even in isolation, love can arrive with patience, depth, meaning, and emotional healing as it never could have happpened before.",
        longDescription:
            "Barkat is a love story shaped by the stillness of the lockdown era, where time slowed down and emotions grew louder. Set against empty streets and quiet nights, the novel follows two young souls navigating connection in isolation through conversations, longing, and the fragile hope of being understood. Though rooted in a Gen-Z world of modern realities, the love it portrays is unmistakably old-school: patient, sincere, and deeply emotional.\n \n At its heart, Barkat is the story of a boy whose life quietly changes when a girl enters it not as a dramatic rescue, but as a gentle presence. She becomes his barkat, his blessing, bringing warmth to uncertainty and meaning to loneliness. Their bond unfolds slowly, shaped by missed meetings, late-night thoughts, emotional growth, and the unspoken strength of being there for someone when the world feels paused.\n \n Written as a softcover novel of around 600 pages, Barkat is expansive, immersive, and deeply character-driven. It is meant to be lived with, not rushed capturing the emotional depth of first love, emotional healing, and quiet devotion. Blending modern sensibilities with timeless romance, the novel speaks to readers who believe that even in the most uncertain times, love can arrive as a blessing.",
        genre: "Fiction, Love Story",
        pageCount: 600,
        binding: "Paperback",
        price: 449,
        coverImage: "/barkatcover.jpg",
        previewImages: [
            "/barkatcover1.jpg",
            "/barkatcover2.jpg",
            "/barkatcover3.jpg",
        ],
        status: "Coming Soon in Monsoon 2026",
    },
];

export default books;
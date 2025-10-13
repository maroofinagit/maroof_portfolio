import type { Metadata } from "next";
// @ts-ignore
import "./../globals.css";

export const metadata: Metadata = {
    title: "Maroof Ali Syed | Writer",
    description: "Portfolio of Maroof Ali Syed - Full-Stack Developer, UI/UX Designer, Writer, and Photographer.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}

import WContact from "@/components/WContact"
import Footer from "@/components/Footer";
import WriterHomePage from "@/components/WHome";
import ComingSoon from "@/components/ComingSoon"
import WFooter from "@/components/WFooter";

const writerNavLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "#blogs" },
    { name: "Poetry", href: "writer/poetries" },
    { name: "Contact", href: "#wcontact" },
];

export default function HomePage() {
    return (
        <main className=" min-h-screen">
            <WriterHomePage />
            <ComingSoon />
            <WContact />
            <WFooter />
        </main>
    );
}

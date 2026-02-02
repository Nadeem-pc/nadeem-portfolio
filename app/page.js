import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
};
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";
import CollapsibleSection from "@/components/CollapsibleSection";
import MobileSectionNav from "@/components/MobileSectionNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-20 pt-24 lg:flex-row lg:gap-16 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="lg:w-[360px]">
          <div className="flex flex-col gap-6 lg:sticky lg:top-10">
            <Hero />
            <SideNavigation />
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <MobileSectionNav className="hidden lg:block lg:sticky lg:top-10" />
          <CollapsibleSection title="About" defaultOpen>
            <About />
          </CollapsibleSection>
          <CollapsibleSection title="Experience">
            <Experience />
          </CollapsibleSection>
          <CollapsibleSection title="Projects">
            <Projects />
          </CollapsibleSection>
          <CollapsibleSection title="Skills">
            <Skills />
          </CollapsibleSection>
          <CollapsibleSection title="Certifications">
            <Certifications />
          </CollapsibleSection>
          <CollapsibleSection title="Education">
            <Education />
          </CollapsibleSection>
          <CollapsibleSection title="Contact">
            <Contact />
          </CollapsibleSection>
          <Footer />
        </div>
      </div>
    </main>
  );
}

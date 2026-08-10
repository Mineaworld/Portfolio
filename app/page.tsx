import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PanelDivider } from "@/components/layout/PanelDivider";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import dynamic from "next/dynamic";

const GithubActivity = dynamic(
  () => import("@/components/sections/GithubActivity").then((mod) => mod.GithubActivity)
);

const ScrollToTop = dynamic(
  () => import("@/components/ui/ScrollToTop").then((mod) => mod.ScrollToTop)
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="site-shell pt-24 sm:pt-28">
        <Hero />
        <PanelDivider />
        <About />
        <PanelDivider />
        <Skills />
        <PanelDivider />
        <Projects />
        <PanelDivider />
        <GithubActivity />
        <PanelDivider />
        <Experience />
        <PanelDivider />
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}

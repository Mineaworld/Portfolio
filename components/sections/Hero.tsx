import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/ui/social-icons";
import { homepageProfile, portfolioStats } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-28">
      <div className="section-panel rise-in">
        <div className="section-panel-header flex flex-wrap items-center justify-between gap-3">
          <p className="label-mono text-muted-foreground">{homepageProfile.role}</p>
          <span className="accent-chip">{homepageProfile.availability}</span>
        </div>

        <div className="section-panel-body space-y-8">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
            <div className="space-y-6">
              <h1 className="display-title text-5xl leading-none sm:text-6xl lg:text-7xl">
                {homepageProfile.name}
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {homepageProfile.tagline}
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {homepageProfile.summary}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/Resume/Dy_Minea_CV.pdf" target="_blank" rel="noopener noreferrer">
                    View resume
                  </a>
                </Button>
              </div>

              <SocialIcons />
            </div>

            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-xl border border-border/80 bg-secondary/45">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/M.webp"
                    alt="Dy Minea"
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover object-[center_74%]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5 dark:ring-white/10" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <article className="rounded-xl border border-border/80 bg-background/70 p-3">
                  <p className="label-mono text-muted-foreground">Projects</p>
                  <p className="mt-2 text-lg font-semibold sm:text-xl">
                    {portfolioStats.projectsCompleted}
                  </p>
                </article>
                <article className="rounded-xl border border-border/80 bg-background/70 p-3">
                  <p className="label-mono text-muted-foreground">Experience</p>
                  <p className="mt-2 whitespace-nowrap text-sm font-semibold sm:text-base lg:text-lg">
                    {portfolioStats.yearsOfExperience}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

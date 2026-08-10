import { homepageProfile } from "@/lib/data";

const focusAreas = [
  "Frontend work with product thinking",
  "Design systems that stay readable",
  "Fast, smooth interactions",
  "Code that stays maintainable",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="section-panel rise-in">
        <div className="section-panel-header">
          <p className="label-mono text-muted-foreground">About</p>
          <h2 className="font-sans font-medium tracking-tight mt-2 text-3xl sm:text-4xl">
            I build products that feel clear, useful, and ready to ship.
          </h2>
        </div>

        <div className="section-panel-body grid gap-8 lg:grid-cols-[1.45fr_1fr]">
          <div className="space-y-4">
            {homepageProfile.about.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-xl border border-border/80 bg-secondary/45 p-4">
            <p className="label-mono text-muted-foreground">Focus Areas</p>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((focus) => (
                <li key={focus} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{focus}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

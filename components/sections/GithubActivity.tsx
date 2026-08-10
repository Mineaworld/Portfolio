"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import React, { useEffect, useState, useRef } from "react";
import "react-activity-calendar/tooltips.css"; // Import styles for floating tooltips
import { format, parseISO } from "date-fns";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export function GithubActivity() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  // Mouse drag to scroll handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="github-activity" className="scroll-mt-28">
      <div className="section-panel rise-in">
        <div className="section-panel-header">
          <p className="label-mono text-muted-foreground">GitHub Activity</p>
        </div>

        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`section-panel-body mt-4 p-4 md:p-8 rounded-xl border border-border/80 bg-background/70 overflow-x-auto flex justify-start sm:justify-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {mounted ? (
            <div className="min-w-max pointer-events-auto">
              <GitHubCalendar
                username="Mineaworld"
                colorScheme={isDark ? "dark" : "light"}
                renderBlock={(block, activity) => {
                  const today = new Date().getTime();
                  const blockDate = parseISO(activity.date).getTime();
                  const diffDays = Math.floor((today - blockDate) / (1000 * 60 * 60 * 24));
                  const delay = Math.max(0, 365 - diffDays) * 1.5; // Left-to-right sweep (~550ms total stagger)

                  return React.cloneElement(block, {
                    className: "hover:opacity-70 cursor-pointer",
                    style: {
                      ...block.props.style,
                      transitionProperty: "fill, opacity, transform",
                      transitionDuration: "400ms",
                      transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
                      transitionDelay: `${delay}ms`,
                    },
                    onClick: (e: React.MouseEvent) => {
                      if (isDragging) {
                        e.preventDefault();
                      }
                    }
                  });
                }}
                tooltips={{
                  activity: {
                    text: (activity) => {
                      const formattedDate = format(parseISO(activity.date), "dd MMM yyyy");
                      return `${activity.count} contributions on ${formattedDate}`;
                    }
                  }
                }}
                theme={{
                  light: [
                    "hsl(var(--muted))",
                    "hsl(var(--primary) / 0.4)",
                    "hsl(var(--primary) / 0.6)",
                    "hsl(var(--primary) / 0.8)",
                    "hsl(var(--primary))",
                  ],
                  dark: [
                    "hsl(var(--muted))",
                    "hsl(var(--primary) / 0.4)",
                    "hsl(var(--primary) / 0.6)",
                    "hsl(var(--primary) / 0.8)",
                    "hsl(var(--primary))",
                  ],
                }}
              />
            </div>
          ) : (
             <div className="h-[150px] animate-pulse rounded-md bg-muted w-full max-w-4xl" />
          )}
        </div>
      </div>
    </section>
  );
}

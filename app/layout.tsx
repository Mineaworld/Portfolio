import "./globals.css";
import type { Metadata } from "next";
import { Inter, Instrument_Serif, Space_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

const extensionHydrationCleanupScript = String.raw`
(() => {
  const attributeNames = ["bis_skin_checked"];

  const removeInjectedAttributes = (root) => {
    if (!(root instanceof Element || root instanceof Document)) {
      return;
    }

    if (root instanceof Element) {
      attributeNames.forEach((attributeName) => root.removeAttribute(attributeName));
    }

    root.querySelectorAll(attributeNames.map((attributeName) => "[" + attributeName + "]").join(",")).forEach((element) => {
      attributeNames.forEach((attributeName) => element.removeAttribute(attributeName));
    });
  };

  removeInjectedAttributes(document);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.target instanceof Element && mutation.attributeName) {
        mutation.target.removeAttribute(mutation.attributeName);
      }

      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          removeInjectedAttributes(node);
        }
      });
    });
  });

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: attributeNames,
  });

  window.addEventListener("load", () => observer.disconnect(), { once: true });
})();
`;

export const metadata: Metadata = {
  title: "Dy Minea | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Dy Minea, a software engineer specializing in React, Next.js, and modern web development. Building fast, scalable digital products.",
  metadataBase: new URL("https://dyminea.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dy Minea | Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Dy Minea, a software engineer specializing in React, Next.js, and modern web development. Building fast, scalable digital products.",
    url: "https://dyminea.dev",
    siteName: "Dy Minea Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dy Minea - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dy Minea | Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Dy Minea, a software engineer specializing in React, Next.js, and modern web development.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <Script id="extension-hydration-cleanup">
          {extensionHydrationCleanupScript}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${spaceMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

/**
 * Root Layout — Advenco Blinds & Shutters
 *
 * Fonts:
 *  - Outfit      → headings (h1–h6), display text (--font-heading / --font-display)
 *  - Space Grotesk → body copy, paragraphs, labels, inputs, buttons (--font-body)
 *
 * Both fonts are bundled locally so builds do not depend on Google Fonts
 * responses. CSS variable tokens are picked up by @theme in globals.css.
 */

import type { Metadata } from "next";
import localFont from "next/font/local";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

/* ─────────────────────────────────────────────────
   Font Loaders
───────────────────────────────────────────────── */

/** Outfit — used for all headings, display text, and UI labels */
const outfit = localFont({
  src: "./fonts/outfit-latin-variable.woff2",
  variable: "--font-heading",   // maps to Tailwind token
  weight: "300 900",
  style: "normal",
  display: "swap",
});

/** Space Grotesk — used for body copy, paragraphs, inputs, buttons */
const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin-variable.woff2",
  variable: "--font-body",      // maps to Tailwind token
  weight: "300 700",
  style: "normal",
  display: "swap",
});

/* ─────────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Advenco Blinds and Shutters | High-Quality Window Blinds & Shutters",
  description:
    "Explore a wide selection of high-quality window blinds and shutters at Advenco. Discover motorized, roller, Venetian, and custom-made solutions for your home or business.",
  keywords:
    "window blinds UK, plantation shutters, roller blinds, venetian blinds, motorised blinds, made to measure blinds",
  openGraph: {
    title: "Advenco Blinds and Shutters | High-Quality Window Blinds & Shutters",
    description:
      "Premium window blinds and shutters in the UK. Bespoke plantation shutters, roller blinds, and motorised solutions. Free consultation and installation.",
    url: "https://advencoblindsandshutters.co.uk",
    siteName: "Advenco Blinds and Shutters",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/stock/photo-1745761264415-6acbdb47a0c7.jpg",
        width: 1200,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advenco Blinds and Shutters | High-Quality Window Blinds & Shutters",
    description: "Premium window blinds and shutters in the UK.",
  },
  icons: {
    icon: "/images/2024/10/cropped-favicon-32x32.webp",
    apple: "/images/2024/10/cropped-favicon-180x180.webp",
  },
};

/* ─────────────────────────────────────────────────
   Root Layout
───────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

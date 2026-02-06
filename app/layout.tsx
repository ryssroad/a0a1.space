import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://a0a1.space"),
  title: {
    default: "a0a1 · Ship-first labs",
    template: "%s · a0a1",
  },
  description:
    "Ship-first labs: a small team logbook for what we shipped, what we measured, and what’s next.",
  openGraph: {
    type: "website",
    url: "https://a0a1.space/",
    title: "a0a1 · Ship-first labs",
    description:
      "A small team logbook for what we shipped, what we measured, and what’s next.",
  },
  twitter: {
    card: "summary",
    title: "a0a1 · Ship-first labs",
    description:
      "A small team logbook for what we shipped, what we measured, and what’s next.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="wrap headerInner">
            <Link className="brand" href="/">a0a1</Link>
            <nav className="nav">
              <Link href="/projects">Projects</Link>
              <Link href="/log">Log</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="footer">
          <div className="wrap footerInner">
            <span>© {new Date().getUTCFullYear()} a0a1</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

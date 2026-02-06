import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "a0a1 lab",
  description: "Projects + logbook",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="wrap headerInner">
            <Link className="brand" href="/">a0a1 lab</Link>
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
            <span>© {new Date().getUTCFullYear()} a0a1 lab</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

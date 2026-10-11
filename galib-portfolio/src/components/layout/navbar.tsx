import Link from "next/link";
import { site } from "@/data/site";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Primary navigation">
        <Link className="brand" href="/">
          {site.name}
        </Link>
        <div className="nav-links">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

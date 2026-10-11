import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 {site.name}</span>
      <span>
        <Link className="text-link" href="/contact">Get in touch</Link>
      </span>
    </footer>
  );
}

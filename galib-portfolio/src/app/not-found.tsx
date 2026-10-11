import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell">
      <div className="prose">
        <p className="eyebrow">404</p>
        <h1>That page does not exist.</h1>
        <p className="lead">The link may be outdated or the project may have moved.</p>
        <Link className="button" href="/">Return home</Link>
      </div>
    </div>
  );
}

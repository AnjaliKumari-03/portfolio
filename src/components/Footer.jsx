import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-muted hover:text-roseDeep transition-colors"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            className="text-xs text-muted hover:text-roseDeep transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-roseDeep transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="text-xs text-muted hover:text-roseDeep transition-colors"
          >
            Resume
          </a>
          <a
            href="#hero"
            className="text-xs text-muted hover:text-roseDeep transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

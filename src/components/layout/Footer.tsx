import { navLinks, socialLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A0A]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">
              {siteConfig.name}
              <span className="text-electric">.</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              AI Engineer & Technology Leader building intelligent systems
              for real-world impact.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-electric"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Connect
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={socialLinks.email}
                  className="text-sm text-gray-400 transition-colors hover:text-electric"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-electric"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-electric"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.resume}
                  className="text-sm text-gray-400 transition-colors hover:text-electric"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js &amp; deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}

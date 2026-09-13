import Link from "next/link"
import { Github, Twitter, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  products: [
    { name: "NGAI Core", href: "/products#core" },
    { name: "NGAI Studio", href: "/products#studio" },
    { name: "NGAI API", href: "/products#api" },
    { name: "Enterprise", href: "/products#enterprise" },
    { name: "Pricing", href: "/products#pricing" },
  ],
  developers: [
    { name: "Documentation", href: "/developers#docs" },
    { name: "API Reference", href: "/developers#api" },
    { name: "SDKs & Libraries", href: "/developers#sdks" },
    { name: "Tutorials", href: "/developers#tutorials" },
    { name: "Community", href: "/developers#community" },
  ],
  company: [
    { name: "About", href: "/company#about" },
    { name: "Careers", href: "/company#careers" },
    { name: "Blog", href: "/company#blog" },
    { name: "Press", href: "/company#press" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Research", href: "/research" },
    { name: "Case Studies", href: "/company" },
    { name: "Partners", href: "/company" },
    { name: "Status", href: "https://status.ngai.com" },
    { name: "Security", href: "/platform" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/contact" },
    { name: "Terms of Service", href: "/contact" },
    { name: "Cookie Policy", href: "/contact" },
    { name: "Acceptable Use", href: "/contact" },
  ],
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/ngai", icon: Github },
  { name: "Twitter", href: "https://twitter.com/ngai", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/ngai", icon: Linkedin },
  { name: "YouTube", href: "https://youtube.com/@ngai", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-bold text-sm">NG</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">NGAI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building the next generation of artificial intelligence infrastructure for enterprises worldwide.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Products</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Developers</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NGAI, Inc. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with precision for the future of AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

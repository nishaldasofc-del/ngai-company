"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Platform", href: "/platform" },
  { 
    name: "Products", 
    href: "/products",
    children: [
      { name: "NGAI Core", href: "/products#core" },
      { name: "NGAI Studio", href: "/products#studio" },
      { name: "NGAI API", href: "/products#api" },
    ]
  },
  { name: "Developers", href: "/developers" },
  { name: "Research", href: "/research" },
  { name: "Company", href: "/company" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "glass border-b border-border/50" 
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity duration-300"
          >
            <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">NG</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">NGAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg",
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      activeDropdown === item.name && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-48 py-2 glass rounded-lg border border-border/50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground">
                Contact
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-border/50 glass overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                      pathname === item.href
                        ? "text-foreground bg-secondary/50"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary/30"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-border/50 space-y-2">
                <Link href="/contact" className="block">
                  <Button variant="ghost" className="w-full justify-start text-foreground/70">
                    Contact
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

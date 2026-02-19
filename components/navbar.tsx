"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Download, Eye } from "lucide-react"

const RESUME_DRIVE_VIEW = "https://drive.google.com/file/d/1LtwZPCVIZ5BEfzreBViYOV4DcoupW7S-/view?usp=sharing"
const RESUME_DRIVE_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1LtwZPCVIZ5BEfzreBViYOV4DcoupW7S-"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-primary font-mono">
          {"<AA />"}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Resume dropdown */}
          <div className="relative" ref={resumeRef}>
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="text-sm border border-primary text-primary px-4 py-1.5 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Resume
            </button>
            {resumeOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#111111] border border-border rounded-lg shadow-xl overflow-hidden z-50">
                <a
                  href={RESUME_DRIVE_VIEW}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Eye size={16} />
                  View
                </a>
                <a
                  href={RESUME_DRIVE_DOWNLOAD}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-border px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href={RESUME_DRIVE_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm border border-primary text-primary px-4 py-1.5 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Eye size={14} />
              View Resume
            </a>
            <a
              href={RESUME_DRIVE_DOWNLOAD}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm border border-border text-foreground px-4 py-1.5 rounded hover:border-primary hover:text-primary transition-colors"
            >
              <Download size={14} />
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const roles = ["Cybersecurity Analyst", "App Developer"]

export function Hero() {
  const [greeting, setGreeting] = useState("")
  const fullGreeting = "// Hello World"
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleText, setRoleText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Greeting typing
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setGreeting(fullGreeting.slice(0, index + 1))
      index++
      if (index >= fullGreeting.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  // Role typing loop
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && roleText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setRoleText(currentRole.slice(0, roleText.length + 1))
      }, 100)
    } else if (!isDeleting && roleText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && roleText.length > 0) {
      timeout = setTimeout(() => {
        setRoleText(currentRole.slice(0, roleText.length - 1))
      }, 50)
    } else if (isDeleting && roleText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [roleText, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,38,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Left: text */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-mono text-primary text-sm mb-6 tracking-wider">
            {greeting}
            <span className="animate-pulse">|</span>
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance water-float">
            Adarsh Anand
          </h1>

          <p className="text-xl md:text-2xl text-primary font-mono mb-6 h-8">
            {roleText}
            <span className="animate-pulse text-primary">|</span>
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl text-pretty">
            Fun with machines. Ready to learn. Own world matters. Passionate about
            securing digital systems and building impactful applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-border text-foreground px-8 py-3 rounded font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/adarshanand2125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=adarsh21255@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Right: photo with mirror */}
        <div className="relative shrink-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
            <Image
              src="/images/profile.jpg"
              alt="Adarsh Anand"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Mirror / reflection */}
          <div
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-56 h-20 md:w-72 md:h-24 rounded-full overflow-hidden opacity-20 blur-[2px]"
            style={{ transform: "translateX(-50%) scaleY(-1)" }}
          >
            <Image
              src="/images/profile.jpg"
              alt=""
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Glow under reflection */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-8 md:w-52 md:h-10 bg-primary/10 rounded-full blur-xl" />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "// Hello World"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1))
      index++
      if (index >= fullText.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

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

      <div className="relative z-10 max-w-3xl text-center">
        <p className="font-mono text-primary text-sm mb-6 tracking-wider">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Adarsh Anand
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
          Fun with machines. Ready to learn. Own world matters. Passionate about
          securing digital systems and building impactful applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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

        <div className="flex items-center justify-center gap-6">
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
            href="mailto:adarsh21255@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}

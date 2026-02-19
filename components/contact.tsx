"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import { ScrollAnimate, NetflixCard } from "./scroll-animate"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollAnimate>
          <p className="font-mono text-primary text-sm mb-2">
            {"// Get In Touch"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mb-12 leading-relaxed">
            {
              "Interested in collaborating or have a question? Feel free to reach out. I'm always open to discussing new projects and opportunities."
            }
          </p>
        </ScrollAnimate>

        <div className="grid sm:grid-cols-3 gap-6">
          <ScrollAnimate delay={100}>
            <NetflixCard>
              <a
                href="https://mail.google.com/mail/?view=cm&to=adarsh21255@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 bg-secondary border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  adarsh21255@gmail.com
                </span>
              </a>
            </NetflixCard>
          </ScrollAnimate>

          <ScrollAnimate delay={200}>
            <NetflixCard>
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 bg-secondary border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Github size={24} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  GitHub
                </span>
              </a>
            </NetflixCard>
          </ScrollAnimate>

          <ScrollAnimate delay={300}>
            <NetflixCard>
              <a
                href="https://www.linkedin.com/in/adarshanand2125"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 bg-secondary border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Linkedin size={24} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  LinkedIn
                </span>
              </a>
            </NetflixCard>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  )
}

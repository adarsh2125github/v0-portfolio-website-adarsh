"use client"

import { ExternalLink } from "lucide-react"
import { ScrollAnimate, NetflixCard } from "./scroll-animate"

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A simple Kotlin Android app to manage and track daily expenses with clean UI and local data persistence.",
    tags: ["Kotlin", "Android", "Mobile"],
    github: "https://github.com/adarsh2125github/simple_expense_tracker",
  },
  {
    title: "Linux System Monitor",
    description:
      "Automation scripts in Bash to detect suspicious logins, monitor disk usage, track system updates, and manage user sessions.",
    tags: ["Python", "Linux", "CLI"],
    github: "https://github.com/adarsh2125github/linux-system-monitor",
  },
  {
    title: "Cyber Toolkit",
    description:
      "An all-in-one cybersecurity utility featuring Port Scanner, WHOIS lookup, hash generator, networking helpers and more.",
    tags: ["Python", "Cybersecurity", "Networking"],
    github: "https://github.com/adarsh2125github/Cyber_Toolkit",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollAnimate>
          <p className="font-mono text-primary text-sm mb-2">
            {"// Featured Work"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Projects
          </h2>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimate key={project.title} delay={index * 150}>
              <NetflixCard>
                <div className="group bg-secondary border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-2"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </NetflixCard>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  )
}

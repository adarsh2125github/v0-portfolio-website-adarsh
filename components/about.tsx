"use client"

import { Shield, Terminal, Cpu } from "lucide-react"
import { ScrollAnimate, NetflixCard } from "./scroll-animate"

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollAnimate>
          <p className="font-mono text-primary text-sm mb-2">{"// About Me"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Who I Am
          </h2>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollAnimate delay={100}>
            <div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {
                  "Here I've described my mindset and motivation. I'm interested in building impactful applications and securing digital systems, which is why most of my work focuses on networking, security tools, and system monitoring."
                }
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4 border border-border water-float">
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Projects Built</p>
                </div>
                <div className="bg-secondary rounded-lg p-4 border border-border water-float-delay-1">
                  <p className="text-2xl font-bold text-primary">8+</p>
                  <p className="text-sm text-muted-foreground">Certificates</p>
                </div>
                <div className="bg-secondary rounded-lg p-4 border border-border water-float-delay-2">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">CTF Participants</p>
                </div>
                <div className="bg-secondary rounded-lg p-4 border border-border water-float-delay-3">
                  <p className="text-2xl font-bold text-primary">B.Tech</p>
                  <p className="text-sm text-muted-foreground">CSE Student</p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          <div className="space-y-6">
            <ScrollAnimate delay={200}>
              <NetflixCard>
                <div className="flex gap-4 items-start bg-secondary rounded-lg p-6 border border-border">
                  <div className="p-3 rounded bg-primary/10 text-primary shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Cybersecurity
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Passionate about CTFs, penetration testing, and network
                      security tools.
                    </p>
                  </div>
                </div>
              </NetflixCard>
            </ScrollAnimate>

            <ScrollAnimate delay={300}>
              <NetflixCard>
                <div className="flex gap-4 items-start bg-secondary rounded-lg p-6 border border-border">
                  <div className="p-3 rounded bg-primary/10 text-primary shrink-0">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      System Administration
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Red Hat certified with hands-on Linux system management and
                      automation.
                    </p>
                  </div>
                </div>
              </NetflixCard>
            </ScrollAnimate>

            <ScrollAnimate delay={400}>
              <NetflixCard>
                <div className="flex gap-4 items-start bg-secondary rounded-lg p-6 border border-border">
                  <div className="p-3 rounded bg-primary/10 text-primary shrink-0">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      App Development
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Building Android applications with Kotlin, Jetpack Compose, and
                      clean architecture.
                    </p>
                  </div>
                </div>
              </NetflixCard>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  )
}

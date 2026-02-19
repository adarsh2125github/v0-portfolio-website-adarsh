"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "C", level: 80 },
  { name: "C++", level: 90 },
  { name: "Python", level: 85 },
  { name: "Java", level: 85 },
  { name: "Kotlin", level: 80 },
  { name: "HTML / CSS / JS", level: 88 },
  { name: "SQL", level: 75 },
  { name: "Shell Scripting", level: 82 },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-foreground font-medium text-sm">{name}</span>
        <span className="font-mono text-primary text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden border border-border">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-primary text-sm mb-2">
          {"// Tech Stack"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Skills & Proficiency
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}

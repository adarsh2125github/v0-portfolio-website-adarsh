import { Trophy, Flag } from "lucide-react"

const achievements = [
  {
    icon: Flag,
    title: "CTF Event Organizer & Performer",
    description:
      "Designed and deployed Capture The Flag challenges across Web Exploitation, Cryptography, and Reverse Engineering domains. Successfully hosted a CTF event engaging 500+ participants, demonstrating strong organizational and technical skills.",
    date: "February 2025",
  },
  {
    icon: Trophy,
    title: "HackerThon Top 10 Finish",
    description:
      "Secured a Top 10 position in a competitive Hackathon event, showcasing rapid problem-solving, team collaboration, and expertise in cybersecurity and networking solutions under time pressure.",
    date: "2025",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-primary text-sm mb-2">
          {"// Milestones"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative bg-secondary border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded bg-primary/10 text-primary">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-primary/80">
                      {item.date}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed pl-1">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

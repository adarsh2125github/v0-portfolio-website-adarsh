import { Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    number: "01",
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    detail: "Linux system management, command-line, users & permissions",
    date: "July 2025",
  },
  {
    number: "02",
    title: "Red Hat System Administration II (RH134)",
    issuer: "Red Hat",
    detail: "Storage, security, system monitoring, advanced admin",
    date: "July 2025",
  },
  {
    number: "03",
    title: "Cryptography & Network Security",
    issuer: "NPTEL",
    detail: "IIT Course Certification",
    date: "May 2025",
  },
  {
    number: "04",
    title: "Bits & Bytes of Computer Networking",
    issuer: "Coursera",
    detail: "Networking basics and data transmission fundamentals",
    date: "September 2024",
  },
  {
    number: "05",
    title: "TCP/IP Advanced Topics",
    issuer: "Coursera",
    detail: "Deep dive into TCP/IP protocols and networking layers",
    date: "September 2024",
  },
  {
    number: "06",
    title: "Fundamentals of Network Communication",
    issuer: "Coursera",
    detail: "TCP/IP, Packet Switching, Reliable Services",
    date: "September 2024",
  },
  {
    number: "07",
    title: "Peer-to-Peer Protocols & LANs",
    issuer: "Coursera",
    detail: "Architecture and implementation of P2P systems",
    date: "September 2024",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-primary text-sm mb-2">
          {"// Credentials"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Certificates
        </h2>

        <div className="grid gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.number}
              className="group flex items-center gap-6 bg-secondary border border-border rounded-lg px-6 py-5 hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors font-mono shrink-0">
                {cert.number}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {cert.detail}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-muted-foreground shrink-0">
                <Award size={16} className="text-primary/50" />
                <span className="text-xs font-mono">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

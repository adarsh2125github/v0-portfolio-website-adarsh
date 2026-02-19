"use client"

import { Award, ExternalLink } from "lucide-react"
import { ScrollAnimate, NetflixCard } from "./scroll-animate"

const certificates = [
  {
    number: "01",
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    detail: "Linux system management, command-line, users & permissions",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1sL3ABuTpgt7GM5Z1THZQ4Jpr-LAFV2C-/view?usp=drive_link",
  },
  {
    number: "02",
    title: "Introduction to Hardware",
    issuer: "Certification",
    detail: "Fundamentals of computer hardware and system components",
    date: "2024",
    link: "https://drive.google.com/file/d/1BfxFF-ydvTkSIWjLIKMC1sYrPTC5E4Rw/view?usp=drive_link",
  },
  {
    number: "03",
    title: "Cryptography & Network Security",
    issuer: "NPTEL",
    detail: "IIT Course Certification",
    date: "May 2025",
    link: "https://drive.google.com/file/d/1PEMvRpuW2352Pyu9YLulNoyQCzJVieNI/view?usp=drive_link",
  },
  {
    number: "04",
    title: "Bits & Bytes of Computer Networking",
    issuer: "Coursera",
    detail: "Networking basics and data transmission fundamentals",
    date: "September 2024",
    link: "https://drive.google.com/file/d/18TpQIVRpBG3L7jhfCF1y2OoBJaAet9DV/view?usp=drive_link",
  },
  {
    number: "05",
    title: "TCP/IP Advanced Topics",
    issuer: "Coursera",
    detail: "Deep dive into TCP/IP protocols and networking layers",
    date: "September 2024",
    link: "https://drive.google.com/file/d/1zs4Yph3dBEQe0R9o_uFInI3Ycym3zooi/view?usp=drive_link",
  },
  {
    number: "06",
    title: "Fundamentals of Network Communication",
    issuer: "Coursera",
    detail: "TCP/IP, Packet Switching, Reliable Services",
    date: "September 2024",
    link: "https://drive.google.com/file/d/1I_gdnmWWKICe4SXGPeP-lfefB3s3nv4W/view?usp=drive_link",
  },
  {
    number: "07",
    title: "Peer-to-Peer Protocols & LANs",
    issuer: "Coursera",
    detail: "Architecture and implementation of P2P systems",
    date: "September 2024",
    link: "https://drive.google.com/file/d/1JipO98AwDFJiUQyehIRS1aEghyO9ELtc/view?usp=drive_link",
  },
  {
    number: "08",
    title: "Network Security & Database Vulnerabilities",
    issuer: "Coursera",
    detail: "Security practices for networks and database systems",
    date: "September 2024",
    link: "https://drive.google.com/file/d/13E9wYR22TWAw7RFnvam6LUB4tFoNWi7K/view?usp=drive_link",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollAnimate>
          <p className="font-mono text-primary text-sm mb-2">
            {"// Credentials"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Certificates
          </h2>
        </ScrollAnimate>

        <div className="grid gap-4">
          {certificates.map((cert, index) => (
            <ScrollAnimate key={cert.number} delay={index * 80}>
              <NetflixCard>
                <a
                  href={cert.link}
                  className="group flex items-center gap-6 bg-secondary border border-border rounded-lg px-6 py-5 hover:border-primary/50 transition-all duration-300 cursor-pointer"
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
                  <div className="hidden sm:flex items-center gap-3 text-muted-foreground shrink-0">
                    <Award size={16} className="text-primary/50" />
                    <span className="text-xs font-mono">{cert.date}</span>
                    <ExternalLink
                      size={14}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                </a>
              </NetflixCard>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  )
}

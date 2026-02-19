import { GraduationCap } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech - Computer Science",
    school: "Lovely Professional University",
    location: "Punjab, India",
    detail: "CGPA: 5.16 | Since 2023",
  },
  {
    degree: "Intermediate (12th)",
    school: "Kendriya Vidyalaya Muzaffarpur",
    location: "Muzaffarpur, India",
    detail: "Percentage: 63% | 2022-2023",
  },
  {
    degree: "Matriculation (10th)",
    school: "Kendriya Vidyalaya Lakhanpur",
    location: "Lakhanpur, Jammu",
    detail: "Percentage: 61.8% | 2020-2021",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-primary text-sm mb-2">
          {"// Education"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Academic Background
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 md:mt-0 z-10" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-secondary border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="text-primary" size={20} />
                      <h3 className="font-semibold text-foreground">
                        {item.degree}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.school}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.location}
                    </p>
                    <p className="text-primary text-sm mt-2 font-mono">
                      {item.detail}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

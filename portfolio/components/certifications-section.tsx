"use client"

import { Award, BookOpen, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    icon: BookOpen,
  },
  {
    title: "Certified Salesforce Administrator",
    issuer: "Salesforce",
    icon: Award,
  },
]

const achievements = [
  {
    title: "Innovative and Sustainable Business Practices in the Prevailing COVID Era",
    description: "Presented a research paper at a national conference at STEP-HBTI. Research published in the Bloomberg Journal.",
    type: "Research Publication",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-xl group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <cert.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              Awards & Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-xl group cursor-default"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {achievement.type}
                  </span>
                  <h4 className="text-foreground font-medium mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

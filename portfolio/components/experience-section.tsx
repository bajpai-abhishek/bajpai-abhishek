"use client"

import { Briefcase, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Meta Ads Expert | Social Media Specialist",
    company: "UV-Soft Solution",
    location: "India & Australia",
    period: "July 2025 – Present",
    description: [
      "Plan, execute, and optimize Meta Ads campaigns focused on brand awareness, engagement, leads, sales, and app installs",
      "Continuously monitor key performance metrics such as ROAS, CTR, CPC, and conversion rate",
      "Build structured funnels including cold, warm, and retargeting audiences",
      "Collaborate with design and content teams to create high-impact ad creatives",
      "Work closely on landing page and product page optimization",
      "Prepare performance insights and reports to guide future strategies",
    ],
    current: true,
  },
  {
    title: "Performance Marketing Executive",
    company: "Groupick Getzie Technology Pvt. Ltd.",
    location: "Mumbai, India",
    period: "March 2023 – July 2025",
    description: [
      "Managed and optimized large-scale Meta Ads campaigns using data-driven decision-making",
      "Identified top-performing audiences, creatives, and placements through deep campaign analysis and A/B testing",
      "Developed full-funnel strategies to support customer acquisition, retargeting, and retention",
      "Played an active role in improving website and product page UI/UX for better conversion",
      "Created and executed social media content calendars aligned with campaign objectives",
      "Coordinated with internal teams for creative production, influencer campaigns, and performance tracking",
    ],
    current: false,
  },
  {
    title: "Community Manager Intern",
    company: "Nblik – Online Communication App",
    location: "Remote",
    period: "Aug 2021 – Oct 2021",
    description: [
      "Managed and nurtured online and offline brand communities to improve engagement and loyalty",
      "Coordinated with product and tech teams to track user feedback and support feature testing",
      "Analyzed daily performance alongside sales and IT teams to enhance overall user experience",
    ],
    current: false,
    internship: true,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-4 border-background ${
                  exp.current ? "bg-primary" : "bg-muted-foreground"
                } ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:-right-2"
                    : "left-0 md:-left-2"
                } transform -translate-x-1/2 md:translate-x-0`}
              />

              <div className="glass-card p-6 rounded-xl ml-6 md:ml-0">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Current
                    </span>
                  )}
                  {exp.internship && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                      Internship
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

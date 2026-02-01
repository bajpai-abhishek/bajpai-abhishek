"use client"

import { Target, TrendingUp, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Data-Driven",
    description: "Making decisions backed by analytics and performance metrics",
  },
  {
    icon: TrendingUp,
    title: "ROI Focused",
    description: "Optimizing campaigns for maximum return on investment",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working closely with design, content, and product teams",
  },
  {
    icon: Lightbulb,
    title: "Creative",
    description: "Blending storytelling with performance marketing",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a digital marketer who enjoys working at the intersection of{" "}
              <span className="text-primary font-medium">performance, creativity, and strategy</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the past few years, I&apos;ve worked with brands across India and Australia, 
              managing Meta Ads campaigns focused on awareness, engagement, lead generation, 
              sales, and app installs. I&apos;ve been deeply involved in the entire marketing 
              funnel—from audience research and creative ideation to campaign optimization, 
              reporting, and conversion rate improvement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What sets me apart is my ability to look beyond ads. I actively collaborate on 
              product page optimization, UI/UX improvements, and content strategy to ensure 
              traffic converts—not just clicks. I also have experience managing influencer 
              campaigns and community engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-4">
              &quot;I believe strong marketing comes from combining data, creativity, and customer 
              understanding, and that&apos;s exactly how I approach every project.&quot;
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

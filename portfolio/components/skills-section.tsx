"use client"

import type { LucideIcon } from "lucide-react"
import { Target, TrendingUp, Users, Zap, BarChart3, Smartphone, Megaphone, Palette, Layout, LineChart, GitBranch, Search } from "lucide-react"

interface Skill {
  name: string
  icon: LucideIcon
  description: string
}

interface Tool {
  name: string
  description: string
  category: "advertising" | "analytics" | "tracking" | "ecommerce" | "design"
}

const coreSkills: Skill[] = [
  { 
    name: "Meta Ads Strategy & Execution", 
    icon: Target,
    description: "Full-funnel campaign strategy from awareness to conversion"
  },
  { 
    name: "Performance Marketing & Funnel Building", 
    icon: TrendingUp,
    description: "Data-driven funnel optimization for maximum ROI"
  },
  { 
    name: "Audience Research & Segmentation", 
    icon: Users,
    description: "Deep audience insights for precise targeting"
  },
  { 
    name: "Retargeting & Conversion Optimization", 
    icon: Zap,
    description: "Strategic retargeting to boost conversion rates"
  },
  { 
    name: "A/B Testing (Creatives, Audiences, Placements)", 
    icon: BarChart3,
    description: "Systematic testing for continuous improvement"
  },
  { 
    name: "App Install & Engagement Campaigns", 
    icon: Smartphone,
    description: "Mobile-first campaigns driving app growth"
  },
  { 
    name: "Influencer Marketing Management", 
    icon: Megaphone,
    description: "End-to-end influencer partnership management"
  },
  { 
    name: "Social Media Content Strategy", 
    icon: Palette,
    description: "Strategic content planning for engagement"
  },
  { 
    name: "Creative Direction & Ad Design Briefing", 
    icon: Palette,
    description: "Clear creative briefs for high-performing ads"
  },
  { 
    name: "Landing Page & Product Page Optimization", 
    icon: Layout,
    description: "CRO-focused page optimization"
  },
  { 
    name: "UI/UX Collaboration for CRO", 
    icon: Layout,
    description: "Cross-team collaboration for better UX"
  },
  { 
    name: "Campaign Analysis & Performance Reporting", 
    icon: LineChart,
    description: "Comprehensive reporting with actionable insights"
  },
  { 
    name: "Cross-functional Team Collaboration", 
    icon: GitBranch,
    description: "Effective coordination across teams"
  },
  { 
    name: "SEO, ASO, Backlinking", 
    icon: Search,
    description: "Organic growth and visibility strategies"
  },
]

const tools: Tool[] = [
  { 
    name: "Meta Ads Manager", 
    description: "Campaign creation, scaling, A/B testing, and optimization",
    category: "advertising"
  },
  { 
    name: "Google Ads", 
    description: "Search campaign management and performance optimization",
    category: "advertising"
  },
  { 
    name: "Google Analytics (GA4)", 
    description: "Traffic analysis, conversion tracking, and performance insights",
    category: "analytics"
  },
  { 
    name: "Google Search Console", 
    description: "Search performance monitoring and keyword insights",
    category: "analytics"
  },
  { 
    name: "Meta Pixel & Events", 
    description: "Event tracking, conversion optimization, and retargeting setup",
    category: "tracking"
  },
  { 
    name: "Shopify", 
    description: "Product page review and campaign alignment",
    category: "ecommerce"
  },
  { 
    name: "Figma", 
    description: "Creative review and UI/UX collaboration",
    category: "design"
  },
  { 
    name: "Canva", 
    description: "Quick creative edits and social media visuals",
    category: "design"
  },
]

const categoryColors = {
  advertising: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  analytics: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
  tracking: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  ecommerce: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
  design: "from-violet-500/20 to-purple-500/20 border-violet-500/30",
}

const categoryLabels = {
  advertising: "Advertising",
  analytics: "Analytics",
  tracking: "Tracking",
  ecommerce: "E-commerce",
  design: "Design",
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
            What I Bring
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive skill set built through hands-on experience managing high-impact campaigns and collaborating with cross-functional teams.
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <h3 className="text-lg font-semibold text-foreground">Core Skills</h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {coreSkills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl group relative overflow-hidden"
              >
                {/* Hover gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground mb-1 leading-tight">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <h3 className="text-lg font-semibold text-foreground">Tools & Platforms</h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">
            I regularly use a mix of performance, analytics, design, and product tools to manage campaigns end-to-end.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`glass-card p-5 rounded-2xl group cursor-default relative overflow-hidden border bg-gradient-to-br ${categoryColors[tool.category]}`}
              >
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground text-sm">
                      {tool.name}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-background/50 px-2 py-0.5 rounded-full">
                      {categoryLabels[tool.category]}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

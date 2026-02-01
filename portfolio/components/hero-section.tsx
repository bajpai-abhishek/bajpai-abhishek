"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"

const roles = [
  "Meta Ads Expert",
  "Performance Marketer",
  "Social Media Specialist",
  "Digital Strategist",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-12 px-4">
      {/* Additional section accent orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          <span className="block text-balance">Hi, I&apos;m</span>
          <span className="text-primary">Abhishek Bajpai</span>
        </h1>

        <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-primary ml-1 animate-pulse" />
          </span>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Performance-driven Digital Marketing Specialist with 2+ years of experience in 
          data-backed campaigns. I blend creative storytelling with performance analytics 
          to drive measurable business results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="group px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get in Touch
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base border-border hover:border-primary hover:text-primary transition-all duration-300 bg-transparent"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}

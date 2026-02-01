"use client"

import { Linkedin, Github, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishekbajpai",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/bajpai-abhishek",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:abbajpaiknp@gmail.com",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {currentYear} Abhishek Bajpai. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

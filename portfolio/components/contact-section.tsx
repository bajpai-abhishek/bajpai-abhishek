"use client"

import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abbajpaiknp@gmail.com",
    href: "mailto:abbajpaiknp@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8840751388",
    href: "tel:+918840751388",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uttar Pradesh, India",
    href: null,
  },
]

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
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            If you&apos;re looking for a marketer who understands both performance metrics and 
            creative execution, I&apos;d love to connect.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

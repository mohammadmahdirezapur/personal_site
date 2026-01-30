'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'

export function Footer() {
  const { locale, dictionary } = useI18n()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohammadmahdirezapur', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammadmahdi-rezapour-2887292ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Mail, href: 'mohammadmahdirezapur@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-border/50 bg-card/20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-semibold">{dictionary.home.name}</span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              <Link
                href={`/${locale}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {dictionary.nav.home}
              </Link>
              <Link
                href={`/${locale}/resume`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {dictionary.nav.resume}
              </Link>
              <Link
                href={`/${locale}/students`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {dictionary.nav.students}
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <p className="text-xs text-muted-foreground font-mono">
              {new Date().getFullYear()} &copy; {dictionary.home.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { ExternalLink, Github, Folder } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'

type Project = {
  name: { fa: string; en: string }
  description: { fa: string; en: string }
  tech: string[]
}

type ProjectsSectionProps = {
  title: string
  projects: Project[]
  locale: Locale
}

export function ProjectsSection({ title, projects, locale }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-2xl font-semibold text-foreground mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "group relative p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50",
              "hover:border-primary/50 hover:bg-card/80 transition-all duration-300",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <Folder className="h-10 w-10 text-primary/70" />
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="External Link"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.name[locale]}
            </h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
              {project.description[locale]}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

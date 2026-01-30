'use client'

import type { Locale } from '@/lib/i18n/config'

type Experience = {
  title: { fa: string; en: string }
  company: { fa: string; en: string }
  period: { fa: string; en: string }
  description: { fa: string; en: string }
}

type ExperienceSectionProps = {
  title: string
  experience: Experience[]
  locale: Locale
  presentLabel: string
}

export function ExperienceSection({
  title,
  experience,
  locale,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-2xl font-semibold text-foreground mb-8">{title}</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="relative ps-8 border-s-2 border-border hover:border-primary transition-colors"
          >
            {/* Timeline dot */}
            <div className="absolute start-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />

            <div className="pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.title[locale]}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {exp.period[locale]}
                </span>
              </div>
              <p className="text-primary font-medium mb-3">{exp.company[locale]}</p>
              <p className="text-muted-foreground">{exp.description[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

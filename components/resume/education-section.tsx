'use client'

import { GraduationCap } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

type Education = {
  degree: { fa: string; en: string }
  institution: { fa: string; en: string }
  period: { fa: string; en: string }
}

type EducationSectionProps = {
  title: string
  education: Education[]
  locale: Locale
}

export function EducationSection({ title, education, locale }: EducationSectionProps) {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-2xl font-semibold text-foreground mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {edu.degree[locale]}
                </h3>
                <p className="text-primary font-medium mb-2">{edu.institution[locale]}</p>
                <p className="text-sm text-muted-foreground">{edu.period[locale]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

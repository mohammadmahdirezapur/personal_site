'use client'

import Link from 'next/link'
import { Code2, GraduationCap, Cpu, ArrowRight, ArrowLeft, Database, Globe } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { localeDirection } from '@/lib/i18n/config'

type AboutPreviewProps = {
  dictionary: Dictionary
  locale: Locale
}

export function AboutPreview({ dictionary, locale }: AboutPreviewProps) {
  const dir = localeDirection[locale]
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  const highlights = [
    {
      icon: Cpu,
      title: locale === 'fa' ? 'مهندسی کامپیوتر' : 'Computer Engineering',
      description:
        locale === 'fa'
          ? 'دانشجوی مهندسی کامپیوتر'
          : 'Computer Engineering student',
      link: `/${locale}/resume`,
    },
    {
      icon: Globe,
      title: locale === 'fa' ? 'توسعه وب' : 'Web Development',
      description:
        locale === 'fa'
          ? 'تسلط بر React، Next.js، TypeScript و تکنولوژی‌های مدرن'
          : 'Proficient in React, Next.js, TypeScript and modern tech',
      link: `/${locale}/resume#skills`,
    },
    {
      icon: GraduationCap,
      title: locale === 'fa' ? 'دوره‌های آموزشی' : 'Courses',
      description:
        locale === 'fa'
          ? 'منابع و مطالب آموزشی برای دانشجویان'
          : 'Educational resources and materials for students',
      link: `/${locale}/students`,
    },
  ]

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MySQL', 'PowerBI', 'Git'
  ]

  return (
    <section id="about-preview" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-mono">
                {locale === 'fa' ? 'درباره من' : 'About Me'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              {dictionary.resume.about}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {dictionary.resume.aboutText}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group relative p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4 font-mono">
              {locale === 'fa' ? '// تکنولوژی‌هایی که استفاده می‌کنم' : '// Technologies I work with'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-mono text-muted-foreground bg-card/50 border border-border/50 rounded-lg hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

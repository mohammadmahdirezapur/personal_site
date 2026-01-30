'use client'

import { Download, MapPin, Mail, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { resumeData } from '@/lib/data/resume'
import { Button } from '@/components/ui/button'
import { SkillsSection } from './skills-section'
import { ProjectsSection } from './projects-section'
import { JourneyTimeline } from './journey-timeline'

type ResumeContentProps = {
  dictionary: Dictionary
  locale: Locale
}

export function ResumeContent({ dictionary, locale }: ResumeContentProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  {dictionary.resume.title}
                </h1>
                <p className="text-xl text-primary mb-4">{dictionary.home.role}</p>
                
                {/* Contact Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    Iran
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    mohammadmahdirezapur@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border/50 bg-card">
                  <Image
                    src="/photo_2026-01-31_00-44-55.jpg"
                    alt={dictionary.home.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/mohammadmahdirezapur" target="_blank" rel="noopener noreferrer">
                      <Github className="me-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.linkedin.com/in/mohammadmahdi-rezapour-2887292ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="me-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href="" download>
                      <Download className="me-2 h-4 w-4" />
                      {dictionary.resume.downloadResume}
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h2 className="text-lg font-semibold text-foreground mb-3">
                {dictionary.resume.about}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {dictionary.resume.aboutText}
              </p>
            </div>
          </div>

          {/* Journey Timeline */}
          <JourneyTimeline
            title={locale === 'fa' ? 'مسیر من' : 'My Journey'}
            locale={locale}
          />

          {/* Skills */}
          <SkillsSection
            title={dictionary.resume.skills}
            skills={resumeData.skills}
          />

          {/* Projects */}
          <ProjectsSection
            title={dictionary.resume.projects}
            projects={resumeData.projects}
            locale={locale}
          />
        </div>
      </div>
    </div>
  )
}

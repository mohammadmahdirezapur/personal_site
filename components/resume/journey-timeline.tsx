'use client'

import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n/config'
import { GraduationCap, Briefcase, Rocket } from 'lucide-react'

type JourneyItem = {
  year: string
  title: { fa: string; en: string }
  subtitle: { fa: string; en: string }
  type: 'education' | 'work' | 'milestone'
}

const journeyData: JourneyItem[] = [
  {
    year: '2022',
    title: { fa: 'شروع تحصیل در مهندسی کامپیوتر', en: 'Started Computer Engineering' },
    subtitle: { fa: 'دانشگاه', en: 'University' },
    type: 'education',
  },
  {
    year: '2022',
    title: { fa: ' برنامه‌نویسی وب', en: 'Web Programming' },
    subtitle: { fa: 'پروژه ', en: 'Project' },
    type: 'milestone',
  },
  {
    year: '2023',
    title: { fa: 'آغاز رسمی تدریس', en: 'Official commencement of teaching' },
    subtitle: { fa: 'تدریس پایتون', en: 'Python' },
    type: 'work',
  },
  {
    year: '2023',
    title: { fa: 'همکاری در پروژه‌های تیمی', en: 'Team Project Collaboration' },
    subtitle: { fa: 'فریلنسر', en: 'Freelancer' },
    type: 'work',
  },
  {
    year: '2024',
    title: { fa: 'مصورسازی داده‌ها، طراحی داشبورد، و پیاده‌سازی محاسبات با DAX', en: 'Data Visualization, DAX, Dashboard Design' },
    subtitle: { fa: 'Power BI', en: 'Power BI' },
    type: 'milestone',
  },
    {
    year: '2025',
    title: { fa: 'همکاری با آکادمی یاسان ', en: 'Partnership with Yasan Academy' },
    subtitle: { fa: 'تدریس آنلاین برنامه نویسی', en: 'Online programming courses' },
    type: 'work',
  },
]

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  milestone: Rocket,
}

type JourneyTimelineProps = {
  title: string
  locale: Locale
}

export function JourneyTimeline({ title, locale }: JourneyTimelineProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-foreground mb-8">{title}</h2>
      
      <div className="relative">
        {/* Road/Path */}
        <div className="absolute top-0 bottom-0 start-6 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full" />
        
        {/* Journey Items */}
        <div className="space-y-8">
          {journeyData.map((item, index) => {
            const Icon = iconMap[item.type]
            return (
              <div
                key={index}
                className={cn(
                  "relative flex items-start gap-6 ps-16",
                  "animate-fade-in-up",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Node/Marker */}
                <div 
                  className={cn(
                    "absolute start-0 w-12 h-12 rounded-full flex items-center justify-center",
                    "border-4 border-background",
                    item.type === 'education' && "bg-blue-500/20 text-blue-400",
                    item.type === 'work' && "bg-green-500/20 text-green-400",
                    item.type === 'milestone' && "bg-primary/20 text-primary",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md">
                      {item.year}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.subtitle[locale]}
                    </span>
                  </div>
                  <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {item.title[locale]}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* Road End Marker */}
        <div className="absolute -bottom-4 start-4 w-5 h-5 rounded-full bg-primary/50 border-4 border-background" />
      </div>
    </section>
  )
}

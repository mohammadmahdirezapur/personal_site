'use client'

import Link from 'next/link'
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react'
import type { Course } from '@/lib/data/courses'
import type { Locale } from '@/lib/i18n/config'
import { localeDirection } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'

type CoursesGridProps = {
  courses: Course[]
  locale: Locale
  dictionary: Dictionary
}

export function CoursesGrid({ courses, locale, dictionary }: CoursesGridProps) {
  const dir = localeDirection[locale]
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Link
          key={course.id}
          href={`/${locale}/students/${course.id}`}
          className="group flex flex-col bg-card rounded-lg border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:-translate-y-1"
        >
          {/* Course Image Placeholder */}
          <div className="aspect-video bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-muted-foreground/50" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          </div>

          {/* Course Content */}
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {course.title[locale]}
            </h3>
            <p className="text-sm text-muted-foreground flex-1 mb-4">
              {course.description[locale]}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {course.lessons.length} {dictionary.students.lessons}
              </span>
              <span className="flex items-center gap-1 text-sm text-primary font-medium">
                {dictionary.students.viewCourse}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

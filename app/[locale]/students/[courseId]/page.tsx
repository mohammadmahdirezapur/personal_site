import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { localeDirection } from '@/lib/i18n/config'
import { coursesData } from '@/lib/data/courses'
import { LessonsList } from '@/components/students/lessons-list'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const params = []
  for (const locale of ['fa', 'en']) {
    for (const course of coursesData) {
      params.push({ locale, courseId: course.id })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; courseId: string }>
}): Promise<Metadata> {
  const { locale, courseId } = await params
  const course = coursesData.find((c) => c.id === courseId)

  if (!course) {
    return { title: 'Course Not Found' }
  }

  return {
    title: course.title[locale],
    description: course.description[locale],
  }
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: Locale; courseId: string }>
}) {
  const { locale, courseId } = await params
  const dictionary = getDictionary(locale)
  const dir = localeDirection[locale]

  const course = coursesData.find((c) => c.id === courseId)

  if (!course) {
    notFound()
  }

  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href={`/${locale}/students`}>
              <BackArrow className="me-2 h-4 w-4" />
              {dictionary.students.backToCourses}
            </Link>
          </Button>

          {/* Course Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {course.title[locale]}
            </h1>
            <p className="text-muted-foreground text-lg">
              {course.description[locale]}
            </p>
          </div>

          {/* Lessons List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              {dictionary.students.lessons}
            </h2>
            <LessonsList
              lessons={course.lessons}
              locale={locale}
              dictionary={dictionary}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

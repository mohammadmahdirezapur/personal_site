import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { CoursesGrid } from '@/components/students/courses-grid'
import { coursesData } from '@/lib/data/courses'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dictionary = getDictionary(locale)

  return {
    title: dictionary.students.title,
    description: dictionary.students.subtitle,
  }
}

export default async function StudentsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = getDictionary(locale)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {dictionary.students.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {dictionary.students.subtitle}
            </p>
          </div>

          {/* Courses Grid */}
          <CoursesGrid
            courses={coursesData}
            locale={locale}
            dictionary={dictionary}
          />
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { ChevronDown, FileText, Video, PenTool, Download } from 'lucide-react'
import type { Lesson } from '@/lib/data/courses'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type LessonsListProps = {
  lessons: Lesson[]
  locale: Locale
  dictionary: Dictionary
}

const materialIcons = {
  pdf: FileText,
  video: Video,
  exercise: PenTool,
}

export function LessonsList({ lessons, locale, dictionary }: LessonsListProps) {
  const [expandedLesson, setExpandedLesson] = useState<string | null>(
    lessons[0]?.id || null
  )

  const toggleLesson = (lessonId: string) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId)
  }

  return (
    <div className="space-y-4">
      {lessons.map((lesson, index) => {
        const isExpanded = expandedLesson === lesson.id

        return (
          <div
            key={lesson.id}
            className="bg-card rounded-lg border border-border overflow-hidden"
          >
            {/* Lesson Header */}
            <button
              type="button"
              onClick={() => toggleLesson(lesson.id)}
              className="w-full flex items-center justify-between p-6 text-start hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {dictionary.students.lesson} {index + 1}: {lesson.title[locale]}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {lesson.description[locale]}
                  </p>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-muted-foreground transition-transform duration-300',
                  isExpanded && 'rotate-180'
                )}
              />
            </button>

            {/* Lesson Content */}
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isExpanded ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-border">
                  {lesson.materials.length > 0 ? (
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground mb-4">
                        {dictionary.students.downloadMaterials}
                      </h4>
                      {lesson.materials.map((material, materialIndex) => {
                        const Icon = materialIcons[material.type]

                        return (
                          <div
                            key={materialIndex}
                            className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="h-5 w-5 text-primary" />
                              <span className="text-sm text-foreground">
                                {material.name[locale]}
                              </span>
                            </div>
                            <Button
                              asChild
                              variant="ghost"
                              size="sm"
                            >
                              <a
                                href={material.url}
                                download
                                className="flex items-center gap-2"
                              >
                                <Download className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {dictionary.students.noMaterials}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

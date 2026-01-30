import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { ResumeContent } from '@/components/resume/resume-content'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dictionary = getDictionary(locale)

  return {
    title: dictionary.resume.title,
    description: dictionary.resume.aboutText,
  }
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = getDictionary(locale)

  return <ResumeContent dictionary={dictionary} locale={locale} />
}

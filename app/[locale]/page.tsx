import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { HeroSection } from '@/components/home/hero-section'
import { AboutPreview } from '@/components/home/about-preview'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = getDictionary(locale)

  return (
    <div className="min-h-screen">
      <HeroSection dictionary={dictionary} locale={locale} />
      <AboutPreview dictionary={dictionary} locale={locale} />
    </div>
  )
}

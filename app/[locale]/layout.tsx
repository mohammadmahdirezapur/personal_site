import React from "react"
import { notFound } from 'next/navigation'
import { Vazirmatn } from 'next/font/google'
import { locales, localeDirection, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { I18nProvider } from '@/lib/i18n/context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const persianFont = Vazirmatn({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-persian',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = getDictionary(locale)

  return {
    title: {
      default: dictionary.home.name,
      template: `%s | ${dictionary.home.name}`,
    },
    description: dictionary.home.bio,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)
  const dir = localeDirection[locale]

  return (
    <div
      dir={dir}
      lang={locale}
      className={`${locale === 'fa' ? persianFont.variable : ''} min-h-screen flex flex-col`}
      style={{ fontFamily: locale === 'fa' ? 'var(--font-persian), var(--font-sans)' : 'var(--font-sans)' }}
    >
      <I18nProvider locale={locale} dictionary={dictionary}>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </I18nProvider>
    </div>
  )
}

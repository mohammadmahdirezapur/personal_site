import type { Locale } from './config'
import fa from './dictionaries/fa.json'
import en from './dictionaries/en.json'

const dictionaries = {
  fa,
  en,
} as const

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale]
}

export type Dictionary = typeof fa

'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n/context'
import { locales, localeNames, type Locale } from '@/lib/i18n/config'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { locale } = useI18n()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-muted-foreground" />
      <div className="flex items-center gap-1">
        {locales.map((loc, index) => (
          <span key={loc} className="flex items-center">
            <button
              type="button"
              onClick={() => switchLocale(loc)}
              className={cn(
                'text-sm font-medium transition-colors px-1',
                locale === loc
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {localeNames[loc]}
            </button>
            {index < locales.length - 1 && (
              <span className="text-muted-foreground/50 mx-1">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

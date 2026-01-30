'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { localeDirection } from '@/lib/i18n/config'
import { LanguageSwitcher } from './language-switcher'
import { Menu, X, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const { locale, dictionary } = useI18n()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dir = localeDirection[locale]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/resume`, label: dictionary.nav.resume },
    { href: `/${locale}/students`, label: dictionary.nav.students },
  ]

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(href)
  }

  return (
    <header 
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        scrolled ? "top-2" : "top-4"
      )}
    >
      <nav 
        className={cn(
          "px-6 py-3 rounded-2xl border transition-all duration-300",
          "bg-card/60 backdrop-blur-xl border-border/50",
          scrolled && "shadow-lg shadow-background/20"
        )}
      >
        <div className="flex items-center gap-8">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-semibold hidden sm:inline">{dictionary.home.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <ul className={cn('flex items-center gap-1', dir === 'rtl' && 'flex-row-reverse')}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                      isActive(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block border-s border-border/50 ps-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block py-3 px-4 rounded-xl text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 mt-2 border-t border-border/50">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

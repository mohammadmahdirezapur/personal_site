'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, User } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import type { Dictionary } from '@/lib/i18n/get-dictionary' 
import type { Locale } from '@/lib/i18n/config'
import { localeDirection } from '@/lib/i18n/config'
import { Button } from '@/components/ui/button'

type HeroSectionProps = {
  dictionary: Dictionary
  locale: Locale
}

export function HeroSection({ dictionary, locale }: HeroSectionProps) {
  const dir = localeDirection[locale]
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(114,190,190,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(114,190,190,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -start-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -end-20 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Profile Image */}
            <div className="relative animate-fade-in-up order-1 lg:order-none">
              <div className="relative w-52 h-52 md:w-64 md:h-64">
                {/* Animated border */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 blur-sm animate-pulse" />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 bg-card">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="/photo_2026-01-31_00-44-55.jpg"
                      alt={dictionary.home.name}
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-card to-secondary flex items-center justify-center">
                      <User className="h-20 w-20 text-primary/40" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-start">
              {/* Code-like greeting */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card/50 border border-border/50 rounded-lg mb-6 animate-fade-in-up animation-delay-100">
                <span className="text-primary font-mono text-sm">{'>'}</span>
                <span className="text-muted-foreground font-mono text-sm">{dictionary.home.greeting}</span>
                <span className="w-2 h-4 bg-primary/60 animate-pulse" />
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in-up animation-delay-200 text-balance">
                {dictionary.home.name}
              </h1>

              {/* Role */}
              <p className="text-lg md:text-xl text-primary font-medium mb-6 animate-fade-in-up animation-delay-300">
                <span className="text-muted-foreground">{'<'}</span>
                {dictionary.home.role}
                <span className="text-muted-foreground">{' />'}</span>
              </p>

              {/* Bio */}
              <p className="text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up animation-delay-400 text-pretty">
                {dictionary.home.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-400">
                <Button asChild size="lg" className="min-w-[160px]">
                  <Link href={`/${locale}/resume`}>
                    {dictionary.home.viewResume}
                    <ArrowIcon className="ms-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[160px] bg-transparent">
                  <Link href={`/${locale}/students`}>
                    {dictionary.home.viewCourses}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

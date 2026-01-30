'use client'

import { cn } from '@/lib/utils'

type Skill = {
  name: string
  level: number
}

type SkillsSectionProps = {
  title: string
  skills: Skill[]
}

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'MySQL', level: 60 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 100 },
      { name: 'PowerBI', level: 70 },
      { name: 'Linux', level: 70 },
    ],
  },
]

export function SkillsSection({ title }: SkillsSectionProps) {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-2xl font-semibold text-foreground mb-8">{title}</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.name}
            className={cn(
              "bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50",
              "hover:border-primary/30 transition-all duration-300",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${categoryIndex * 100}ms` }}
          >
            <h3 className="text-sm font-mono text-primary mb-5 uppercase tracking-wider">
              {category.name}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

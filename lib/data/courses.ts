export type Material = {
  name: { fa: string; en: string }
  type: 'pdf' | 'video' | 'exercise'
  url: string
}

export type Lesson = {
  id: string
  title: { fa: string; en: string }
  description: { fa: string; en: string }
  materials: Material[]
}

export type Course = {
  id: string
  title: { fa: string; en: string }
  description: { fa: string; en: string }
  image: string
  lessons: Lesson[]
}

export const coursesData: Course[] = [
  {
    id: 'web-development',
    title: { fa: 'توسعه وب پیشرفته', en: 'Advanced Web Development' },
    description: {
      fa: 'یادگیری جامع React، Next.js و TypeScript برای ساخت برنامه‌های وب مدرن',
      en: 'Comprehensive learning of React, Next.js and TypeScript for building modern web applications',
    },
    image: '/courses/web-dev.jpg',
    lessons: [
      {
        id: 'lesson-1',
        title: { fa: 'مقدمه‌ای بر React', en: 'Introduction to React' },
        description: {
          fa: 'آشنایی با مفاهیم پایه React و کامپوننت‌ها',
          en: 'Getting familiar with React basics and components',
        },
        materials: [
          { name: { fa: 'اسلایدهای جلسه', en: 'Session Slides' }, type: 'pdf', url: '#' },
          { name: { fa: 'تمرین عملی', en: 'Practical Exercise' }, type: 'exercise', url: '#' },
        ],
      },
      {
        id: 'lesson-2',
        title: { fa: 'State و Props', en: 'State and Props' },
        description: {
          fa: 'مدیریت state و انتقال داده با props',
          en: 'Managing state and passing data with props',
        },
        materials: [
          { name: { fa: 'اسلایدهای جلسه', en: 'Session Slides' }, type: 'pdf', url: '#' },
          { name: { fa: 'ویدیو آموزشی', en: 'Tutorial Video' }, type: 'video', url: '#' },
        ],
      },
      {
        id: 'lesson-3',
        title: { fa: 'هوک‌های React', en: 'React Hooks' },
        description: {
          fa: 'استفاده از useState، useEffect و سایر هوک‌ها',
          en: 'Using useState, useEffect and other hooks',
        },
        materials: [
          { name: { fa: 'اسلایدهای جلسه', en: 'Session Slides' }, type: 'pdf', url: '#' },
          { name: { fa: 'پروژه عملی', en: 'Hands-on Project' }, type: 'exercise', url: '#' },
        ],
      },
    ],
  },
  {
    id: 'python-basics',
    title: { fa: 'مبانی برنامه‌نویسی پایتون', en: 'Python Programming Basics' },
    description: {
      fa: 'شروع برنامه‌نویسی از صفر با زبان پایتون',
      en: 'Start programming from scratch with Python',
    },
    image: '/courses/python.jpg',
    lessons: [
      {
        id: 'lesson-1',
        title: { fa: 'آشنایی با پایتون', en: 'Getting Started with Python' },
        description: {
          fa: 'نصب پایتون و نوشتن اولین برنامه',
          en: 'Installing Python and writing your first program',
        },
        materials: [
          { name: { fa: 'راهنمای نصب', en: 'Installation Guide' }, type: 'pdf', url: '#' },
        ],
      },
      {
        id: 'lesson-2',
        title: { fa: 'متغیرها و انواع داده', en: 'Variables and Data Types' },
        description: {
          fa: 'آشنایی با متغیرها، رشته‌ها، اعداد و لیست‌ها',
          en: 'Understanding variables, strings, numbers and lists',
        },
        materials: [
          { name: { fa: 'اسلایدهای جلسه', en: 'Session Slides' }, type: 'pdf', url: '#' },
          { name: { fa: 'تمرینات', en: 'Exercises' }, type: 'exercise', url: '#' },
        ],
      },
    ],
  },
  {
    id: 'database-design',
    title: { fa: 'طراحی پایگاه داده', en: 'Database Design' },
    description: {
      fa: 'اصول طراحی پایگاه داده رابطه‌ای و SQL',
      en: 'Principles of relational database design and SQL',
    },
    image: '/courses/database.jpg',
    lessons: [
      {
        id: 'lesson-1',
        title: { fa: 'مفاهیم پایگاه داده', en: 'Database Concepts' },
        description: {
          fa: 'آشنایی با مفاهیم اولیه پایگاه داده',
          en: 'Introduction to basic database concepts',
        },
        materials: [
          { name: { fa: 'اسلایدهای جلسه', en: 'Session Slides' }, type: 'pdf', url: '#' },
        ],
      },
      {
        id: 'lesson-2',
        title: { fa: 'دستورات SQL', en: 'SQL Commands' },
        description: {
          fa: 'یادگیری SELECT، INSERT، UPDATE و DELETE',
          en: 'Learning SELECT, INSERT, UPDATE and DELETE',
        },
        materials: [
          { name: { fa: 'مرجع SQL', en: 'SQL Reference' }, type: 'pdf', url: '#' },
          { name: { fa: 'تمرینات عملی', en: 'Practical Exercises' }, type: 'exercise', url: '#' },
        ],
      },
    ],
  },
]

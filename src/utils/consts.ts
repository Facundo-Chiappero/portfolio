import {
  Expressjs,
  Git,
  MaterialUI,
  MercadoPago,
  Netlify,
  NextAuth,
  Nextjs,
  Node,
  OpenAI,
  PostgreSql,
  Prisma,
  ReactIcon,
  Supabase,
  TailwindIcon,
  TypeScript,
  Vercel,
} from '../components/Icons'

// this is for the map in ./src/components/Experience/Experience.tsx
export const Jobs = [
  {
    key: 'g2i',
    title: 'Entrenador de IA con Retroalimentación Humana (RLHF)',
  },
  {
    key: 'fullstack_developer',
    title: 'Desarrollador Full-Stack',
  },
] as const

export type JobKey = (typeof Jobs)[number]['key']

// this is for the map in ./src/components/Studies/Studies.tsx
export const Courses = [
  {
    title: 'React 18 - Curso Completo',
  },
  {
    title: 'Técnico en programación',
  },

  {
    title: 'Python 3.7 - Curso Completo',
  },
]

// this is for the map in ./src/components/Project/ProjectSection.tsx
export const Projects = [
  {
    imgSrc: './muchomas.webp',
    imgAlt: 'Image about Mucho Mas',
    title: 'Mucho Mas Online Store',
    techs: [
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'Tailwind',
        icon: TailwindIcon,
      },
      {
        name: 'MaterialUI',
        icon: MaterialUI,
      },
      {
        name: 'TypeScript',
        icon: TypeScript,
      },
    ],
  },
  {
    imgSrc: './ticketxpress.webp',
    imgAlt: 'Image about TicketXPress',
    title: 'TicketXPress',
    techs: [
      {
        name: 'NextJs',
        icon: Nextjs,
      },
      {
        name: 'Tailwind',
        icon: TailwindIcon,
      },
      {
        name: 'NextAuth',
        icon: NextAuth,
      },
      {
        name: 'Mercado Pago',
        icon: MercadoPago,
      },
      {
        name: 'TypeScript',
        icon: TypeScript,
      },
    ],
    github: 'https://github.com/Facundo-Chiappero/ticketxpress',
    link: 'https://ticketxpress.facundochiappero.online/',
  },
  {
    imgSrc: './gympro.webp',
    imgAlt: 'Image about GymPro',
    title: 'GymPro',
    techs: [
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'Tailwind',
        icon: TailwindIcon,
      },
      {
        name: 'TypeScript',
        icon: TypeScript,
      },
      {
        name: 'supabase',
        icon: Supabase,
      },
    ],
    link: 'https://gympro.facundochiappero.online/',
  },
  {
    imgSrc: './resumeGenerator.webp',
    imgAlt: 'Image about Resume Generator',
    title: 'Resume Generator',
    techs: [
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'Tailwind',
        icon: TailwindIcon,
      },
      {
        name: 'MaterialUI',
        icon: MaterialUI,
      },
      {
        name: 'TypeScript',
        icon: TypeScript,
      },
    ],
    github: 'https://github.com/Facundo-Chiappero/resume-generator',
    link: 'https://resume-generator.facundochiappero.online/',
  },
]

// this doesn't even has a translation, i mean, i can't translate a name
export const FRONTEND = [
  { icon: TypeScript, text: 'TypeScript' },
  { icon: ReactIcon, text: 'React.js' },
  { icon: Nextjs, text: 'Next.js' },
  { icon: TailwindIcon, text: 'TailwindCSS' },
]

export const BACKEND = [
  { icon: Node, text: 'Node.js' },
  { icon: Expressjs, text: 'Express.js' },
  { icon: Prisma, text: 'Prisma' },
  { icon: Supabase, text: 'Supabase' },
  { icon: PostgreSql, text: 'PostgreSQL' },
]

export const TOOLS = [
  { icon: Git, text: 'Git' },
  { icon: Netlify, text: 'Netlify' },
  { icon: Vercel, text: 'Vercel' },
]

export const INTEGRATIONS = [
  { icon: OpenAI, text: 'OpenAI' },
  { icon: MercadoPago, text: 'Mercado Pago' },
  { icon: NextAuth, text: 'Next Auth' },
]

import {
  Argentina,
  CssIcon,
  Expressjs,
  Figma,
  Formik,
  Gemini,
  Git,
  GitHub,
  HtmlIcon,
  JsIcon,
  MaterialUI,
  MercadoPago,
  MySql,
  Neon,
  Netlify,
  NextAuth,
  Nextjs,
  Node,
  OpenAI,
  Php,
  PostgreSql,
  Postman,
  Prisma,
  Py,
  ReactIcon,
  ReCaptcha,
  Supabase,
  TailwindIcon,
  TypeScript,
  USA,
  Vercel,
  VisualStudioCode,
  Zod,
  Zustand,
} from '../components/Icons'
import ArgentinaFlag from '../assets/image.webp'
// this is for the map in ./src/components/Experience/Experience.tsx
export const Jobs = [
  {
    title: 'Gimnasio',
  },
  {
    title: 'Pasantías',
  },
]

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
    imgSrc: './ticketxpress.webp',
    imgAlt: 'Image about TicketXPress',
    title: 'TicketXPress',
    techs: [
      {
        name: 'NextJs',
        icon: Nextjs,
      },
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'Tailwind',
        icon: TailwindIcon,
      },
      {
        name: 'Prisma',
        icon: Prisma,
      },
      {
        name: 'NodeJs',
        icon: Node,
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
        name: 'ReCaptcha',
        icon: ReCaptcha,
      },
      {
        name: 'Zustand',
        icon: Zustand,
      },
    ],
    description:
      'Pagina de venta de entradas para eventos. Permite a los usuarios registrarse, iniciar sesión, comprar entradas y ver sus eventos próximos. También incluye un panel de administración para gestionar los eventos.',
    github: 'https://github.com/Facundo-Chiappero/ticketxpress',
    link: 'https://ticket-xpress-eta.vercel.app/',
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
        name: 'Zod',
        icon: Zod,
      },
    ],
    description:
      'Formulario multiple step, usando componentes de Material UI. Al finalizarlo podrás descargar tu CV en formato PDF y Word',
    github: 'https://github.com/Facundo-Chiappero/resume-generator',
    link: 'https://your-resume-generator.netlify.app/',
  },
  {
    imgSrc: './chattinoai.webp',
    imgAlt: 'Image about ChattinoAI',
    title: 'ChattinoAI',
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
        name: 'NodeJs',
        icon: Node,
      },
      {
        name: 'Gemini',
        icon: Gemini,
      },
    ],
    description:
      'Chatbot temático entrenado para interactuar con conocimientos sobre la empresa Hololive.',
    github: 'https://github.com/Facundo-Chiappero/ChattinoAI',
    link: 'https://chattinoai.netlify.app/',
  },
  {
    imgSrc: './translator.webp',
    imgAlt: 'Image about translator',
    title: 'Google Translator Clone',
    techs: [
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'NodeJs',
        icon: Node,
      },
      {
        name: 'Gemini',
        icon: Gemini,
      },
    ],
    description:
      'Clon de Google Translator, con soporte para 109 idiomas, utilizando la inteligencia artificial de Google Gemini.',
    github: 'https://github.com/Facundo-Chiappero/translator',
    link: 'https://fake-google-translator.netlify.app/',
  },
  {
    imgSrc: './dashboard.webp',
    imgAlt: 'Image about random users dashboard',
    title: 'Random Users Dashboard',
    techs: [
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'TypeScript',
        icon: TypeScript,
      },
    ],
    description:
      'Dashboard con múltiples funcionalidades de usuarios aleatorios, obtenidos a través de una API.',
    github: 'https://github.com/Facundo-Chiappero/random-users-dashboard',
    link: 'https://random-users-dashboard.netlify.app/',
  },
]

// this doesn't even has a translation, i mean, i can't translate a name
export const FRONTEND = [
  { icon: HtmlIcon, text: 'HTML5' },
  { icon: CssIcon, text: 'CSS3' },
  { icon: JsIcon, text: 'JavaScript' },
  { icon: TypeScript, text: 'TypeScript' },
  { icon: ReactIcon, text: 'React.js' },
  { icon: Nextjs, text: 'Next.js' },
  { icon: TailwindIcon, text: 'TailwindCSS' },
]

export const BACKEND = [
  { icon: Node, text: 'Node.js' },
  { icon: Expressjs, text: 'Express.js' },
  { icon: Php, text: 'PHP' },
  { icon: Prisma, text: 'Prisma' },
  { icon: MySql, text: 'MySQL' },
  { icon: PostgreSql, text: 'PostgreSQL' },
]

export const TOOLS = [
  { icon: Git, text: 'Git' },
  { icon: GitHub, text: 'GitHub' },
  { icon: VisualStudioCode, text: 'VS Code' },
  { icon: Postman, text: 'Postman' },
  { icon: Figma, text: 'Figma' },
  { icon: Neon, text: 'Neon Console' },
  { icon: Supabase, text: 'Supabase' },
  { icon: Netlify, text: 'Netlify' },
  { icon: Vercel, text: 'Vercel' },
  { icon: Zod, text: 'Zod' },
  { icon: Zustand, text: 'Zustand' },
]

export const INTEGRATIONS = [
  { icon: OpenAI, text: 'OpenAI' },
  { icon: Gemini, text: 'Gemini' },
  { icon: MercadoPago, text: 'Mercado Pago' },
  { icon: NextAuth, text: 'Next Auth' },
  { icon: ReCaptcha, text: 'ReCAPTCHA' },
  { icon: MaterialUI, text: 'MaterialUI' },
]

export const LANGUAGES = [
  { icon: Argentina, text: 'Spanish' },
  { icon: USA, text: 'English' },
]

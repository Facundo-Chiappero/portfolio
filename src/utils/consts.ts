import {
  CssIcon,
  Formik,
  Gemini,
  HtmlIcon,
  JsIcon,
  MySql,
  Node,
  Php,
  PostgreSql,
  Py,
  ReactIcon,
  TailwindIcon,
  TypeScript,
} from '../components/Icons'

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
    imgSrc: './chattinoai.webp',
    imgAlt: 'imagen de ChattinoAI',
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
    imgAlt: 'imagen de translator',
    title: 'Google Translator Clone',
    techs: [
      {
        name: 'React',
        icon: ReactIcon,
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
    imgAlt: 'imagen de random users dashboard',
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
  {
    imgSrc: './formiks-form.webp',
    imgAlt: 'imagen de formiks-form',
    title: 'Formiks Form',
    techs: [
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'Formik',
        icon: Formik,
      },
    ],
    description:
      'Formulario simple desarrollado con la librería Formik, conectado a una base de datos.',
    github: 'https://github.com/Facundo-Chiappero/formiks-form',
    link: 'https://formiks-form.netlify.app/',
  },
  {
    imgSrc: './chat.webp',
    imgAlt: 'imagen de chat online',
    title: 'Chat online',
    techs: [
      {
        name: 'Php',
        icon: Php,
      },
      {
        name: 'MySql',
        icon: MySql,
      },
    ],
    description:
      'Chat online con sistema simple de log in, permisos de administrador y base de datos.',
    github: 'https://github.com/Facundo-Chiappero/chat',
    link: 'http://mychatonline.infinityfreeapp.com',
  },
]

// this is for the map in ./src/components/Skills/Skills.tsx
export const SoftSkills = [
  'Trabajo en equipo',
  'Gestión del tiempo',
  'Organización',
  'Pensamiento crítico',
  'Facilidad para aprender',
  'Autodidacta',
  'Inglés (nivel intermedio)',
]

// this doesn't even has a translation, i mean, i can't translate a name
export const HardSkills = [
  {
    icon: HtmlIcon,
    text: 'Html',
  },
  {
    icon: CssIcon,
    text: 'Css',
  },
  {
    icon: JsIcon,
    text: 'JavaScript',
  },
  {
    icon: TypeScript,
    text: 'TypeScript',
  },
  {
    icon: ReactIcon,
    text: 'React',
  },
  {
    icon: TailwindIcon,
    text: 'TailwindCss',
  },
  {
    icon: Node,
    text: 'NodeJs',
  },
  {
    icon: Py,
    text: 'Python',
  },
  {
    icon: MySql,
    text: 'MySql',
  },
  {
    icon: PostgreSql,
    text: 'PostgreSql',
  },
  {
    icon: Php,
    text: 'Php',
  },
  {
    icon: Formik,
    text: 'Formik',
  },
]

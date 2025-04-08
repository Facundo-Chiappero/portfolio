import { JSX } from 'react'
import { Github, Preview } from '../Icons'
import { useTranslation } from 'react-i18next'

interface Props {
  project: {
    imgSrc: string
    imgAlt: string
    title: string
    techs: {
      name: string
      icon: () => JSX.Element
    }[]
    description: string
    github: string
    link: string
  }
}

export default function Project({ project }: Props) {
  const { imgSrc, imgAlt, title, techs, description, github, link } = project

  const { t } = useTranslation('global')
  return (
    <article className="project-container">
      <a
        href={imgSrc}
        target="_blank"
        rel="noopener noreferrer"
        className="img-container"
      >
        <img src={imgSrc} alt={imgAlt} />
      </a>
      <div className="project-main">
        <h3>{title}</h3>
        <ul>
          {techs.map((tech, index) => (
            <li key={index} className={tech.name + ' icon'}>
              <span>{<tech.icon />}</span>
              <p>{tech.name}</p>
            </li>
          ))}
        </ul>

        <p className="description">{description}</p>

        <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github />
            {t('ProjectText.gitText')}
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Preview />
            {t('ProjectText.previewText')}
          </a>
        </div>
      </div>
    </article>
  )
}

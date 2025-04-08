import { useTranslation } from 'react-i18next'
import { Projects } from '../../utils/consts'
import { Code } from '../Icons'
import Project from './Project'
import './projectStyles.css'

export default function ProjectSection() {
  const { t } = useTranslation('global')

  return (
    <section className="project">
      <div className="project-title">
        <Code />
        <h2 id="projects">{t('ProjectSectionText.title')}</h2>
      </div>

      <ul>
        {Projects.map((project) => {
          const projectKey = project.title.toLowerCase().replace(/\s+/g, '-')

          return (
            <Project
              key={project.title}
              project={{
                ...project,
                title: t(`Projects.${projectKey}.title`),
                description: t(`Projects.${projectKey}.description`),
                techs: project.techs.map((tech) => ({
                  ...tech,
                  name: t(
                    `Projects.${projectKey}.techs.${tech.name.toLowerCase()}.name`
                  ),
                })),
              }}
            />
          )
        })}
      </ul>
    </section>
  )
}

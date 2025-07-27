// components/Experience.tsx
import { useTranslation } from 'react-i18next'
import { Jobs } from '../../utils/consts'
import { PortFolio } from '../Icons'
import './experienceStyles.css'
import Job from './Job'

export default function Experience() {
  const { t } = useTranslation('global')

  return (
    <section className="experience">
      <div className="experience-title">
        <PortFolio />
        <h2 id="experience">{t('ExperienceText.title')}</h2>
      </div>

      <ul>
        {Jobs.map((job, index) => (
          <Job
            key={index}
            job={{
              ...job,
              title: t(`Jobs.${job.key}.title`),
              name: t(`Jobs.${job.key}.name`),
              time: t(`Jobs.${job.key}.time`),
              tasks: t(`Jobs.${job.key}.tasks`),
            }}
          />
        ))}
      </ul>
    </section>
  )
}

import { useTranslation } from 'react-i18next'
import { Jobs } from '../../utils/consts'
import { PortFolio } from '../Icons'
import './experienceStyles.css'
import Job from './Job'

type JobTitle = 'Gimnasio' | 'Pasantías'

export default function Experience() {
  const { t } = useTranslation('global')

  const jobTitleToKey: Record<JobTitle, string> = {
    Gimnasio: 'gym',
    Pasantías: 'internship',
  }

  return (
    <section className="experience">
      <div className="experience-title">
        <PortFolio />
        <h2 id="experience">{t('ExperienceText.title')}</h2>
      </div>

      <ul>
        {Jobs.map((job, index) => {
          const jobKey = jobTitleToKey[job.title as JobTitle]

          return (
            <Job
              key={index}
              job={{
                ...job,
                title: t(`Jobs.${jobKey}.title`),
                name: t(`Jobs.${jobKey}.name`),
                time: t(`Jobs.${jobKey}.time`),
                tasks: t(`Jobs.${jobKey}.tasks`),
              }}
            />
          )
        })}
      </ul>
    </section>
  )
}

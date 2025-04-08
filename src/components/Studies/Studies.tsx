import { useTranslation } from 'react-i18next'
import { Courses } from '../../utils/consts'
import { Book } from '../Icons'
import './studiesStyles.css'
import Course from './Course'

type courseTitle =
  | 'React 18 - Curso Completo'
  | 'Python 3.7 - Curso Completo'
  | 'Técnico en programación'

export default function Studies() {
  const { t } = useTranslation('global')

  const courseTitleToKey: Record<courseTitle, string> = {
    'React 18 - Curso Completo': 'react',
    'Python 3.7 - Curso Completo': 'python',
    'Técnico en programación': 'programming',
  }

  return (
    <section className="studies">
      <div className="studies-title">
        <Book />
        <h2 id="studies">{t('StudiesText.title')}</h2>
      </div>

      <ul>
        {Courses.map((course) => {
          const courseKey = courseTitleToKey[course.title as courseTitle]

          return (
            <Course
              key={course.title}
              course={{
                ...course,
                title: t(`Courses.${courseKey}.title`),
                name: t(`Courses.${courseKey}.name`),
                time: t(`Courses.${courseKey}.time`),
                description: t(`Courses.${courseKey}.description`),
              }}
            />
          )
        })}
      </ul>
    </section>
  )
}

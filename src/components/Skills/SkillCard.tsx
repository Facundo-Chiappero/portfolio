import { SVGProps, JSX } from 'react'
import { useTranslation } from 'react-i18next'

export default function SkillCard({
  textPath,
  skills,
}: {
  textPath: string
  skills: {
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    text: string
  }[]
}) {
  const { t } = useTranslation('global')

  return (
    <section className="skillCard">
      <div className="title">
        <h3>{t(textPath)}</h3>
      </div>

      <div className="skillContainer">
        {skills.map((skill) => (
          <div className="skill" key={skill.text}>
            <div key={skill.text}>{<skill.icon />}</div>
            <small>{skill.text}</small>
          </div>
        ))}
      </div>
    </section>
  )
}

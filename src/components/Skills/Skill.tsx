import { useTranslation } from 'react-i18next'
import { HardSkills, SoftSkills } from '../../utils/consts'
import { Console } from '../Icons'
import './skillsStyles.css'

export default function Skill() {
  const { t } = useTranslation('global')
  return (
    <section className="skills">
      <div className="title">
        <Console />
        <h2 id="skills">{t('SkillsText.title')}</h2>
      </div>

      <div className="skills-container">
        <div className="hard">
          <div className="title">
            <h3>{t('SkillsText.hardTitle')}</h3>
          </div>

          {HardSkills.map((skill) => (
            <div key={skill.text}>
              {<skill.icon />}
              <small>{skill.text}</small>
            </div>
          ))}
        </div>
        <hr />

        <div className="soft">
          <h3>{t('SkillsText.softTitle')}</h3>
          <ul>
            {SoftSkills.map((_skill, index) => (
              <li key={index}>{t(`SoftSkills.${index}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import { useTranslation } from 'react-i18next'
import { Console } from '../Icons'
import './skillsStyles.css'
import SkillCard from './SkillCard'
import {
  INTEGRATIONS,
  BACKEND,
  FRONTEND,
  LANGUAGES,
  TOOLS,
} from '../../utils/consts'

export default function Skill() {
  const { t } = useTranslation('global')
  return (
    <section className="skills">
      <div className="title">
        <Console />
        <h2 id="skills">{t('SkillsText.title')}</h2>
      </div>

      <SkillCard textPath="SkillsText.frontend" skills={FRONTEND} />
      <SkillCard textPath="SkillsText.backend" skills={BACKEND} />
      <SkillCard textPath="SkillsText.tools" skills={TOOLS} />
      <SkillCard textPath="SkillsText.integration" skills={INTEGRATIONS} />
      <SkillCard textPath="SkillsText.languages" skills={LANGUAGES} />
    </section>
  )
}

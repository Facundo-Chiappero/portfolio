import { useTranslation } from 'react-i18next'
import { Argentina, Console, USA } from '../Icons'
import './skillsStyles.css'
import SkillCard from './SkillCard'
import { INTEGRATIONS, BACKEND, FRONTEND, TOOLS } from '../../utils/consts'

export default function Skill() {
  const { t } = useTranslation('global')

  // this one is here an not in consts.ts so i can add translations with react-i18next
  const LANGUAGES = [
    { icon: Argentina, text: t('languages.spanish') },
    { icon: USA, text: t('languages.english') },
  ]

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

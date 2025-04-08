import { Me } from '../Icons'
import './aboutStyles.css'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation('global')
  return (
    <section className="about">
      <div className="title">
        <Me />
        <h2 id="about-me">{t('AboutText.TITLE')}</h2>
      </div>
      <br />
      <p>{t('AboutText.BODY1')}</p>
      <br />
      <p>{t('AboutText.BODY2')}</p>
      <br />
      {/* i made this to insert a <a/> tag from the const */}
      <p dangerouslySetInnerHTML={{ __html: t('AboutText.BODY3') }} />
    </section>
  )
}

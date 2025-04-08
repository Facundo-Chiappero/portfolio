import './heroStyles.css'
import { Degree, Github, Gmail, LinkedIn, ResumeIcon } from '../Icons'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation('global')

  return (
    <section className="hero">
      <div className="img-container">
        <img src="./foto.webp" alt="Foto de Facundo" />
        <a
          href="https://www.linkedin.com/in/facundo-andrés-chiappero"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('HeroText.BADGE')}
        </a>
      </div>

      <div className="text-container">
        <h1>{t('HeroText.TITLE')}</h1>
        <p>{t('HeroText.BODY')}</p>
      </div>

      <div className="contacts">
        <a
          href="mailto:facundochiappero5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gmail />
          <p>{t('HeroText.BTN_MAIL')}</p>
        </a>

        <a
          href="https://www.linkedin.com/in/facundo-andrés-chiappero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
          <p>{t('HeroText.BTN_LINKEDIN')}</p>
        </a>

        <a
          href="https://github.com/Facundo-Chiappero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>{t('HeroText.BTN_GITHUB')}</p>
        </a>

        <a
          href="./CV_Facundo_Chiappero.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ResumeIcon />
          <p>{t('HeroText.BTN_CV')}</p>
        </a>

        <a
          href="./técnico_en_programación.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Degree />
          <p>{t('HeroText.BTN_DEGREE')}</p>
        </a>
      </div>
    </section>
  )
}

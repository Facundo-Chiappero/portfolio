import { useTranslation } from 'react-i18next'
import { Github, LinkedIn } from '../Icons'
import './footerStyles.css'

export default function Footer() {
  const { t } = useTranslation('global')

  return (
    <footer>
      <div className="contact-info">
        <h2 className="contact-title" id="contact">
          {t('FooterText.CONTACT1')}
        </h2>
        <p className="contact-description">{t('FooterText.CONTACT2')}</p>
        <p className="contact-email">
          {t('FooterText.MAIL1')}{' '}
          <a href="mailto:facundochiappero5@gmail.com" className="email-link">
            {t('FooterText.MAIL2')}
          </a>
        </p>
      </div>

      <div className="social-media">
        <h2 className="social-title">{t('FooterText.SOCIAL_MEDIA')}</h2>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/facundo-andrés-chiappero"
            target="_blank"
            className="social-link linkedin"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/Facundo-Chiappero"
            target="_blank"
            className="social-link github"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  )
}

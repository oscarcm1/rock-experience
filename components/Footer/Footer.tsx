import { IconWhatsApp } from "../Icons/Icons";
import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./Footer.module.scss";


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <span>© 2026 ROCK EXPERIENCE. Todos los derechos reservados.</span>
        <SocialMedia/>

        <div className={styles.whatsapp}>
            <a href="https://web.whatsapp.com/" target="_blank" aria-label="Whatsapp"  rel="noopener noreferrer"><IconWhatsApp /></a>
        </div>
    </footer>
  )
}

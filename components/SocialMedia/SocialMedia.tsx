import { IconFacebook, IconLinkedin, IconX } from "../Icons/Icons"
import styles from "./Social.module.scss"


export default function SocialMedia() {
    return (
        <nav className={styles.social} aria-label="Redes sociales">
            <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"  rel="noopener noreferrer"><IconFacebook /></a>
            <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn"  rel="noopener noreferrer"><IconLinkedin /></a>
            <a href="https://x.com/" target="_blank" aria-label="X"  rel="noopener noreferrer"><IconX /></a>
        </nav>
    )
}

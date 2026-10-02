import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav aria-label="Navegación principal">
                <a className={styles.header__logo} href="#" aria-label="ROCK EXPERIENCE - Inicio">ROCK EXPERIENCE</a>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#experiencias">Experiencias</a></li>
                    <li><a href="#beneficios">Beneficios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <a href="#participar" className={styles.cta}>Participar</a>
            </nav>

        </header>
    )
}

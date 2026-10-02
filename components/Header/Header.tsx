"use client";

import Button from "../Button/Button"
import { IconHamburguer } from "../Icons/Icons"
import styles from "./Header.module.scss"

export default function Header() {
    const handleMenu = () => {
        const nav = document.querySelector(`.${styles.header__list}`);
        nav?.classList.toggle(styles.open);
    };

    return (
        <header className={styles.header}>
                            <a className={styles.header__logo} href="#" aria-label="ROCK EXPERIENCE - Inicio">ROCK EXPERIENCE</a>

            <nav aria-label="Navegación principal" className={styles.header__list}>

                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#experiencias">Experiencias</a></li>
                    <li><a href="#beneficios">Beneficios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <Button href="#contacto" variant="primary">Participar</Button>
            </nav>

            <div className={styles.header__mobile}>
                <button type="button" onClick={handleMenu} aria-label="Abrir menú">
                    <IconHamburguer />
                </button>
            </div>
        </header>
    )
}
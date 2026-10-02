"use client";

import { useState } from "react";
import Button from "../Button/Button";
import { IconHamburguer } from "../Icons/Icons";
import styles from "./Header.module.scss";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <a className={styles.header__logo} href="#" aria-label="ROCK EXPERIENCE - Inicio" onClick={handleCloseMenu}>
                ROCK EXPERIENCE
            </a>

            <nav    aria-label="Navegación principal" className={`${styles.header__list} ${isMenuOpen ? styles.open : ""}`}>
                <ul>
                    <li>
                        <a href="#" onClick={handleCloseMenu}>Inicio</a>
                    </li>
                    <li>
                        <a href="#experiencias" onClick={handleCloseMenu}>Experiencias</a>
                    </li>
                    <li>
                        <a href="#beneficios" onClick={handleCloseMenu}>Beneficios</a>
                    </li>
                    <li>
                        <a href="#contacto" onClick={handleCloseMenu}>Contacto</a>
                    </li>
                </ul>

                <Button href="#contacto" variant="primary" onClick={handleCloseMenu}>
                    Participar
                </Button>
            </nav>

            <div className={styles.header__mobile}>
                <button
                    type="button"
                    onClick={handleMenu}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                >
                    <IconHamburguer />
                </button>
            </div>
        </header>
    );
}

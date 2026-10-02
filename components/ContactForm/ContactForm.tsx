"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className={styles.contact}>
        <div className={styles.confirmation}>
          <h2>Gracias.</h2>
          <p>Recibimos tus datos correctamente.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.contact__text}>
        <h2>ROCK EXPERIENCE</h2>
        <SocialMedia/>
      </div>

      <form className={styles.contact__form} onSubmit={(event) => {  event.preventDefault(); setSubmitted(true);}}>
        <h2>¡Quiero participar!</h2>
        <div className={styles.field}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={50}
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$"
            title="Ingresa un nombre válido"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            pattern="^[0-9]{10}$"
            title="Ingresa un teléfono de 10 dígitos"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            name="company"
            type="text"
            required
            minLength={2}
            maxLength={100}
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s&.,'-]+$"
            title="Ingresa un nombre de empresa válido"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={500}
            rows={5}
          />
        </div>

        <div className={styles.privacy}>
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
          />

          <label htmlFor="privacy">
            Acepto el aviso de privacidad.
          </label>
        </div>

        <Button type="submit" variant="primary">
          Enviar
        </Button>
      </form>
    </section>
  );
}
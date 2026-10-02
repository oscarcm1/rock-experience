This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.






# ROCK EXPERIENCE

Landing page desarrollada como prueba técnica para ROCK EXPERIENCE.

    https://rock-experience-kappa.vercel.app/

## Cómo ejecutar el proyecto

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto en desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000/
```

## Tecnologías utilizadas

* Next.js
* React
* TypeScript
* SCSS
* Vercel

## Estructura general

```text
├── api
├── fonts
├── components
│   ├── Benefits
│   ├── Button
│   ├── ContactForm
│   ├── ExperienceCard
│   ├── Footer
│   ├── Header
│   ├── Icons
│   └── SocialMedia
├── data
└── styles
```

## Decisiones técnicas relevantes

* Uso de **Next.js** para la estructura y renderizado de la aplicación.
* Componentización de la interfaz para favorecer la reutilización y mantenimiento del código.
* Uso de **SCSS Modules** para mantener los estilos encapsulados por componente.
* Uso de `next/font/local` para cargar las tipografías locales de forma optimizada.
* Uso de `next/image` para la optimización de imágenes.
* Implementación de HTML semántico y atributos ARIA para mejorar la accesibilidad.
* Implementación de diseño responsive mediante CSS Grid, media queries y `clamp()`.
* Validación nativa de formularios mediante atributos HTML como `required`, `pattern`, `minLength` y `maxLength`.
* Separación entre componentes de presentación y componentes encargados de consumir datos.

## Qué mejoraría si tuviera más tiempo

* Implementar animaciones utilizando **GSAP**.
* Desarrollar la sección **Benefits**.
* Implementar un **slider de Partners**.
* Mejorar y ampliar las validaciones del formulario.
* Realizar una auditoría adicional de rendimiento, accesibilidad y SEO.

## Herramientas de IA utilizadas

* **ChatGPT** herramienta de apoyo durante el desarrollo para la parte de validación del formulario mediante REGEX

La implementación, integración y validación del código fueron realizadas manualmente.




PARTE 2 — DEBUGGING
Analiza el siguiente componente:
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");

  const sendForm = async () => {
    const response = await fetch(
      "https://api.example.com/contact",
      {
        method: "POST",
        body: JSON.stringify({ email: email })
      }
    );

    alert("Mensaje enviado");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div onClick={sendForm}>
        Enviar
      </div>
    </div>
  );
}
Pregunta
Identifica todos los problemas o áreas de mejora que encuentres, no te límites a indicar si el código funciona.
    • Accesibilidad.
    • UX.
    • Validaciones.
    • Seguridad.
    • APIs.
    • Manejo de errores.
    • React.
    • HTML.
    • Performance.
    • Buenas prácticas.
Explica cómo solucionarías cada problema.


## Soluciones
* No existe un form para el formulario debe existis un <form>  </form>
* El div deberia ser un tipo <button>
* El input del email debe ser type=”email” y no hay name=”email” ni required, no existe   parametros de entrada minimos y maximos y no hay validaciones.
* Falta el Content-type en los headers
* No hay UX, no existe un mensaje de Enviando… o si de algo salio mal


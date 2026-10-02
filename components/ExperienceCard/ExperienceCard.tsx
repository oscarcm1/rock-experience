import Image from "next/image";
import styles from "./ExperienceCard.module.scss";

interface Experience {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className={styles.card}>
      <picture className={styles.imageWrapper}>
        <Image src={experience.image} alt={experience.title} width={600} height={400} loading="lazy" />
      </picture>

      <section className={styles.card__text}>
        <span>{experience.category}</span>
        <h3>{experience.title}</h3>
        <p>{experience.description}</p>
      </section>
    
    </article>
  );
}
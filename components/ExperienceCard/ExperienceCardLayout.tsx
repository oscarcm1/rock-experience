import experiences from "@/data/experiences.json";
import ExperienceCard from "./ExperienceCard";
import styles from "./ExperienceCard.module.scss";

export default function ExperienceCardLayout() {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section className={styles.experience} id="experiencias">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        />
      ))}
    </section>
  );
}
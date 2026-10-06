import ExperienceCard from "./ExperienceCard";
import styles from "./ExperienceCard.module.scss";
import { getExperiences } from "./ExperienceData";

export default async function ExperienceCardLayout() {
  const experiences = await getExperiences();

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
import experiences from "@/data/experiences.json";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ExperienceCardLayout from "@/components/ExperienceCard/ExperienceCardLayout";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="container">
        <Hero />
        <ExperienceCardLayout/>
        <ContactForm/>
      </main>

      <Footer/>
    </div>
  );
}
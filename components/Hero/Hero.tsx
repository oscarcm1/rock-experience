import Button from "../Button/Button"
import styles from "./Hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.hero}>
        <h1>Vive algo diferente</h1>
        <h2>Descubre experiencias creadas para conectar marcas, tecnología y personas.</h2>
        <div className={styles.hero__cta}>
          <Button  href="" variant="primary">Explorar experiencias</Button>
          <Button  href="" variant="secondary" >Quiero participar</Button>
        </div>
    </section>
  )
}

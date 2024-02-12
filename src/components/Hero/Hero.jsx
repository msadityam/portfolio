import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aditya</h1>
        <p className={styles.description}>
          I'm a Java developer with 2 years of experience. Reach out if you'd
          like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:msadityam@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/aditya2.png")}
        alt="Hero-Img"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
export default Hero;

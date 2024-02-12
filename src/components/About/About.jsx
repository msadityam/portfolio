import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/aditya3.png")}
          alt="about image"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.contentImg}
              src={getImageUrl("about/serverIcon.png")}
              alt="cursor"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am a back-end developer with experience in building fast and
                optimised back-end systems and Apis
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.contentImg}
              src={getImageUrl("about/cursorIcon.png")}
              alt="server"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience in building responsive and optimised sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.contentImg}
              src={getImageUrl("about/uiIcon.png")}
              alt="UI"
            />
            <div className={styles.aboutItemText}>
              <h3>Tester</h3>
              <p>
                I have done backend testing for my project using postman and
                junit test cases
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;

import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
          <a href="mailto:msadityam@gmail.com">msadityam@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin-icon"
          />
          <a href="https://www.linkedin.com/in/aditya-m-s-6453321ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            linkedin.com/aditya
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="git-icon" />
          <a href="https://www.github.com/msadityam">github.com/adityams</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/leetCode.png")} alt="leetCode-icon" />
          <a href="https://leetcode.com/aadityams/">leetcode.com/aadityams</a>
        </li>
      </ul>
    </footer>
  );
};

import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Address</h3>
              <p>
                Currently living at Lipayo, Dauin Negros Oriental
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Age and Education</h3>
              <p>
                I'm 21 years old and currently studying at Asian College taking Bachelor of Science in Information Technology. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Hobbies and Motto</h3>
              <p>
              In my free time, I enjoy sleeping to recharge, eating delicious food, and playing volleyball when I can, as it keeps me active and helps me connect with friends; 
              after all, life must go on, so I believe in embracing the journey and enjoying every moment.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

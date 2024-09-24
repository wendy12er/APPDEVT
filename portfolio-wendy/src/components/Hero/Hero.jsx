import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, I'm Wendy A. Alcoriza</h1>
        <p className={styles.description}>
          I'm Wendy, my goal is to deliver quality and innovation in every project and always looking for new challenges. Take a look at my portfolio!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Message Me!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

import React from "react";
import styles from "./Title.module.css";

const Title = ({ title, text, img }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.container__img}
        style={{
          backgroundImage: `url( ${
            img ? img : "/images/placeholder/1920x680.png"
          })`          
        }}
      >
        <div className={styles.container__text}>
          <h1 className={styles.container__text__title}>{title}</h1>
          <p className={styles.container__text__body}>{text} </p>
        </div>
      </div>
    </div>
  );
};

export default Title;

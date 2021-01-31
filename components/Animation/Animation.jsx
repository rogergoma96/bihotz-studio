import { useEffect, useState } from "react";

import styles from "./Animation.module.css";

const Animation = () => {
  const [heightOfAnimation, setHeightOfAnimation] = useState("0px");

  const handleResize = () =>
    setHeightOfAnimation(
      `${document.getElementById("lateral-animation").offsetWidth}px`
    );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    setHeightOfAnimation(
      `${document.getElementById("lateral-animation").offsetWidth}px`
    );

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.container} id="lateral-animation">
      <h1 className={styles.h1} style={{ height: `${heightOfAnimation}` }}>
        Bihotz Studio
      </h1>
      <span
        className={styles.brand}
        style={{ height: `${heightOfAnimation}` }}
        aria-hidden
      >
        Bihotz Studio
      </span>
      <span
        className={styles.brand}
        style={{ height: `${heightOfAnimation}` }}
        aria-hidden
      >
        Bihotz Studio
      </span>
    </section>
  );
};

export default Animation;

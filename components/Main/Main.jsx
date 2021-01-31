import Links from "../Links/Links";

import styles from "./Main.module.css";

const Main = ({ labels }) => (
  <main className={styles.container}>
    <section className={styles.section}>
      <h2 className={styles.title}>{labels.title}</h2>
      <p className={styles.text}>{labels.contact}</p>
      <a className={styles.text} href="mailto:hello@bihotz-studio.com">
        hello@bihotz-studio.com
      </a>
      <a className={styles.text} href="tel:+34697525425">
        +34 697 525 425
      </a>
      <p className={styles.text}>{`Barcelona · ${labels.country}`}</p>
    </section>
    <Links labels={labels} />
  </main>
);

export default Main;

import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.container}>
    <a className={styles.email} href="mailto:hello@bihotz-studio.com">
      hello@bihotz-studio.com
    </a>
    <a className={styles.phone} href="phone:+34697525425">
      +34 697 525 425
    </a>
    <p className={styles.country}>Barcelona</p>
  </header>
);

export default Header;

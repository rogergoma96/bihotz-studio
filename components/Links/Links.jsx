import Link from "./Link/Link";

import styles from "./Links.module.css";

const Links = ({ labels }) => (
  <section className={styles.container}>
    <Link text="PORTFOLIO" href="/" />
    <Link text={labels.follow} href="/" />
  </section>
);

export default Links;

import Link from "./Link/Link";

import styles from "./Links.module.css";

const Links = ({ labels }) => (
  <section className={styles.container}>
    <Link text="PORTFOLIO" href="https://www.behance.net/lauracantabrana" />
    <Link text={labels.follow} href="https://www.instagram.com/bihotz.studio" />
  </section>
);

export default Links;

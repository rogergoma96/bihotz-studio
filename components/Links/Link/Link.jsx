import ArrowIcon from "../../Icons/Arrow";

import styles from "./Link.module.css";

const Link = ({ text, href }) => (
  <a className={styles.link} href={href}>
    <ArrowIcon />
    <span className={styles.label}>{text}</span>
  </a>
);

export default Link;

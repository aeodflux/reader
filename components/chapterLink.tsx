import Link from "next/link";
import styles from "../styles/chapterLink.module.scss";

export const ChapterLink = ({ title, index }) => {
  return (
    <Link className={styles.link} href={`/books/voina-i-mir?chapter=${index}`}>
      {title}
    </Link>
  );
};

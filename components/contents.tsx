import styles from "../styles/contents.module.scss";
import { TomePartCaption } from "./tomePartCaption";
import { ChapterLink } from "./chapterLink";

export const Contents = ({ chapters }) => {
  return (
    <>
      <h2 className={styles.header}>Оглавление</h2>
      <div className={styles.border}>
        <div className={styles.container}>
          {chapters.map((title, index) => {
            return (
              <>
                <TomePartCaption index={index} />
                <ChapterLink title={title} index={index} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

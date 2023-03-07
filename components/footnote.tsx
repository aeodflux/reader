import styles from "../styles/footnote.module.scss";

type Props = {
  coords: {
    top: string
  },
  text: string,
  order: string
}

export const Footnote = ({ coords, text, order }: Props) => {
  const top = `${Number(coords.top) - 10}px`;
  return (
    <div
      onMouseEnter={(e) => e.stopPropagation()}
      className={styles.footnote}
      style={{
        top: top,
      }}
    >
      <b>{order}</b>
      {text}
    </div>
  );
};

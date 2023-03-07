
import styles from '../styles/controls.module.scss';
import Link from 'next/link';

type Props = {
    chapter: string,
    book: string
}

export const Controls = ({chapter, book}: Props) => {

    return (
        <>
            {Boolean((Number(chapter) !== 1)) && <Link href={`${book}/?chapter=${Number(chapter)-1}`} className={styles.nextPage}>
                Назад
            </Link>}

            {Boolean((Number(chapter) !== 365)) && <Link href={`${book}/?chapter=${Number(chapter)+1}`} className={styles.nextPage}>
                Далее
            </Link>}
        </>
    )
}
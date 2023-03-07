import Head from "next/head";
import styles from "../styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";
import { removeExtension } from "../lib/removeExtension";

type Props = {
  books: string[];
};

const Home = ({ books }: Props) => {
  return (
    <>
      <Head>
        <title>Reader</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            src="/logo.svg"
            alt="logo"
            className={styles.logo}
            width={410}
            height={155}
          />
        </div>
        <h1 className={styles.appName}>Reader</h1>
        <p className={styles.intro}>
          «Война и мир» – роман-эпопея русского писателя, публициста,
          просветителя и религиозного мыслителя Льва Николаевича Толстого
          (1828-1910). Создавался в 1863-1869 годы. Отрывок из романа под
          названием «1805 год» впервые был опубликован в 1865 году в «Русском
          вестнике». В 1868 году в свет вышли три части романа, за которыми
          вскоре последовали еще две. В первом издании «Войны и мира» был
          длинный ряд чисто теоретических страниц, мешавших целостности
          художественного впечатления; в более поздних изданиях эти рассуждения
          были обособлены в особую часть.
        </p>
        <div className={styles.book}>
          <Link
            className={styles.bookTitle}
            href={`/books/voina-i-mir?chapter=1`}
          >
            Начать читать
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3333/books/");
  const books = await res.json();
  return {
    props: {
      books: books.books,
    },
  };
}

export default Home;

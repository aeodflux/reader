import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/book.module.scss";
import Head from "next/head";
import { Controls } from "../../components/controls";
import { Footer } from "../../components/footer";
import { findFootnotes } from "../../lib/findFootnotes";
import { Footnote } from "../../components/footnote";
import { deleteFootnotes } from "../../lib/deleteFootnotes";

import type { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { Contents } from "../../components/contents";
import { TomePartCaption } from "../../components/tomePartCaption";

const Book = ({ text, contents }) => {
  const [footnotes, setFootnotes] = useState([]);
  const router = useRouter();
  let { book, chapter } = router.query;

  if (typeof chapter === "object") {
    chapter = chapter[0];
  }

  if (typeof book === "object") {
    book = book[0];
  }

  useEffect(() => {
    const queryChapter = router.query.chapter;

    if (!queryChapter) {
      router.replace({
        query: { ...router.query, chapter: 1 },
      });
    }
  }, []);

  useEffect(() => {
    const root = document.getElementById("root");
    root.innerHTML = text;
    const notes = findFootnotes();

    setFootnotes(notes);

    deleteFootnotes();
  }, [text]);

  const renderedFootnotes = footnotes.map((note) => {
    return (
      <Footnote
        coords={note.coords}
        text={note.text}
        key={note.id}
        order={note.id}
      />
    );
  });

  return (
    <>
      <Head>
        <title>War and Peace</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <Contents chapters={contents} />

      <main className={styles.container}>
        <Link href={`/`} className={styles.homeButton}>
          <h2 className={styles.appName}>Reader</h2>
        </Link>

        <Controls chapter={chapter} book={book} />
        <div className={styles.partCaption}>
          <TomePartCaption index={Number(chapter)} />
        </div>
        <div id="root" className={styles.text}></div>
        {Boolean(footnotes.length) && renderedFootnotes}
        <Controls chapter={chapter} book={book} />
      </main>

      <Footer />
    </>
  );
};

export async function getServerSideProps<
  Q extends ParsedUrlQuery,
  D extends PreviewData
>(context: GetServerSidePropsContext<Q, D>) {
  const chapter = context.query.chapter;
  const book = context.params.book;

  const response = await fetch(
    `http://localhost:3333/books/${book}/${chapter}`
  );
  const data = await response.json();

  return {
    props: {
      text: data.text,
      contents: data.contents,
    },
  };
}

export default Book;

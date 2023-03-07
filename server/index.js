const path = require("path");
const express = require("express");
const EPub = require("epub");
var cors = require("cors");
const fs = require("fs");
const { JSDOM } = require("jsdom");

const app = express();

app.use(cors());

const dir = "./public/books";

const epub = new EPub(`${__dirname}/public/books/voina-i-mir.epub`);

const book = [];

epub.on("end", () => {
  epub.flow.forEach((chapter) => {
    epub.getChapter(chapter.id, (_, text) => {
      const dom = new JSDOM(`<html><body>${text}</body></html>`);
      const document = dom.window.document;

      const header = document.querySelector(".header")?.textContent ?? "";

      book.push({ id: chapter.id, text: text, title: header });
    });
  });
});

epub.parse();

app.use(express.static(path.join(__dirname, "public")));

app.get("/books", (_, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  fs.readdir(dir, (_, files) => {
    res.send({ books: files });
  });
});

app.get("/books/:id/:chapter", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id = req.params.id;
  const chapter = req.params.chapter;

  const sortedBook = [...book]
    .sort((a, b) => {
      if (a.id.match(/chapter/g) && b.id.match(/chapter/g)) {
        return (
          Number(a.id.replace(/chapter/g, "").replace(/.xhtml/g, "")) -
          Number(b.id.replace(/chapter/g, "").replace(/.xhtml/g, ""))
        );
      } else {
        return 0;
      }
    })
    .map((data) => {
      return { text: data.text, title: data.title };
    });

  const contents = sortedBook.map((chapter) => chapter.title);

  if (id === "voina-i-mir") {
    res.send({ text: sortedBook[Number(chapter)].text, contents: contents });
  } else {
    res.send({ text: null });
  }
});

app.listen(3333, () => {
  console.log("Application listening on port 3333!");
});

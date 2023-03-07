export function findFootnotes() {
  const footnotes = {};

  const footnoteLinks = Array.from(
    document.querySelectorAll('a[href^="#n"]'),
    (elem: HTMLHtmlElement) => {
      const coords = elem.getBoundingClientRect();
      return {
        id: elem.innerText,
        coords: coords,
      };
    }
  );

  const footnoteTexts = Array.from(
    document.querySelectorAll('p[class="footnote_text"]'),
    (node) => {
      return node.childNodes[3]?.textContent ?? node.childNodes[1].textContent.replace(/[^А-ЯЁA-Z]/i, '');
    }
  );

  footnoteLinks.forEach((link) => {
    footnotes[link.id] = {
      text: footnoteTexts[Number(link.id) - 1],
      id: link.id,
      coords: link.coords,
    };
  });

  return Object.values(footnotes);
}

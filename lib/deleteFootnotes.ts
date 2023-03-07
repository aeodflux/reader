export const deleteFootnotes = () => {
  const notes = document.querySelectorAll('p[class^="footnote_text"]');
  const hrs = document.querySelectorAll("hr");
  hrs.forEach((hr) => hr.parentNode.removeChild(hr));
  notes.forEach((note) => note.parentNode.removeChild(note));
};

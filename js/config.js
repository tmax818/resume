module.exports = {
  stylesheet: [
    "path/to/style.css",
    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css",
  ],
  css: `body { color: tomato; }`,
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    format: "A5",
    margin: "20mm",
    printBackground: true,
  },
  stylesheet_encoding: "utf-8",
  dest: "./tylerMaxwell.pdf",
  path: "./tylerMaxwell.md",
};

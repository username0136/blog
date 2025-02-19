import { createContentLoader } from "vitepress";

interface Blog {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  authors: string[];
  tags: string[];
  excerpt: string | undefined;
}

declare const data: Blog[];
export { data };

export default createContentLoader("blog/*.md", {
  excerpt: true,
  transform(raw): Blog[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        authors: frontmatter.authors,
        tags: frontmatter.tags,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time)
      .reverse();
  },
});

function formatDate(raw: string): Blog["date"] {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

import type { BlogPostType } from "@/types";

const MAX_TITLE_LENGTH = 49;
const MAX_DESCRIPTION_LENGTH = 178;

function compactAtWord(text: string, limit: number) {
  if (text.length <= limit) return text;

  const shortened = text
    .slice(0, limit - 1)
    .replace(/\s+\S*$/, "")
    .replace(/[\s,:;?–—-]+$/, "");

  return `${shortened || text.slice(0, limit - 1)}…`;
}

export function getBlogSeoCopy(post: Pick<BlogPostType, "title" | "description">) {
  if (post.title.length <= MAX_TITLE_LENGTH) {
    return {
      title: post.title,
      description: compactAtWord(post.description, MAX_DESCRIPTION_LENGTH),
    };
  }

  const primaryClause = post.title
    .split(/\s*[,;:]\s*|\?\s+/)[0]
    .replace(/\?$/, "")
    .trim();

  return {
    title: compactAtWord(primaryClause.length >= 12 ? primaryClause : post.title, MAX_TITLE_LENGTH),
    description: compactAtWord(post.description, MAX_DESCRIPTION_LENGTH),
  };
}

import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult.content;
};

export default function Post(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <article className="min-h-screen mx-auto pt-8 px-4 prose prose-img:rounded dark:prose-invert">
      <Markdown>{post}</Markdown>
    </article>
  );
}

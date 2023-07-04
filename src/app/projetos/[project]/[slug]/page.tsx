import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import path from "path";

const getPostContent = (dirPost: string) => {
  const pathDir = path.join(process.cwd(), "posts/");
  const file = `${pathDir}${dirPost}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult.content;
};

export default function Post(props: any) {
  const dirPost = `${props.params.project}/${props.params.slug}`;
  const post = getPostContent(dirPost);
  return (
    <article className="min-h-screen mx-auto pt-8 px-4 prose prose-img:rounded dark:prose-invert">
      <Markdown>{post}</Markdown>
    </article>
  );
}

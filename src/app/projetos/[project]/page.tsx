import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../../../../types/PostMetadata";
import Link from "next/link";
import path from "path";

const getPostMetadata = (slug: string): PostMetadata[] => {
  const pathDir = path.join(process.cwd(), `posts/${slug}`);
  const files = fs.readdirSync(pathDir);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${pathDir}/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      heroImg: matterResult.data?.heroImg,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default function Project(props: any) {
  const project: string = props.params.project;
  const posts = getPostMetadata(project);
  return (
    <main>
      <div>
        <h1 className="font-mono text-2xl font-extrabold uppercase">
          Projeto:{" "}
          <span className="text-red-500 dark:text-sky-500 text-xl">
            {project.toUpperCase()}
          </span>
        </h1>
      </div>
      <section className="py-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/projetos/${project}/${post.slug}`}
            className="flex flex-col px-4 py-2 border rounded-lg border-zinc-700"
          >
            <h1 className="font-mono text-lg font-bold">{post.title}</h1>
            <span className="text-xs font-light">{post.date}</span>
            <h2 className="text-sm text-zinc-500">{post.subtitle}</h2>
          </Link>
        ))}
      </section>
    </main>
  );
}

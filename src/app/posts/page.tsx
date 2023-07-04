import fs from "fs";
import matter from "gray-matter";
import path, { relative } from "path";
import { PostMetadata } from "../../../types/PostMetadata";
import Link from "next/link";

const getMarkdownFiles = (): PostMetadata[] => {
  const dir = path.join(process.cwd(), "posts/");
  const files = getFilesRecursive(dir);
  const posts = files.map((pathName) => {
    const fileContent = fs.readFileSync(pathName, "utf-8");
    const matterResult = matter(fileContent);

    const dirName = path.dirname(pathName);
    const directories = dirName.split(path.sep);
    const project = directories[directories.length - 1];

    const fileName = path.basename(pathName);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      heroImg: matterResult.data?.heroImg,
      slug: matterResult.data.slug
        ? matterResult.data.slug
        : fileName.replace(".md", ""),
      project: project,
    };
  });

  return posts;
};

const getFilesRecursive = (dir: string) => {
  const files = fs.readdirSync(dir);
  let markdownFiles: string[] = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const nestedFiles = getFilesRecursive(filePath);
      markdownFiles = markdownFiles.concat(nestedFiles);
    } else if (path.extname(file) === ".md") {
      markdownFiles.push(filePath);
    }
  });

  return markdownFiles;
};

export default function Posts() {
  const posts = getMarkdownFiles();
  return (
    <main>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            href={`projetos/${post.project}/${post.slug}`}
            className="border rounded-l px-4 py-2"
          >
            <div className="flex justify-between gap-2 ">
              <h1 className="font-mono font-bold text-xl">{post.title}</h1>
              <h3 className="bg-sky-500 border rounded-sm border-transparent p-1 min-w-fit h-fit text-xs text-center dark:bg-red-500 md:w-fit">
                {post.project}
              </h3>
            </div>
            <span className="text-xs font-extralight">{post.date}</span>
            <h2 className="text-sm text-zinc-400">{post.subtitle}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

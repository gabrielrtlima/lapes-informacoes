import Link from "next/link";
import { MasterHead } from "./components/MasterHead";
import fs from "fs";

const getProjects = () => {
  const path = "posts/";
  const readDir = fs.readdirSync(path);
  const directories = readDir.filter((item) => {
    const stat = fs.statSync(`${path}${item}`);
    return stat.isDirectory();
  });

  return directories;
};

export default function Home() {
  const projects = getProjects();
  return (
    <main className="">
      <MasterHead />
      <article className="mx-auto w-4/5 pt-12">
        <h1 className="text-4xl font-mono uppercase font-extrabold">
          Projetos:
        </h1>
        <div className="pt-5 grid grid-cols-1 justify-items-center md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projetos/${project}`}
            >
              <div className="flex items-center justify-center py-2 min-w-[200px] border rounded-md border-zinc-600 cursor-pointer hover:brightness-75 transition-all duration-100">
                <h1 className="font-mono text-sky-600 dark:text-red-600 ">
                  {project}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}

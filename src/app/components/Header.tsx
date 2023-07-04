import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggleButton";
export const Header = () => {
  return (
    <header className="fixed w-full p-2 z-20 backdrop-blur-md ">
      <div className="mx-auto max-w-3xl">
        <nav className="flex items-center gap-3 text-base">
          <a className="group" href="/">
            <h2 className="font-semibold text-red-500 dark:text-sky-500 tracking-tighter p-2 font-mono uppercase">
              LAPES
            </h2>
          </a>
          <div className="flex items-center gap-6 ">
            <Link href="/posts">Posts</Link>
          </div>
          <div className="flex-1">
          </div>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

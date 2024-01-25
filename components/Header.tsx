import Link from "next/link";
import AuthButton from "./AuthButton";

export default function Header() {
  return (
    <div className="w-full flex flex-col gap-16 items-center">
      <h1 className="sr-only">Colorado 14ers</h1>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div>
            <Link
              className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              href="/"
            >
              Home
            </Link>
            <Link
              className="ml-2 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              href="/climbed"
            >
              Climbed Peaks
            </Link>
          </div>
          <AuthButton />
        </div>
      </nav>
    </div>
  );
}

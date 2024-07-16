import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center fixed px-10 pt-6 w-screen z-50">
      <Link
        href={"/"}
        className="text-center text-3xl font-extrabold leading-9 text-indigo-500"
      >
        LW.
      </Link>
      <div className="flex items-center justify-center gap-2">
        <Link
          href={"/signin"}
          className="bg-indigo-600 text-white px-4 py-2 rounded-3xl text-sm font-semibold hover:bg-opacity-80 transition-all"
        >
          Sign in
        </Link>
        <Link
          href={"/signup"}
          className="bg-zinc-800 text-white px-4 py-2 rounded-3xl text-sm font-semibold hover:bg-opacity-80 transition-all"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

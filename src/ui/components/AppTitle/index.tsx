import Image from "next/image";
import Link from "next/link";

export default function AppTitle() {
  return (
    <div className="flex flex-none items-center gap-4">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </Link>

      <div className="hover:dark:cyan-red-400 whitespace-nowrap bg-gradient-to-b from-cyan-500 to-violet-700 bg-clip-text font-poppins text-3xl font-bold text-transparent hover:from-cyan-600 hover:to-violet-800 dark:from-cyan-200 dark:to-violet-200 dark:hover:from-cyan-200 dark:hover:to-violet-300">
        <Link href="/">Next SMART Kit</Link>
      </div>
    </div>
  );
}

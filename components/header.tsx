import Link from "next/link";

// actually I'll just use standard tailwind classes for now since I didn't verify shadcn installation fully (it's custom setup)

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tighter"
        >
          GROWTH.
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="#why"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            소개
          </Link>
          <Link
            href="#curriculum"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            커리큘럼
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            문의하기
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* Simple Button style directly */}
          <Link
            href="#apply"
            className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          >
            수강 신청하기
          </Link>
        </div>
      </div>
    </header>
  );
}

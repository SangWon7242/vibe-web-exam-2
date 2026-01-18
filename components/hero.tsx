import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center space-y-10 pt-32 pb-20 text-center px-4">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl">
          Change Your Career, <br />
          <span className="text-gray-500">Start Your Growth.</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          미래를 바꾸는 가장 확실한 선택.
          <br />
          제로베이스부터 프로페셔널 개발자까지, 12주 완성 로드맵으로 시작하세요.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="#curriculum"
          className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
        >
          커리큘럼 확인하기
        </Link>
        <Link
          href="#apply"
          className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
        >
          더 알아보기
        </Link>
      </div>
    </section>
  );
}

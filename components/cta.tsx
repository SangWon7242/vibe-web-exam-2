import Link from "next/link";

export function CTA() {
  return (
    <section id="apply" className="w-full py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">
          Ready to start your journey?
        </h2>
        <p className="max-w-[600px] mx-auto text-gray-400 font-medium text-lg mb-10 word-keep-all">
          당신의 개발 커리어, 지금 바로 시작하세요. <br />
          소수 정예로 진행되는 이번 기수 모집이 곧 마감됩니다.
        </p>
        <Link
          href="#apply"
          className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-black shadow transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
        >
          지금 지원하기
        </Link>
      </div>
    </section>
  );
}

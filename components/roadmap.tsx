"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
} from "lucide-react";

const weeks = [
  {
    icon: <Terminal className="h-6 w-6" />,
    week: "Week 01-02",
    title: "Foundation & Setup",
    desc: "개발 환경을 세팅하고 웹의 기본 구조를 탄탄하게 다집니다.",
    details: [
      "VS Code 및 필수 확장 프로그램 설치",
      "Git & GitHub 협업 워크플로우",
      "HTML5 시맨틱 마크업 이해",
      "CSS3 핵심 기초 및 Flexbox 레이아웃",
    ],
  },
  {
    icon: <Layout className="h-6 w-6" />,
    week: "Week 03-04",
    title: "Javascript & Modern UI",
    desc: "자바스크립트의 핵심 문법을 익히고 인터랙티브한 UI를 만듭니다.",
    details: [
      "ES6+ 최신 문법 (화살표 함수, 구조 분해 할당)",
      "DOM 조작 및 이벤트 핸들링",
      "비동기 프로그래밍 (Promise, Async/Await)",
      "리액트(React.js) 기초 입문",
    ],
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    week: "Week 05-08",
    title: "React Ecosystem & Next.js",
    desc: "실무에서 가장 많이 쓰는 모던 스택으로 확장 가능한 앱을 만듭니다.",
    details: [
      "React Hooks 완벽 가이드 (useState, useEffect)",
      "전역 상태 관리 (Zustand)",
      "Next.js App Router 아키텍처",
      "Tailwind CSS 스타일링 마스터",
    ],
  },
  {
    icon: <Server className="h-6 w-6" />,
    week: "Week 09-10",
    title: "Backend & Database",
    desc: "서버와 데이터베이스를 연결하여 풀스택 능력을 갖춥니다.",
    details: [
      "Node.js & Next.js API Routes",
      "Supabase 연동 및 데이터베이스 구축",
      "데이터베이스 스키마 설계",
      "사용자 인증(Authentication) 구현",
    ],
  },
  {
    icon: <Database className="h-6 w-6" />,
    week: "Week 11-12",
    title: "Project & Deployment",
    desc: "나만의 포트폴리오 프로젝트를 완성하고 세상에 배포합니다.",
    details: [
      "실전 포트폴리오 프로젝트 개발",
      "Vercel을 이용한 CI/CD 배포 파이프라인",
      "웹 성능 최적화 및 SEO 설정",
      "최종 데모데이 및 피드백",
    ],
  },
];

export function Roadmap() {
  return (
    <section id="curriculum" className="w-full py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            Curriculum Roadmap
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            전문가로 성장하기 위한 12주간의 여정. <br />
            기초부터 배포까지, 실무에 꼭 필요한 내용만 담았습니다.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:hidden" />

          <div className="space-y-12">
            {weeks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-0"
              >
                {/* Timeline Dot (Mobile: Left, Desktop: Center) */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-black flex items-center justify-center z-10 shrink-0">
                  <div className="text-white">{item.icon}</div>
                </div>

                {/* Content Side */}
                <div
                  className={`md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end md:pr-16 pl-20" : "md:justify-start md:ml-auto md:pl-16 pl-20"}`}
                >
                  <div
                    className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"} w-full`}
                  >
                    <span className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-1 block">
                      {item.week}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-500 mb-4 word-keep-all">
                      {item.desc}
                    </p>

                    {/* Detail List (Transparent & Honest as requested) */}
                    <ul
                      className={`space-y-2 mt-4 inline-block text-left bg-white p-4 rounded-lg border border-gray-100 shadow-sm w-full ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm text-gray-600 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

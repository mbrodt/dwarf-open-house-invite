import { Inter } from "next/font/google";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import confetti from "canvas-confetti";

const fireConfetti = ({ x, y }) => {
  confetti({
    particleCount: 200,
    spread: 150,
    origin: { x, y },
  });
};
export default function Success() {
  useEffect(() => {
    fireConfetti({ x: 0.5, y: 0.4 });
    setTimeout(() => {
      fireConfetti({ x: 0.3, y: 0.6 });
    }, 600);
    setTimeout(() => {
      fireConfetti({ x: 0.7, y: 0.6 });
    }, 1200);
    setTimeout(() => {
      window.location.href = "/";
    }, 10000);
  }, []);
  return (
    <main
      className={`relative flex flex-col  items-center min-h-screen bg-[#1d1d1d]  pt-24 pb-16 ${inter.className}`}
    >
      <div className="bg-[#272727] text-[#939393] flex flex-col items-center rounded-lg px-4 py-12 lg:p-12 mx-4">
        <p className="text-3xl font-bold text-white">Thank you!</p>
        <p className="mt-4 px-8 text-lg opacity-60 text-center">
          Your sign up has been registered. We look forward to seeing you at the
          open house!
        </p>
        <a
          className="underline text-center text-lg mt-4 opacity-60 px-6"
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://dwarf.dk/career/talent-bootcamp-fall-2023"
        >
          Read more about the Talent Bootcamp here
        </a>
      </div>
    </main>
  );
}

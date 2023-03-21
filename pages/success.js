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
      className={`relative flex flex-col  items-center min-h-screen bg-gradient-to-br to-gray-400 from-gray-100 pt-24 pb-16 ${inter.className}`}
    >
      <p className="text-3xl font-bold">Thank you!</p>
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
    </main>
  );
}

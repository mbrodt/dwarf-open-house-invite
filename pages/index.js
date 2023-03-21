import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main
      className={`relative flex flex-col  items-center min-h-screen  bg-[#1d1d1d] pt-12 lg:pt-24 pb-16 lg:pb-24 ${inter.className}`}
    >
      <motion.div
        className="max-w-xl lg:max-w-2xl mx-4 sm:mx-8 flex flex-col bg-[#272727] pb-8 rounded-lg card relative"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.img
          className="mx-auto w-[200px] lg:w-[300px] h-[100px] lg:[h-150px] mt-8"
          src="/dwarf2.svg"
          alt="Next.js Logo"
          variants={itemVariants}
        />

        <motion.div
          className="bg-gray-200 text-center mx-auto  px-4 py-2 font-semibold tracking-widest uppercase rounded-lg mt-4 lg:mt-6 text-sm"
          variants={itemVariants}
        >
          Talent Bootcamp Open house
        </motion.div>
        <motion.div className="px-4 mt-8 text-sm md:text-base lg:text-lg text-[#939393] text-center grid gap-4 lg:px-8">
          <motion.p variants={itemVariants}>
            We are happy to invite you to our open house event at our office on
            Bernhard Bangs Allé 25, 2nd floor.
          </motion.p>
          <motion.p variants={itemVariants}>
            The open house will be held on the 21st of April, and is for anyone
            considering applying (or who have already applied) for our Talent
            Bootcamp programme running in Fall 2023.
          </motion.p>
          <motion.p variants={itemVariants}>
            The event will be from 16:00 to 18:00 and is a great opportunity to
            learn more about Dwarf and the internship programme. You will also
            have plenty of opportunity to ask questions and network.
          </motion.p>
          <motion.p variants={itemVariants}>
            There will of course be plenty of snacks and drinks, but we kindly
            ask you to fill out the form below so we can get an idea of how many
            people to expect.
          </motion.p>
          <motion.p variants={itemVariants}>
            We look forward to seeing you there! And if you haven't already,{" "}
            <a
              className="underline"
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://dwarf.dk/career/talent-bootcamp-fall-2023"
            >
              read more about our Talent Bootcamp here.
            </a>
          </motion.p>
        </motion.div>
        <motion.form
          className="mt-8 w-full px-8"
          name="OpenHouseSignups"
          action="/success"
          data-netlify="true"
          method="POST"
          // variants={itemVariants}
        >
          <input type="hidden" name="form-name" value="OpenHouseSignups" />

          {/* <motion.p className="text-lg text-center" variants={itemVariants}>
            Fill in your details
          </motion.p> */}
          <div className="mt-4 grid gap-3">
            <motion.div variants={itemVariants} className="flex flex-col">
              <label
                className="text-[#939393] text-xs font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                required
                className="mt-1 rounded-lg px-2 bg-gray-100/10 py-2 border border-gray-500 placeholder:text-gray-300/40 text-[#939393] focus:outline-none focus:ring-1 focus:ring-gray-300"
                placeholder="Your name"
                type="text"
                name="name"
                id="name"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col">
              <label
                className="text-[#939393] text-xs font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                className="mt-1 rounded-lg px-2 bg-gray-100/10 py-2 border border-gray-500 placeholder:text-gray-300/40 text-[#939393] focus:outline-none focus:ring-1 focus:ring-gray-300"
                type="email"
                name="email"
                placeholder="Your email"
                id="email"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col">
              <label
                className="text-[#939393] text-xs font-semibold"
                htmlFor="programme"
              >
                Currently studying
              </label>
              <input
                required
                className="mt-1 rounded-lg px-2 bg-gray-100/10 py-2 border border-gray-500 placeholder:text-gray-300/40 text-[#939393] focus:outline-none focus:ring-1 focus:ring-gray-300"
                type="text"
                name="programme"
                placeholder="Your programme"
                id="programme"
              />
            </motion.div>
            <motion.button
              variants={itemVariants}
              className="mt-4 h-[42px] lg:h-14 lg:text-lg lg:mt-4 w-full bg-[#3B3B3B] hover:bg-[#4A4A4A] duration-300 transition-colors ease-in-out text-white rounded-lg flex items-center justify-center group focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              Sign me up{" "}
              <svg
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                ></path>
              </svg>
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </main>
  );
}

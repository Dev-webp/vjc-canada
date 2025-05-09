"use client";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Link from "next/link";

const Passport = () => {
  return (
    <motion.div
      className="relative w-full h-52 mb-20 lg:px-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/passports.png')" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Overlay if needed */}
      <div className="absolute inset-0 bg-black/50 opacity-50"></div>

      <div className="relative z-10 flex justify-between items-center h-full px-5">
        {/* Content Section with animation */}
        <motion.div
          className="flex-1 text-white p-5"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl md:text-3xl text-sky-400 font-bold mb-4">
            Canada PR Visa
          </h2>
          <p className="mb-4 text-sm md:text-lg">
            Get all the information you need to apply for a Permanent Residency visa to Canada. Start your journey today!
          </p>
        </motion.div>

        {/* Button Section with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/contact"
            className="relative overflow-hidden inline-block px-6 py-3 mt-6 rounded-md font-semibold text-white bg-orange-500 group"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-sky-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Passport;

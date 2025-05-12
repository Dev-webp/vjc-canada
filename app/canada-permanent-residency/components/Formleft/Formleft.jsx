"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FormLeft = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col text-left p-8 space-y-8 bg-white/70"
    >
      <h2 className="text-3xl font-bold text-orange-600">
        Canada Permanent Residence Visa
      </h2>
      <Image
        src="/assets/canadapr/formimg.png"
        alt="Assessment"
        width={450}
        height={160}
        className="rounded-md shadow-md w-full max-w-[450px] h-auto"
      />

      <p className="text-gray-700 text-base">
        Canada offers one of the most welcoming environments for immigrants
        worldwide, and obtaining a Permanent Residence (PR) Visa is a
        life-changing opportunity. At{" "}
        <span className="text-orange-600">VJC Overseas</span>, we specialize in
        helping individuals and families navigate the complexities of Canada’s
        immigration process and successfully secure their PR. With its high
        quality of life, excellent healthcare and education systems, and
        abundant job opportunities, Canada promises a future full of
        possibilities.
      </p>
    </motion.div>
  );
};

export default FormLeft;

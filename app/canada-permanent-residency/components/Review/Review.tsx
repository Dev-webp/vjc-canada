"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slidesData = [
  {
    image: "/assets/Reviews/review1.png",
    content: "This is the best Canada PR visa service. Highly recommended!",
    author: "John Doe",
    title: "PR Applicant"
  },
  {
    image: "/assets/Reviews/review2.png",
    content: "Fantastic experience with VJC Overseas. Professional and efficient!",
    author: "Jane Smith",
    title: "Student Visa"
  },
  {
    image: "/assets/Reviews/review3.png",
    content: "The Canada PR process was smooth, thanks to VJC Overseas!",
    author: "Alex Brown",
    title: "Skilled Worker"
  },
  {
    image: "/assets/Reviews/review4.png",
    content: "Great support team and timely updates. I felt confident throughout the process!",
    author: "Emily Clark",
    title: "Visitor Visa"
  },
  {
    image: "/assets/Reviews/review5.png",
    content: "Excellent guidance from start to finish. Highly trustworthy agency!",
    author: "Michael Lee",
    title: "Investor Program"
  }
];

const Passport = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className="w-full pb-16 bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: "url('/assets/review.png')" }}
    >
      <div className="w-full max-w-6xl px-6 md:flex items-center gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="w-full md:flex items-center gap-10"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full h-[500px] max-w-md">
                <Image
                  src={slidesData[currentSlide].image}
                  alt="Reviewer"
                  fill
                  className="rounded-xl object-cover shadow-md"
                />
              </div>
            </div>

            {/* Right: Quote Box */}
            <div className="w-full md:w-1/2 bg-sky-600 text-white p-8 rounded-xl shadow-lg relative mt-10 md:mt-0">
              <span className="text-5xl text-yellow-400 absolute top-4 left-4">“</span>
              <p className="text-lg italic mb-6 mt-8">{slidesData[currentSlide].content}</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  {slidesData[currentSlide].author[0]}
                </div>
                <div>
                  <p className="font-semibold">{slidesData[currentSlide].author}</p>
                  <p className="text-sm text-gray-300">{slidesData[currentSlide].title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Passport;

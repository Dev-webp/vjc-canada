"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const canadaVisaSlides = [
  {
    title: "Why Choose Canada?",
    desc: "Canada offers high quality of life, free healthcare, and world-class education.",
    image: "/assets/slides/slide1.png",
  },
  {
    title: "Express Entry Program",
    desc: "Fast-track immigration system for skilled workers based on CRS score.",
    image: "/assets/slides/slide2.png",
  },
  {
    title: "Eligibility Criteria",
    desc: "Age, education, work experience, and English/French proficiency are key factors.",
    image: "/assets/slides/slide3.png",
  },
  {
    title: "Step-by-Step Process",
    desc: "Create an Express Entry profile, get ITA, submit documents, and receive PR.",
    image: "/assets/slides/slide4.png",
  },
  {
    title: "How VJC Overseas Helps",
    desc: "We guide you through documentation, profile building, and interview preparation.",
    image: "/assets/slides/slide5.png",
  },
];

const CanadaVisaSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/slidebg.png')` }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 drop-shadow-lg">
        Canada PR Visa Information
      </h2>
      <p className="text-gray-800 max-w-2xl mx-auto mb-12 drop-shadow-md">
        Learn everything you need to know about Canada Permanent Residency and
        how VJC Overseas can help.
      </p>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="visa-swiper"
        >
          {canadaVisaSlides.map((slide, index) => (
            <SwiperSlide key={index} className="custom-slide">
              <div className="relative rounded-xl shadow-xl overflow-hidden w-[350px] md:w-[400px] mx-auto h-[420px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm">{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default CanadaVisaSection;

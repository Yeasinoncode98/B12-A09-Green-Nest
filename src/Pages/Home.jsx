import React, { useEffect, useState } from "react";
import PlantCard from "../Components/PlantCard";
import ExpertCard from "../Components/ExpertCard";
import { motion } from "framer-motion";

// 🌀 Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BannerImage from "../assets/banner.avif";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch(console.error);
  }, []);

  const topRated = plants
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  // Expert Json fetching from here

  const experts = [
    {
      name: "David Gomej",
      specialty: "Succulents",
      image:
        "https://i.ibb.co.com/1HXZ96c/premium-photo-1672239496290-5061cfee7ebb.jpg",
    },
    {
      name: "Rafi Ahmed",
      specialty: "Foliage Care",
      image:
        "https://i.ibb.co.com/tPQZ7Rch/istockphoto-146879255-1024x1024.jpg",
    },
    {
      name: "Jonathan Rocky",
      specialty: "Decor & Styling",
      image:
        "https://i.ibb.co.com/mV5YB1V8/photo-1519058082700-08a0b56da9b4.jpg",
    },
  ];

  return (
    <div className="space-y-16">
      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-8 items-center bg-green-50 p-10 rounded-2xl shadow-sm"
      >
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl text-center md:text-5xl font-extrabold text-green-700 leading-tight">
            Bring Green Home 🌿
          </h1>
          <p className="text-center md:text-slate-600">
            Explore indoor plants, care tips, and expert consultations to create
            a calm, oxygen-rich home.
          </p>
          <div className="flex justify-center items-center md:flex gap-3">
            <a href="#plants" className="btn btn-primary">
              Browse Plants
            </a>
            <a href="#tips" className="btn btn-outline">
              Care Tips
            </a>
          </div>
        </motion.div>

        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={BannerImage}
          className=" w-72 md:w-100 h-100 mx-auto drop-shadow-lg rounded-2xl"
          alt="hero plant"
        />
      </motion.section>

      {/* ================= TOP RATED PLANTS (SWIPER) ================= */}
      <motion.section
        id="plants"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="font-bold text-3xl mb-6 text-green-700 text-center mt-[70px]">
          🌱 Top Rated Indoor Plants
        </h2>

        <Marquee className="mt-[70px]" pauseOnHover gradient={false} speed={50}>
          <h2 className="font-bold text-3xl mb-6 text-blue-400 text-center">
            {"   "} Welcome to Green Nest — your sanctuary for sustainable
            living, vibrant plants, and eco-friendly inspiration!
          </h2>
        </Marquee>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {topRated.map((p) => (
            <SwiperSlide key={p.plantId}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PlantCard plant={p} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* ================= CARE TIPS ================= */}
      <motion.section
        id="tips"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="font-bold text-3xl mb-6 text-green-700 text-center mt-[70px]">
          🌼 Plant Care Tips
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-[80px]">
          {[
            {
              title: "Watering",
              desc: "Check soil moisture and water only when top 2 inches are dry.",
            },
            {
              title: "Light",
              desc: "Place bright-loving plants near east or west windows; avoid harsh midday sun.",
            },
            {
              title: "Fertilize",
              desc: "Use a balanced fertilizer during growing season every 4–6 weeks.",
            },
          ].map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-lg text-green-700">
                {tip.title}
              </h4>
              <p className="text-slate-600 text-sm mt-2">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= EXPERTS (SWIPER) ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="mt-[60px] font-bold text-3xl mb-6 text-green-700 text-center">
          👩‍🌾 Meet Our Green Experts
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {experts.map((ex, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="mt-[50px]"
              >
                <ExpertCard expert={ex} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* ================= PLANT OF THE WEEK ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-6 bg-green-50 rounded-2xl shadow text-center mt-[60px]"
      >
        <h3 className="font-semibold text-2xl text-green-700 mb-2">
          🌼 Plant of the Week: Monstera Deliciosa
        </h3>
        <p className="text-slate-600 text-sm">
          A trending statement plant — thrives with bright indirect light and
          moderate watering. Perfect for new plant parents!
        </p>
      </motion.section>
    </div>
  );
}

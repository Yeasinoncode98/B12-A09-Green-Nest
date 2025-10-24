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
      image:
        "https://i.ibb.co.com/1HXZ96c/premium-photo-1672239496290-5061cfee7ebb.jpg",
      specialties: [
        "Expert in Succulent propagation and arrangement",
        "Specialized in drought-resistant plant care",
        "Designs minimal indoor succulent gardens",
        "Provides long-term soil and watering advice",
      ],
    },
    {
      name: "Rafi Ahmed",
      image:
        "https://i.ibb.co.com/tPQZ7Rch/istockphoto-146879255-1024x1024.jpg",
      specialties: [
        "Foliage plant maintenance and rejuvenation",
        "Expert at pest prevention and eco care",
        "Creates indoor greenery balance and harmony",
        "Guides clients on sustainable plant growth",
      ],
    },
    {
      name: "Jonathan Rocky",
      image:
        "https://i.ibb.co.com/mV5YB1V8/photo-1519058082700-08a0b56da9b4.jpg",
      specialties: [
        "Professional plant decor & interior styling",
        "Transforms homes with natural aesthetics",
        "Advises on matching plants with lighting zones",
        "Creates modern botanical art setups",
      ],
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

        <Marquee
          className="mt-[50px] mb-7"
          pauseOnHover
          gradient={false}
          speed={50}
        >
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
        <div className="grid md:grid-cols-3 gap-8 mt-[80px]">
          {[
            {
              title: "Watering",
              icon: "💧",
              desc: "Check soil moisture and water only when top 2 inches are dry.",
              gradient: "from-blue-400 to-cyan-500",
              points: [
                "Touch test the soil first",
                "Water thoroughly until drainage",
                "Avoid overwatering to prevent root rot",
              ],
            },
            {
              title: "Light",
              icon: "☀️",
              desc: "Place bright-loving plants near east or west windows; avoid harsh midday sun.",
              gradient: "from-yellow-400 to-orange-500",
              points: [
                "Rotate plants weekly for even growth",
                "Use sheer curtains for filtered light",
                "Watch for leaf burn signs",
              ],
            },
            {
              title: "Fertilize",
              icon: "🌱",
              desc: "Use a balanced fertilizer during growing season every 4–6 weeks.",
              gradient: "from-green-400 to-emerald-500",
              points: [
                "Feed during spring & summer",
                "Dilute to half-strength first",
                "Skip fertilizing in winter months",
              ],
            },
          ].map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tip.gradient} opacity-10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300`}
              ></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tip.gradient} flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                >
                  {tip.icon}
                </div>
                <h4 className="font-bold text-xl text-green-700 text-center mb-3">
                  {tip.title}
                </h4>
                <p className="text-slate-600 text-sm text-center mb-4 leading-relaxed">
                  {tip.desc}
                </p>
                <div className="space-y-2 mt-4 pt-4 border-t border-green-100">
                  {tip.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
        className="relative p-8 bg-gradient-to-br from-green-50 via-green-100 to-green-50 rounded-3xl shadow-xl text-center mt-[60px] overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Decorative background circles */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
        <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-emerald-200 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>

        {/* Plant Info */}
        <h3 className="font-extrabold text-3xl md:text-4xl text-green-700 mb-3">
          🌼 Plant of the Week: Monstera Deliciosa
        </h3>
        <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed max-w-xl mx-auto">
          A trending statement plant — thrives with bright indirect light and
          moderate watering. Perfect for new plant parents!
        </p>

        {/* Learn More Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          href="#plants"
        >
          Learn More
        </motion.a>
      </motion.section>
    </div>
  );
}

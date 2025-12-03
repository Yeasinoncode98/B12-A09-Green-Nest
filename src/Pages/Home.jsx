import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    // FIX: Using the original fetch logic for active JSON data loading
    fetch("/plants.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPlants(data))
      .catch((error) => console.error("Failed to fetch plant data:", error));
  }, []);

  // Ensure plants array is available before attempting to sort/slice
  const topRated = plants
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  // Hero slider images
  const heroImages = [
    BannerImage,
    "https://i.postimg.cc/wvYSZbm8/pexels-arts-1187079.jpg",
    "https://i.postimg.cc/Mp8Vc7Rd/pexels-pixabay-56866.jpg",
    "https://i.postimg.cc/NMVrQmBm/pexels-pixabay-46216.jpg",
  ];

  // Flower Banner slider images
  const flowerBanners = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200",
      title: "Beautiful Blooms",
      subtitle: "Discover our stunning flower collection",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=1200",
      title: "Garden Paradise",
      subtitle: "Transform your space with vibrant flowers",
    },
    {
      id: 3,
      src: "https://i.postimg.cc/T1shXDvh/pexels-pixabay-158063.jpg",
      title: "Floral Elegance",
      subtitle: "Bring nature's beauty indoors",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200",
      title: "Fresh & Vibrant",
      subtitle: "Handpicked flowers for every occasion",
    },
  ];

  // Expert Data
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
        {/* ... Hero Content ... */}
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
            {/* Using Link assuming react-router-dom is used */}
            <Link to="/plants" className="btn btn-primary">
              Browse Plants
            </Link>
            <Link to="/about-us" className="btn btn-outline bg-green-400">
              About Us
            </Link>
          </div>
        </motion.div>

        {/* Hero Image Slider */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-72 md:w-full mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-2xl drop-shadow-lg"
          >
            {heroImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  className="w-full h-96 object-cover rounded-2xl"
                  alt={`hero plant ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.section>

      {/* ================= TOP RATED PLANTS (HIGHLIGHTED/TOP-RATED) ================= */}
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
            {"    "} Welcome to Green Nest — your sanctuary for sustainable
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

      {/* ================= FLOWER BANNER SLIDER ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8 mt-16"
      >
        <h2 className="font-bold text-3xl mb-8 text-green-700 text-center">
          🌸 Featured Flower Collection
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-3xl shadow-2xl overflow-hidden"
        >
          {flowerBanners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-[500px]">
                <img
                  src={banner.src}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-extrabold mb-3"
                  >
                    {banner.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200 mb-6"
                  >
                    {banner.subtitle}
                  </motion.p>
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-green-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-green-50 transition duration-300"
                  >
                    Explore Now
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* ================= CATEGORIES SECTION (ENHANCED - WITH GLOW/FLOWERY FEEL) ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-3xl opacity-50 -z-10"></div>

        <div className="py-12 px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-extrabold text-4xl md:text-5xl mb-4 text-green-700 text-center"
          >
            🛒 Explore Plant Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 mb-12 text-lg"
          >
            Find the perfect plants for your space and lifestyle
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Category Data with Enhanced Styling */}
            {[
              {
                name: "Low Light",
                icon: "🌑", // Changed icon to represent the light/dark requirement
                gradient: "from-green-800 via-green-700 to-green-600", // Richer green gradient
                description: "Lush greenery for darker spaces",
                shimmer: "bg-green-300",
              },
              {
                name: "Pet Safe",
                icon: "🐾",
                gradient: "from-lime-600 via-lime-500 to-lime-400", // Lighter, friendlier green
                description: "Nontoxic & safe for furry friends",
                shimmer: "bg-lime-200",
              },
              {
                name: "Air",
                icon: "🌬️", // More airy/clean icon
                gradient: "from-emerald-700 via-emerald-600 to-emerald-500", // Deep, clean emerald green
                description: "Clean & fresh air",
                shimmer: "bg-emerald-300",
              },
              {
                name: "Flowering",
                icon: "🌸", // Flower icon for 'flowery feel'
                gradient: "from-pink-500 via-red-400 to-red-500", // Floral color gradient
                description: "Vibrant blooms and Flowers",
                shimmer: "bg-red-200",
              },
            ].map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="relative group cursor-pointer"
              >
                {/* Glow effect on hover (Increased intensity) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient
                    .replace("from-", "from-white/50")
                    .replace("via-", "via-white/50")
                    .replace(
                      "to-",
                      "to-white/50"
                    )} rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                ></div>

                {/* Main card */}
                <div
                  className={`relative bg-gradient-to-br ${cat.gradient} p-8 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300
                    group-hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.8),0_0_15px_-3px_rgba(255,255,255,0.4)]
                    `}
                >
                  {/* Animated shimmer effect */}
                  <div
                    className={`absolute top-0 -left-full h-full w-1/2 ${cat.shimmer} opacity-40 transform skew-x-12 group-hover:left-full transition-all duration-1000 ease-out`}
                  ></div>

                  {/* Decorative circles */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Floating Icon Animation */}
                    <motion.div
                      className="text-6xl mb-4 transform transition-all duration-300"
                      animate={{
                        y: ["0%", "-10%", "0%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {cat.icon}
                    </motion.div>
                    <h3 className="font-extrabold text-3xl text-white mb-2 drop-shadow-lg">
                      {cat.name}
                    </h3>
                    <p className="text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cat.description}
                    </p>

                    {/* Hover arrow */}
                    <motion.div
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-white text-base font-bold">
                        Explore Now →
                      </span>
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
              desc: "Place bright-loving plants near east or west windows",
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

      {/* ================= PROMOTIONAL/OFFER SECTION (ANIMATED GREEN GLOW CARD) ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative p-12 bg-gray-900 rounded-3xl text-center shadow-2xl overflow-hidden mt-[60px]"
      >
        {/* Animated Green Glow Effect (Pulsating) */}
        <motion.div
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-green-500/20 rounded-3xl"
          style={{
            boxShadow: "0 0 100px 30px rgba(34, 197, 94, 0.9)", // Stronger neon glow
          }}
        />

        {/* Inner Discount Card Content */}
        <motion.div
          className="relative z-10 p-8 rounded-2xl bg-green-950/80 max-w-2xl mx-auto border-2 border-green-500 shadow-xl"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Title - Glowing Green Text */}
          <h3 className="font-black text-6xl md:text-7xl mb-4 tracking-tighter uppercase leading-tight">
            <span
              className="block text-amber-300"
              style={{
                textShadow:
                  "0 0 10px rgba(253, 224, 71, 0.9), 0 0 20px rgba(253, 224, 71, 0.6)",
              }}
            >
              FLASH SALE
            </span>
            <span
              className="block text-green-300 text-4xl mt-2 font-extrabold"
              style={{
                textShadow: "0 0 15px rgba(134, 239, 172, 0.7)",
              }}
            >
              20% OFF ALL ITEMS!
            </span>
          </h3>

          {/* Subtext */}
          <p className="text-gray-300 text-xl mb-8 max-w-lg mx-auto font-light italic">
            Limited time offer! Use the special code below to refresh your home
            with stunning greenery.
          </p>

          {/* Discount Code Badge - Framer Motion Lift and Green Shadow */}
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-8 py-3 mb-10 bg-white rounded-full shadow-2xl cursor-pointer"
            style={{
              boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
            }}
          >
            <p className="text-3xl font-black text-green-800 tracking-widest">
              CODE: GREEN20
            </p>
          </motion.div>

          {/* Shop Now Button - Large, Green, with Strong Hover Glow */}
          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 25px rgba(74, 222, 128, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              px-12 py-5 text-2xl font-black
              bg-green-500 text-white
              rounded-xl shadow-xl
              hover:bg-green-400 transition duration-300
              focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-4 focus:ring-offset-gray-900
            "
          >
            🌿 Shop Now & Save Big
          </motion.button>
        </motion.div>
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

      {/* ================= NEW: BLOG SECTION (Placeholder) ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-3xl mb-12 text-green-700 text-center">
          📰 Read Our Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Top 5 Mistakes New Plant Owners Make",
              image: "https://i.postimg.cc/SsqmCKVk/pexels-pixabay-68507.jpg",
              a: "https://www.classyplants.com/mistakes-new-plant-owners-should-avoid/",
            },
            {
              title: "How to Choose the Right Pot Size",
              image:
                "https://i.ibb.co/MkpHf6nF/pexels-daniyal-gh-10741-70069.jpg",
              a: "https://plantcareforbeginners.com/articles/pot-size",
            },
            {
              title: "Winterizing Your Indoor Garden",
              image:
                "https://i.postimg.cc/hvZnk1nV/pexels-mastercowley-1128797.jpg",
              a: "https://www.lawnstarter.com/blog/landscaping/how-to-winterize-a-garden/",
            },
          ].map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg text-green-700 mb-3">
                  {post.title}
                </h4>
                <a
                  href={post.a}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 font-semibold text-sm"
                >
                  Read Article →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
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
          href="/plants/plant-of-the-week" // Replaced 'a' with 'Link' style URL for consistency
        >
          Learn More
        </motion.a>
      </motion.section>

      {/* ================= NEW: NEWSLETTER SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-12 bg-green-700 rounded-2xl text-center shadow-xl mt-[60px]"
      >
        <h2 className="font-extrabold text-3xl text-white mb-3">
          Join Our Green Community! 💚
        </h2>
        <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for exclusive tips, new arrivals, and
          special discounts.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 bg-white rounded-xl border-none focus:ring-2 focus:ring-green-400 text-slate-700 w-full"
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            // w-full on mobile, md:w-40 (or your chosen fixed width) on medium screens and larger
            className="btn bg-white text-green-700 font-bold h-12 w-full md:w-40 rounded-xl shadow-md hover:bg-gray-100 transition duration-300"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.section>
    </div>
  );
}

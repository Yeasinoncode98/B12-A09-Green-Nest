import React, { useState, useEffect, useRef } from "react";
import {
  Flower2,
  ShoppingCart,
  MapPin,
  Star,
  Handshake,
  BookOpen,
  Package,
  Eye,
  User,
  Quote,
  Leaf,
} from "lucide-react";

// --- Custom Styles and Keyframes (Inline for Pure React Component) ---
const customStyles = (
  <style jsx global>{`
    /* 1. Gentle Mission Glow (Soft Green) */
    @keyframes pulse-mission-glow-green {
      0%,
      100% {
        box-shadow: 0 0 10px rgba(134, 239, 172, 0.5),
          /* Green-300 */ 0 0 20px rgba(16, 185, 129, 0.2); /* Emerald-500 */
      }
      50% {
        box-shadow: 0 0 15px rgba(134, 239, 172, 0.9),
          0 0 30px rgba(16, 185, 129, 0.5);
      }
    }

    .glow-animation-green {
      animation: pulse-mission-glow-green 4s infinite ease-in-out;
    }

    /* 2. Enhanced Card Hover Effect (Green/Pink Shadow) */
    .service-card-hover {
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .service-card-hover:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15),
        0 0 20px rgba(236, 72, 153, 0.5); /* Soft pink glow */
      border-color: #f472b6; /* Pink-400 border */
      background-color: #f0fdf4; /* Green-50 light background */
    }

    /* Star rating color */
    .star-rating-filled {
      color: #facc15; /* yellow-400 */
    }
  `}</style>
);

// --- Custom Hook for Animate On Scroll (AOS) functionality ---
const useAnimateOnScroll = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [isVisible, domRef];
};

// --- Wrapper Component to apply AOS (Now uses semantic <section> tag) ---
const AnimatedSection = ({ children, className = "" }) => {
  const [isVisible, domRef] = useAnimateOnScroll(0.15);
  return (
    <section
      ref={domRef}
      className={`transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        ${className}`}
    >
      {children}
    </section>
  );
};

// --- Main Component ---
const AboutUs = () => {
  const [coreFeaturesVisible, coreFeaturesRef] = useAnimateOnScroll(0.15);

  const coreActivities = [
    {
      icon: BookOpen,
      title: "Instant Booking",
      description:
        "Easily reserve arrangements or services for any date with immediate confirmation.",
      color: "text-rose-500",
    },
    {
      icon: Eye,
      title: "See Details & History",
      description:
        "View high-resolution photos and detailed product specifications before ordering.",
      color: "text-green-600",
    },
    {
      icon: Package,
      title: "Tracked Order Delivery",
      description:
        "Real-time updates on your flower delivery, from preparation to arrival at the door.",
      color: "text-blue-500",
    },
    {
      icon: ShoppingCart,
      title: "Effortless Ordering",
      description:
        "A smooth, intuitive purchasing experience tailored for quick and thoughtful flower gifting.",
      color: "text-yellow-600",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Jessica R.",
      text: "The 'Green Nest' bouquet was stunning and lasted forever! The freshness is unmatched.",
      stars: 5,
    },
    {
      id: 2,
      name: "David M.",
      text: "The booking system is incredibly easy to use. Everything was handled professionally and on time.",
      stars: 5,
    },
    {
      id: 3,
      name: "Chloe S.",
      text: "Reliable tracking and beautiful presentation. They truly bring nature's calm to my home.",
      stars: 4,
    },
  ];

  const StarRating = ({ count }) => {
    return (
      // FIX: Left alignment for stars
      <div className="flex justify-start space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < count ? "star-rating-filled" : "text-gray-300"
            }`}
            fill={i < count ? "#facc15" : "none"}
            strokeWidth={1.5}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {customStyles}

      {/* Section 1: Green Nest Header/Mission (Standardized py-24 padding and max-w-7xl) */}
      <section className="bg-green-50 text-green-950 py-24 px-4 sm:px-8 font-['Inter'] flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <Flower2 className="w-16 h-16 mx-auto text-pink-500 animate-pulse" />
          <h1 className="text-6xl font-black tracking-tight sm:text-7xl text-green-900">
            Green Nest: Nature Delivered
          </h1>
          {/* Internal content focus div uses a smaller max-width for aesthetic centering */}
          {/* Already uses rounded-3xl */}
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white border-2 border-green-300 shadow-xl glow-animation-green">
            <p className="text-2xl font-light text-gray-700">
              We are dedicated to sourcing the most **vibrant, ethically-grown
              flowers** and transforming them into breathtaking arrangements.
              Green Nest is where quality meets conscious commerce, bringing the
              serenity of a garden directly to you.
            </p>
          </div>
        </div>
      </section>

      {/* Separator / Divider Section */}
      <section className="bg-white px-4 sm:px-8 py-8">
        <div className="max-w-7xl mx-auto border-t border-green-200" />
      </section>

      {/* Section 2: Core Activities (Standardized max-w-7xl) */}
      <section
        className="bg-white text-green-950 py-24 px-4 sm:px-8"
        ref={coreFeaturesRef}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-green-800">
            Core Activities for a Seamless Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreActivities.map((feature, index) => (
              <div
                key={index}
                // Updated rounded-xl to rounded-3xl for consistent large radius
                className={`service-card-hover bg-green-50 relative overflow-hidden p-8 rounded-3xl border border-green-300 shadow-md
                  flex flex-col justify-start min-h-80 text-center
                  ${
                    coreFeaturesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`p-4 rounded-full bg-white mb-6 border border-green-200 shadow-inner`}
                  >
                    <feature.icon className={`w-12 h-12 ${feature.color}`} />
                  </div>

                  <h3 className="text-2xl font-extrabold text-green-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Partnership Section (Standardized py-24 padding and max-w-7xl) */}
      <AnimatedSection className="bg-green-100 text-green-950 py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Handshake className="w-16 h-16 text-green-700 mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-green-900 mb-4">
            Committed to Partnerships
          </h2>
          {/* Using a smaller max-w for the text block for readability */}
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            We proudly collaborate with **sustainable farms and artisan
            vendors** globally to ensure our supply chain is both ethical and
            high-quality. This commitment reflects in every bloom we deliver.
          </p>

          {/* Mock Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <Leaf className="w-10 h-10 text-green-600" />
            <MapPin className="w-10 h-10 text-rose-500" />
            <Flower2 className="w-10 h-10 text-pink-500" />
            <Star className="w-10 h-10 text-yellow-600" />
          </div>
        </div>
      </AnimatedSection>

      {/* Section 4: Review Cards (Standardized max-w-7xl) */}
      <section className="bg-white text-green-950 py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-green-800">
            Customer Love: Our Review Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <AnimatedSection
                key={review.id}
                // Updated rounded-xl to rounded-3xl for consistent large radius
                className="bg-green-50 p-8 rounded-3xl shadow-lg border border-green-200 space-y-4 text-left"
              >
                <Quote className="w-8 h-8 text-green-600" />
                <p className="text-lg italic text-gray-700">"{review.text}"</p>
                <StarRating count={review.stars} />
                <p className="font-semibold text-green-900 pt-2">
                  — {review.name}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Dedicated Seller CTA (Standardized py-24 padding) */}
      <AnimatedSection className="bg-green-800 text-white py-24 px-4 sm:px-8">
        {/* The CTA has a smaller max-width (4xl) for visual emphasis, which is correct for a centered element. */}
        <div className="max-w-4xl mx-auto text-center">
          <User className="w-16 h-16 text-green-300 mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl font-bold mb-4">
            Your Dedicated Flower Seller
          </h2>
          <p className="text-xl text-green-200 mb-10">
            Every customer is paired with a dedicated floral expert to ensure
            personalized service, from custom design requests to urgent delivery
            needs. We're here to help you bloom.
          </p>
          <button
            className="px-10 py-4 text-xl font-bold text-green-900 bg-green-300 rounded-full shadow-lg shadow-green-500/50
                       hover:bg-green-200 transform hover:scale-105 transition-all duration-300 ring-4 ring-green-400/50"
            onClick={() => console.log("CTA clicked: Contact Specialist")}
          >
            Contact a Floral Specialist Today
          </button>
        </div>
      </AnimatedSection>
    </>
  );
};

export default AboutUs;

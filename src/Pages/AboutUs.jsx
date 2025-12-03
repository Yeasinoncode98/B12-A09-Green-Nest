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
  Sparkles,
  Heart,
} from "lucide-react";

// --- Custom Styles and Keyframes ---
const customStyles = (
  <style jsx global>{`
    @keyframes pulse-mission-glow-green {
      0%,
      100% {
        box-shadow: 0 0 20px rgba(134, 239, 172, 0.6),
          0 0 40px rgba(16, 185, 129, 0.3);
      }
      50% {
        box-shadow: 0 0 30px rgba(134, 239, 172, 1),
          0 0 60px rgba(16, 185, 129, 0.6);
      }
    }

    .glow-animation-green {
      animation: pulse-mission-glow-green 4s infinite ease-in-out;
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .float-animation {
      animation: float 6s ease-in-out infinite;
    }

    @keyframes gradient-shift {
      0%,
      100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    .gradient-animate {
      background-size: 200% 200%;
      animation: gradient-shift 8s ease infinite;
    }

    .service-card-hover {
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .service-card-hover:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
        0 0 30px rgba(236, 72, 153, 0.4);
    }

    .star-rating-filled {
      color: #facc15;
    }

    .review-card {
      transition: all 0.4s ease;
    }

    .review-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.3);
    }
  `}</style>
);

// --- Custom Hook for Animate On Scroll ---
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

// --- Animated Section Wrapper ---
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
      bgGradient: "from-rose-50 to-pink-50",
    },
    {
      icon: Eye,
      title: "See Details",
      description:
        "View high-resolution photos and detailed specifications before ordering.",
      color: "text-green-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Package,
      title: "Tracked Delivery",
      description:
        "Real-time updates from preparation to arrival at your door.",
      color: "text-blue-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: ShoppingCart,
      title: "Easy Ordering",
      description:
        "A smooth, intuitive purchasing experience for thoughtful gifting.",
      color: "text-yellow-600",
      bgGradient: "from-yellow-50 to-amber-50",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Jessica R.",
      text: "The 'Green Nest' bouquet was stunning and lasted forever! The freshness is unmatched.",
      stars: 5,
      gradient: "from-pink-50 to-rose-50",
    },
    {
      id: 2,
      name: "David M.",
      text: "The booking system is incredibly easy to use. Everything was handled professionally.",
      stars: 5,
      gradient: "from-green-50 to-emerald-50",
    },
    {
      id: 3,
      name: "Chloe S.",
      text: "Reliable tracking and beautiful presentation. They truly bring nature's calm to my home.",
      stars: 4,
      gradient: "from-blue-50 to-cyan-50",
    },
  ];

  const StarRating = ({ count }) => {
    return (
      <div className="flex justify-start space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
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

      {/* Hero Section - Reduced size */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 gradient-animate text-green-950 py-16 px-4 sm:px-8 font-['Inter'] overflow-hidden rounded-3xl mx-4 my-6">
        {/* Decorative floating elements */}
        <div className="absolute top-6 left-6 opacity-20">
          <Flower2 className="w-16 h-16 text-pink-400 float-animation" />
        </div>
        <div
          className="absolute bottom-6 right-6 opacity-20"
          style={{ animationDelay: "2s" }}
        >
          <Leaf className="w-20 h-20 text-green-400 float-animation" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block">
            <Flower2 className="w-14 h-14 mx-auto text-pink-500 animate-pulse drop-shadow-lg" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-green-800">
            Green Nest
          </h1>

          <p className="text-xl md:text-2xl font-light text-green-800">
            Nature Delivered with Love
          </p>

          <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-green-300 shadow-xl glow-animation-green">
            <Sparkles className="w-8 h-8 mx-auto mb-3 text-pink-500" />
            <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
              We source the most{" "}
              <span className="font-semibold text-green-700">
                vibrant, ethically-grown flowers
              </span>{" "}
              and transform them into breathtaking arrangements. Green Nest is
              where quality meets conscious commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <section className="bg-white px-4 sm:px-8 py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center space-x-4">
          <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent flex-1" />
          <Heart className="w-5 h-5 text-pink-400" />
          <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent flex-1" />
        </div>
      </section>

      {/* Core Activities Section - Reduced size */}
      <section
        className="bg-gradient-to-b from-white to-green-50/50 text-green-950 py-12 px-4 sm:px-8 rounded-3xl mx-4 my-6"
        ref={coreFeaturesRef}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600">
              Core Activities
            </h2>
            <p className="text-base text-gray-600">
              Seamless experience from browsing to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreActivities.map((feature, index) => (
              <div
                key={index}
                className={`service-card-hover bg-gradient-to-br ${
                  feature.bgGradient
                } relative overflow-hidden p-6 rounded-2xl border-2 border-white shadow-lg
                  flex flex-col justify-start text-center
                  ${
                    coreFeaturesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-3 rounded-xl bg-white mb-4 shadow-lg ring-2 ring-white/50">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>

                  <h3 className="text-lg font-extrabold text-green-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section - Reduced size with rounded outer edges */}
      <AnimatedSection className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 gradient-animate text-green-950 py-12 px-4 sm:px-8 rounded-3xl mx-4 my-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-2xl border-2 border-green-300 shadow-xl">
            <div className="text-center space-y-4">
              <div className="inline-block p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
                <Handshake className="w-12 h-12 text-green-700 animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600">
                Committed to Partnerships
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                We collaborate with{" "}
                <span className="font-semibold text-green-700">
                  sustainable farms and artisan vendors
                </span>{" "}
                globally to ensure our supply chain is both ethical and
                high-quality.
              </p>
            </div>

            {/* Enhanced Partner Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-green-200">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <div className="bg-gradient-to-br from-rose-100 to-pink-50 p-6 rounded-xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-rose-200">
                <MapPin className="w-10 h-10 text-rose-500" />
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-50 p-6 rounded-xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-pink-200">
                <Flower2 className="w-10 h-10 text-pink-500" />
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-amber-50 p-6 rounded-xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-yellow-200">
                <Star className="w-10 h-10 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Review Cards Section - Reduced size with rounded outer edges */}
      <section className="bg-white text-green-950 py-12 px-4 sm:px-8 rounded-3xl mx-4 my-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600">
              Customer Love
            </h2>
            <p className="text-base text-gray-600">
              Hear what our happy customers say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <AnimatedSection
                key={review.id}
                className={`review-card bg-gradient-to-br ${review.gradient} p-6 rounded-2xl shadow-lg border-2 border-white space-y-4 text-left`}
              >
                <div className="flex items-start justify-between">
                  <Quote className="w-7 h-7 text-green-600 opacity-60" />
                  <StarRating count={review.stars} />
                </div>

                <p className="text-sm italic text-gray-800 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="pt-3 border-t border-green-200">
                  <p className="font-bold text-green-900 text-base">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-600">Verified Customer</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Seller CTA - Reduced size with rounded outer edges */}
      <AnimatedSection className="relative bg-gradient-to-br from-green-700 via-emerald-700 to-green-800 gradient-animate text-white py-12 px-4 sm:px-8 overflow-hidden rounded-3xl mx-4 my-6">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10">
            <Flower2 className="w-20 h-20 text-white float-animation" />
          </div>
          <div
            className="absolute bottom-10 right-10"
            style={{ animationDelay: "3s" }}
          >
            <Sparkles className="w-24 h-24 text-white float-animation" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl border-2 border-white/30 shadow-xl text-center space-y-6">
            <div className="inline-block p-4 bg-white/20 rounded-xl backdrop-blur-sm">
              <User className="w-12 h-12 text-green-200 animate-pulse" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Your Dedicated Flower Seller
            </h2>

            <p className="text-base md:text-lg text-green-100 leading-relaxed">
              Every customer is paired with a dedicated floral expert to ensure
              personalized service, from custom design requests to urgent
              delivery needs.
            </p>

            <div className="pt-2">
              <button
                className="group px-8 py-3 text-base font-bold text-green-900 bg-white rounded-full shadow-xl
                           hover:bg-green-50 transform hover:scale-105 transition-all duration-300 
                           ring-4 ring-white/30 hover:ring-white/50"
                onClick={() => console.log("CTA clicked: Contact Specialist")}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Contact a Floral Specialist</span>
                  <Heart className="w-5 h-5 group-hover:fill-pink-500 group-hover:text-pink-500 transition-all" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer accent */}
      <section className="bg-gradient-to-b from-green-800 to-green-900 py-8 px-4 sm:px-8 rounded-3xl mx-4 my-6">
        <div className="max-w-5xl mx-auto text-center">
          <Flower2 className="w-10 h-10 mx-auto text-pink-400 opacity-60" />
          <p className="text-green-200 mt-3 text-sm">
            Green Nest • Where Nature Meets Nurture
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

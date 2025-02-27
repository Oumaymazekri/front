"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductList = () => {
  const products = [
    {
      id: "1",
      images: ["/images/phone_case.jpg"],
      name: "Spigen Ultra Hybrid Case",
      price: "$19.99",
      category: "phone-cases",
      rating: 4.5,
      description: "Premium protection with sleek design. Military-grade drop protection while maintaining a slim profile."
    },
    {
      id: "2",
      images: ["/images/wireless_charger.jpg"],
      name: "Samsung 15W Wireless Charger",
      price: "$49.99",
      category: "wireless-chargers",
      rating: 5,
      description: "Fast 15W Qi charging with smart temperature control. Compatible with all Qi-enabled devices."
    },
    {
      id: "3",
      images: ["/images/wireless_headphone.jpg"],
      name: "Sony WH-1000XM4",
      price: "$79.99",
      category: "wireless-headphones",
      rating: 4.8,
      description: "Immersive sound with active noise cancellation. 30-hour battery life with quick charge."
    },
    {
      id: "4",
      images: ["/images/screen_protector.jpg"],
      name: "Belkin Screen Guard Pro",
      price: "$9.99",
      category: "screen-protectors",
      rating: 4.3,
      description: "9H hardness tempered glass with oleophobic coating. Crystal clear clarity with bubble-free installation."
    },
    {
      id: "5",
      images: ["/images/clean_phone_case.jpg"],
      name: "Tech21 Pure Clear Case",
      price: "$24.99",
      category: "clear-phone-cases",
      rating: 4.7,
      description: "Ultra-transparent case that showcases your device. Anti-yellowing technology with shock absorption."
    },
    {
      id: "6",
      images: ["/images/fast_charger.jpg"],
      name: "Anker Nano II 65W",
      price: "$29.99",
      category: "fast-chargers",
      rating: 4.9,
      description: "65W GaN charger with intelligent power distribution. Charges multiple devices simultaneously."
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`star-${i}`}
          className="w-5 h-5 text-yellow-400 transition-transform hover:scale-110"
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt
          key="half-star"
          className="w-5 h-5 text-yellow-400 transition-transform hover:scale-110"
        />
      );
    }

    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`empty-star-${i}`}
          className="w-5 h-5 text-yellow-400 transition-transform hover:scale-110"
        />
      );
    }

    return (
      <div className="flex items-center gap-1">
        <div className="flex gap-0.5">{stars}</div>
        <span className="ml-2 text-sm font-medium text-gray-600">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          {/* Image and product link */}
          <Link href={`/product/${product.id}`}>
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Product info */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <Link href={`/product/${product.id}`}>
                <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
              </Link>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                New
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed min-h-[3rem] mb-4">
              {product.description}
            </p>

            <div className="space-y-4">
              {/* Rating */}
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-gray-900">
                  {product.price}
                </span>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
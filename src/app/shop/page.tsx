"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaShoppingCart, FaSearch, FaHeart, FaStar } from "react-icons/fa"

const categories = ["Tous", "Phones", "Audio", "Cameras", "Power", "Tablets"]

const products = [
  // Phones Category
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999.99,
    category: "Phones",
    image: "/images/iphone15pro.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 899.99,
    category: "Phones",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=500&auto=format&fit=crop",
    rating: 4.7
  },
  {
    id: 3,
    name: "Google Pixel 8",
    price: 799.99,
    category: "Phones",
    image: "/images/googlepixel9.jpg",
    rating: 4.6
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 749.99,
    category: "Phones",
    image: "/images/oneplus12.jpg",
    rating: 4.5
  },

  // Audio Category
  {
    id: 5,
    name: "AirPods Pro 2",
    price: 249.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=500&auto=format&fit=crop",
    rating: 4.8
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    price: 399.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop",
    rating: 4.9
  },
  {
    id: 7,
    name: "Galaxy Buds Pro",
    price: 199.99,
    category: "Audio",
    image: "/images/budspro.jpg",
    rating: 4.6
  },
  {
    id: 8,
    name: "Bose QuietComfort",
    price: 329.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=500&auto=format&fit=crop",
    rating: 4.7
  },

  // Cameras Category
  {
    id: 9,
    name: "Sony A7 IV",
    price: 2499.99,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
    rating: 4.9
  },
  {
    id: 10,
    name: "Canon R6 Mark II",
    price: 2299.99,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=500&auto=format&fit=crop",
    rating: 4.8
  },
  {
    id: 11,
    name: "Fujifilm X-T5",
    price: 1699.99,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=500&auto=format&fit=crop",
    rating: 4.7
  },
  {
    id: 12,
    name: "Nikon Z6 II",
    price: 1999.99,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1586253634026-8cb574908d1e?q=80&w=500&auto=format&fit=crop",
    rating: 4.6
  },

  // Power Category
  {
    id: 13,
    name: "100W GaN Charger",
    price: 79.99,
    category: "Power",
    image: "/images/gan_charger.jpg",
    rating: 4.5
  },
  {
    id: 14,
    name: "20000mAh Power Bank",
    price: 49.99,
    category: "Power",
    image: "/images/200powerbank.jpg",
    rating: 4.6
  },
  {
    id: 15,
    name: "Wireless Charging Pad",
    price: 39.99,
    category: "Power",
    image: "/images/chargingpad.jpg",
    rating: 4.4
  },
  {
    id: 16,
    name: "MagSafe Battery Pack",
    price: 99.99,
    category: "Power",
    image: "/images/batterypack.jpg",
    rating: 4.3
  },

  // Tablets Category
  {
    id: 17,
    name: "iPad Pro 12.9",
    price: 1099.99,
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500&auto=format&fit=crop",
    rating: 4.9
  },
  {
    id: 18,
    name: "Galaxy Tab S9 Ultra",
    price: 999.99,
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=500&auto=format&fit=crop",
    rating: 4.7
  },
  {
    id: 19,
    name: "Surface Pro 9",
    price: 1199.99,
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=500&auto=format&fit=crop",
    rating: 4.6
  },
  {
    id: 20,
    name: "Xiaomi Pad 6 Pro",
    price: 399.99,
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?q=80&w=500&auto=format&fit=crop",
    rating: 4.5
  }
]

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "Tous" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Categories */}
        <nav className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 500px) 30vw, (max-width: 1000px) 25vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                      <FaHeart className="w-5 h-5 text-pink-500" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                        {product.price.toFixed(2)}€
                      </span>
                      <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ShopPage

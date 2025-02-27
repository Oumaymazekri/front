"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaMinus, FaPlus, FaTrashAlt, FaShoppingCart, FaArrowLeft, FaCreditCard, FaLock } from "react-icons/fa"

const Panier = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      images: ["/images/pii6.jpg"],
      nom: "SKYLMW Compatible with iPhone 16 Case",
      prix: 29.99,
      quantite: 1,
    },
    {
      id: 2,
      images: ["/images/wireless_charger.jpg"],
      nom: "Wireless Earbuds",
      prix: 79.99,
      quantite: 1,
    },
    {
      id: 3,
      images: ["/images/wireless_headphone.jpg"],
      nom: "Smart Watch",
      prix: 149.99,
      quantite: 1,
    },
    {
      id: 4,
      images: ["/images/piii5.jpg"],
      nom: "Bluetooth Speaker",
      prix: 59.99,
      quantite: 1,
    },
  ])

  const [isCartEmpty, setIsCartEmpty] = useState(false)

  useEffect(() => {
    setIsCartEmpty(items.length === 0)
  }, [items])

  const handleQuantiteChange = (id, nouvelleQuantite) => {
    if (nouvelleQuantite < 1) return
    const nouveauxItems = items.map((item) => (item.id === id ? { ...item, quantite: nouvelleQuantite } : item))
    setItems(nouveauxItems)
  }

  const handleSupprimer = (id) => {
    const nouveauxItems = items.filter((item) => item.id !== id)
    setItems(nouveauxItems)
  }

  const calculTotal = () => {
    return items.reduce((total, item) => total + item.prix * item.quantite, 0).toFixed(2)
  }

  const calculTotalArticles = () => {
    return items.reduce((total, item) => total + item.quantite, 0)
  }

  return (
    <div className="panier-container">
      <div className="panier">
        <h2 className="panier-title">
          <FaShoppingCart className="cart-icon" /> Votre Panier
          
        </h2>
        <AnimatePresence>
          {isCartEmpty ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="empty-cart"
            >
              <Image src="/empty-cart.svg" alt="Panier vide" width={200} height={200} />
              <p>Votre panier est vide</p>
              <button className="continuer-btn">
                <FaArrowLeft /> Continuer vos achats
              </button>
            </motion.div>
          ) : (
            <>
              <div className="produits-grid">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    className="produit"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="produit-image">
                      <Image
                        src={item.images[0] || "/placeholder.svg"}
                        alt={item.nom}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="produit-info">
                      <h3>{item.nom}</h3>
                      <p className="prix">{item.prix.toFixed(2)}€</p>
                      <div className="quantite-controls">
                        <button onClick={() => handleQuantiteChange(item.id, item.quantite - 1)}>
                          <FaMinus />
                        </button>
                        <span>{item.quantite}</span>
                        <button onClick={() => handleQuantiteChange(item.id, item.quantite + 1)}>
                          <FaPlus />
                        </button>
                      </div>
                      <p className="sous-total">Total: {(item.prix * item.quantite).toFixed(2)}€</p>
                      <button className="supprimer-btn" onClick={() => handleSupprimer(item.id)}>
                        <FaTrashAlt /> Supprimer
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="panier-resume">
                <div className="resume-details">
                  <p>
                    Total articles : <span>{calculTotalArticles()}</span>
                  </p>
                  <p>
                    Sous-total : <span>{calculTotal()}€</span>
                  </p>
                  <p>
                    Livraison : <span>Gratuite</span>
                  </p>
                  <p className="total-price">
                    Total : <span>{calculTotal()}€</span>
                  </p>
                </div>
                <button className="payer-btn">
                  <FaCreditCard /> Procéder au paiement
                </button>
                <p className="securite">
                  <FaLock /> Paiement 100% sécurisé
                </p>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .panier-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 40px 20px;
        }

        .panier {
          width: 100%;
          max-width: 1200px;
          background-color: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .panier-title {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
          padding: 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cart-icon {
          margin-right: 15px;
          font-size: 32px;
        }

        .produits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        .produit {
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .produit:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .produit-image {
          position: relative;
          width: 100%;
          padding-top: 100%; /* 1:1 Aspect Ratio */
        }

        .produit-info {
          padding: 20px;
        }

        .produit-info h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 10px 0;
        }

        .prix {
          font-size: 18px;
          font-weight: 700;
          color: #3498db;
        }

        .quantite-controls {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }

        .quantite-controls button {
          background-color: #f1f3f5;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quantite-controls button:hover {
          background-color: #e9ecef;
        }

        .quantite-controls span {
          margin: 0 15px;
          font-weight: 600;
        }

        .sous-total {
          font-size: 16px;
          font-weight: 700;
          color: #2c3e50;
          margin-top: 10px;
        }

        .supprimer-btn {
          background-color: #ff6b6b;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .supprimer-btn:hover {
          background-color: #ff5252;
        }

        .supprimer-btn svg {
          margin-right: 5px;
        }

        .panier-resume {
          background-color: #f8f9fa;
          padding: 30px;
          border-top: 1px solid #e9ecef;
        }

        .resume-details p {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 16px;
          color: #4a5568;
        }

        .resume-details .total-price {
          font-size: 24px;
          font-weight: 700;
          color: #2c3e50;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid #e9ecef;
        }

        .payer-btn {
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 15px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .payer-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }

        .payer-btn svg {
          margin-right: 10px;
        }

        .securite {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #718096;
          font-size: 14px;
          margin-top: 15px;
        }

        .securite svg {
          margin-right: 5px;
        }

        .empty-cart {
          text-align: center;
          padding: 40px;
        }

        .empty-cart p {
          font-size: 20px;
          color: #718096;
          margin: 20px 0;
        }

        .continuer-btn {
          background-color: #4a5568;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .continuer-btn:hover {
          background-color: #2d3748;
        }

        .continuer-btn svg {
          margin-right: 10px;
        }

        @media (max-width: 768px) {
          .produits-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
        }
      `}</style>
    </div>
  )
}

export default Panier


"use client"
import { useState } from "react";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState("images/pii6.jpg");

  const images = [
    "images/image.jpg", // Assurez-vous d'avoir ces images dans le dossier `public`
    "images/image1.jpg",
    "images/image2.jpg",
    "images/pii6.jpg",
  ];

  const handleImageHover = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }

        .product-container {
          display: flex;
          flex-direction: row;
          gap: 20px;
          max-width: 1200px;
          margin: 50px auto;
          padding: 20px;
          background: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .image-gallery {
          flex: 1;
        }

        .main-image img {
          width: 100%;
          border-radius: 10px;
        }

        .thumbnails {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .thumbnails img {
          width: 60px;
          height: 60px;
          border-radius: 5px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: border 0.3s ease;
        }

        .thumbnails img:hover {
          border: 2px solid #d62828;
        }

        .product-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-details h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .product-details p {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .right-column {
          flex: 0.4;
          background: #f1f1f1;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .price-box {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .price {
          font-size: 24px;
          font-weight: bold;
          color: #d62828;
        }

        .stock-info {
          margin-bottom: 20px;
        }

        .stock-info span {
          font-size: 16px;
          color: #333;
        }

        .buy-button,
        .add-to-cart-button {
          padding: 10px 20px;
          background: linear-gradient(45deg,rgb(114, 165, 220),rgb(214, 123, 185));
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
          font-size: 18px;
          transition: background 0.3s ease;
        }

        .buy-button:hover,
        .add-to-cart-button:hover {
          background: linear-gradient(45deg, #0056b3, #008ecf);
        }
      `}</style>

      <div className="product-container">
        {/* Galerie d'images */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={selectedImage} alt="Produit principal" />
          </div>
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniature ${index + 1}`}
                onMouseOver={() => handleImageHover(img)}
              />
            ))}
          </div>
        </div>

        {/* Détails du produit */}
        <div className="product-details">
          <h1>Coque Compatible iPhone 16</h1>
          <p>
            Taille : <strong>6.1 pouces</strong>
          </p>
          <p>
            Marque : <strong>Apple</strong>
          </p>
          <p>
            Couleur : <span>Rouge vin</span>
          </p>
          <p>
            Description : Coque militaire avec support magnétique O-Ring,
            compatible avec MagSafe.
          </p>
        </div>

        {/* Rectangle avec prix, stock et boutons */}
        <div className="right-column">
          <div className="price-box">
            <span className="price">29,99 $</span>
          </div>
          <div className="stock-info">
            <span>En stock : 50</span>
          </div>
          <button className="buy-button">Acheter maintenant</button>
          <button className="add-to-cart-button">Ajouter au panier</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

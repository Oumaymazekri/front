 "use client"
 import Image from 'next/image';

export default function PhoneCases() {
  const products = [
    {
      id: 1,
      name: 'Speck Clear iPhone 16 Case',
      description: 'Slim Phone Case iPhone 16 - iPhone 16 Phone Case - MagSafe - GemShell - Crystal Clear',
      price: '$24.94',
      oldPrice: '$39.95',
      delivery: 'Thu, Jan 23',
      images: ["/images/screen_protector.jpg",],
      businessType: 'Small Business',
    },
    {
      id: 2,
      name: 'BaHaHouses for Samsung Galaxy S25 Ultra Case',
      description: 'Shockproof/DropProof Military Grade Protective Cover for Galaxy S25 Ultra',
      price: '$14.99',
      oldPrice: null,
      discount: 'Save 20% with coupon',
      delivery: 'Thu, Jan 23',
      images: ["/images/screen_protector.jpg",],
      businessType: 'Ships to Tunisia',
    },
    {
      id: 2,
      name: 'BaHaHouses for Samsung Galaxy S25 Ultra Case',
      description: 'Shockproof/DropProof Military Grade Protective Cover for Galaxy S25 Ultra',
      price: '$14.99',
      oldPrice: null,
      discount: 'Save 20% with coupon',
      delivery: 'Thu, Jan 23',
      images: ["/images/screen_protector.jpg",],
      businessType: 'Ships to Tunisia',
    },
    {
      id: 2,
      name: 'BaHaHouses for Samsung Galaxy S25 Ultra Case',
      description: 'Shockproof/DropProof Military Grade Protective Cover for Galaxy S25 Ultra',
      price: '$14.99',
      oldPrice: null,
      discount: 'Save 20% with coupon',
      delivery: 'Thu, Jan 23',
      images: ["/images/screen_protector.jpg",],
      businessType: 'Ships to Tunisia',
    },
    {
      id: 2,
      name: 'BaHaHouses for Samsung Galaxy S25 Ultra Case',
      description: 'Shockproof/DropProof Military Grade Protective Cover for Galaxy S25 Ultra',
      price: '$14.99',
      oldPrice: null,
      discount: 'Save 20% with coupon',
      delivery: 'Thu, Jan 23',
      images: ["/images/screen_protector.jpg",],
      businessType: 'Ships to Tunisia',
    },
    {
      id: 2,
      name: 'BaHaHouses for Samsung Galaxy S25 Ultra Case',
      description: 'Shockproof/DropProof Military Grade Protective Cover for Galaxy S25 Ultra',
      price: '$14.99',
      oldPrice: null,
      discount: 'Save 20% with coupon',
      delivery: 'Thu, Jan 23',
      images: ["/images/screen_protector.jpg",],
      businessType: 'Ships to Tunisia',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Results</h1>
      <p style={styles.subtitle}>Check each product page for other buying options.</p>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            
            <Image
              src={product.images[0]}
              alt={product.name}
              width={200}
              height={200}
             
            />
            <div style={styles.details}>
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.description}>{product.description}</p>
              <p style={styles.price}>
                <span style={styles.currentPrice}>{product.price}</span>{' '}
                {product.oldPrice && (
                  <span style={styles.oldPrice}>{product.oldPrice}</span>
                )}
              </p>
              {product.discount && <p style={styles.discount}>{product.discount}</p>}
              <p style={styles.delivery}>Delivery: {product.delivery}</p>
              <p style={styles.businessType}>{product.businessType}</p>
              <button style={styles.addToCart}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    color: 'gray',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: 'white',
  },
  productImage: {
    borderRadius: '8px',
    objectFit: 'cover',
  },
  details: {
    marginTop: '10px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    color: 'gray',
    marginBottom: '10px',
  },
  price: {
    marginBottom: '10px',
  },
  currentPrice: {
    fontWeight: 'bold',
    color: 'green',
  },
  oldPrice: {
    textDecoration: 'line-through',
    color: 'red',
    marginLeft: '10px',
  },
  discount: {
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  delivery: {
    fontSize: '14px',
    color: 'gray',
    marginBottom: '10px',
  },
  businessType: {
    fontSize: '14px',
    color: 'gray',
    marginBottom: '10px',
  },
  addToCart: {
    backgroundColor: '#ffd814',
    border: '1px solid #f0c14b',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
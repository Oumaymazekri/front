// components/CartModal.js
import { useState } from "react";
import Image from "next/image";

const CartModal = () => {
    // Exemple de tableau d'articles dans le panier
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Item 1", price: 20, imageUrl: "/item1.png", quantity: 1 },
        { id: 2, name: "Item 2", price: 30, imageUrl: "/item2.png", quantity: 2 },
    ]);

    // Calculer le total du panier
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="bg-white p-6 rounded-md w-96 shadow-lg relative">
            {/* Titre du modal */}
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            
            {/* Bouton de fermeture */}
            <button className="absolute top-4 right-4 text-xl text-gray-500" onClick={() => setCartItems([])}>
                <span className="font-bold">&times;</span>
            </button>

            {/* Vérification si le panier est vide */}
            {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                    <Image src="/empty-cart.png" alt="Empty Cart" width={100} height={100} />
                    <p className="mt-4">Your cart is empty.</p>
                </div>
            ) : (
                <div>
                    {/* Afficher les éléments du panier */}
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                <Image src={item.imageUrl} alt={item.name} width={50} height={50} className="rounded" />
                                <div className="flex-1">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-semibold">${item.price * item.quantity}</p>
                            </div>
                        ))}
                    </div>

                    {/* Total du panier */}
                    <div className="mt-6 flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${total}</span>
                    </div>

                    {/* Boutons d'action */}
                    <div className="mt-6 space-x-4 flex justify-center">
                        <button className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">Checkout</button>
                        <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100">Continue Shopping</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartModal;

import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({}); // Initialize as object

    // fetch All Products
    const fetchProducts = async () => {
        setProducts(dummyProducts);
    };

    // Add Product to Cart (fixed function name)
    const addToCart = (itemID) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            newCart[itemID] = (newCart[itemID] || 0) + 1;
            return newCart;
        });
        toast.success("Added to Cart");
    };

    // Remove Product from Cart
    const removeFromCart = (itemID) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[itemID]) {
                newCart[itemID] -= 1;
                if (newCart[itemID] === 0) {
                    delete newCart[itemID];
                }
            }
            return newCart;
        });
        toast.success("Removed from Cart");
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        showUserLogin,
        setShowUserLogin,
        setIsSeller,
        products,
        currency,
        addToCart, // Fixed function name
        removeFromCart,
        cartItems
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppContextProvider");
    }
    return context;
};
// Inside your Menu.js file

import React, { useEffect, useState } from "react";
import MenuData from "./MenuData";
import Header from "../../components/Header/Header";
import './Menu.css';
import '../..//assets/styles/main.css';


function Menu() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = MenuData.getAllDishes();
            setProducts(productsData);
        };

        fetchData();
    }, []);

    const Product = ({ product, inCart }) => (
        <article className="product">
            <div className="img-container">
                <img src={product.image} alt="product" className="product-img" />
                <button
                    className="bag-btn"
                    data-id={product.id}
                    onClick={() => {
                        addToCart(product.id);
                        setIsCartOpen(false); // Open the cart when a product is added
                    }}
                    disabled={inCart}
                >
                    {inCart ? "In Cart" : "Add to Cart"}
                </button>
            </div>
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
        </article>
    );


    const CartItem = ({ item, increaseQty, decreaseQty, removeItem }) => (
        <div className="cart-item">
            <img src={item.image} alt="product" />
            <div>
                <h4>{item.name}</h4>
                <h5>${item.price}</h5>
                <span className="remove-item" onClick={() => removeItem(item.id)}>
                    Remove
                </span>
            </div>
            <div>
                <i
                    className="fas fa-chevron-up"
                    onClick={() => increaseQty(item.id)}
                    style={{
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        margin: '0 5px',
                        color: '#000' /* Set your desired color */,
                    }}
                ></i>
                <p className="item-amount">{item.amount}</p>
                <i
                    className="fas fa-chevron-down"
                    onClick={() => decreaseQty(item.id)}
                    style={{
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        margin: '0 5px',
                        color: '#333' /* Set your desired color */,
                    }}
                ></i>
            </div>
        </div>
    );


    const addToCart = (productId) => {
        const productToAdd = products.find((product) => product.id === productId);
        if (productToAdd) {
            const existingCartItem = cart.find((item) => item.id === productId);

            if (existingCartItem) {
                const updatedCart = cart.map((item) =>
                    item.id === productId ? { ...item, amount: item.amount + 1 } : item
                );
                setCart(updatedCart);
            } else {
                const updatedCart = [...cart, { ...productToAdd, amount: 1 }];
                setCart(updatedCart);
            }
        }
    };

    const removeItem = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    const increaseQty = (productId) => {
        const updatedCart = cart.map((item) =>
            item.id === productId ? { ...item, amount: item.amount + 1 } : item
        );
        setCart(updatedCart);
    };

    const decreaseQty = (productId) => {
        const updatedCart = cart.map((item) => {
            if (item.id === productId) {
                if (item.amount > 1) {
                    return { ...item, amount: item.amount - 1 };
                } else {
                    removeItem(productId);
                }
            }
            return item;
        });
        setCart(updatedCart);
    };

    const cartTotal = cart.reduce(
        (total, item) => total + item.price * item.amount,
        0
    );

    return (
        <div className="App" id="menu">
            <Header
                cartCount={cart.length}
                toggleCart={() => setIsCartOpen(!isCartOpen)}
            />
            <section className="products container" id="menu-section">
                <div className="section-title">
                    <h2 id="menu section-title">Explore Our Menu</h2>
                </div>
                <div className="products-center">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            inCart={cart.some((item) => item.id === product.id)}
                        />
                    ))}
                </div>
            </section>
            {isCartOpen && (
                <div className="cart-overlay">
                    <div className="cart show-cart transparentBcg">
                        <span className="close-cart" onClick={() => setIsCartOpen(false)}>
                            <i className="fas fa-window-close"></i>
                        </span>
                        <h2>Your Cart</h2>
                        <div className="cart-content">
                            {cart.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    increaseQty={increaseQty}
                                    decreaseQty={decreaseQty}
                                    removeItem={removeItem}
                                />
                            ))}
                        </div>
                        <div className="cart-footer">
                            <h3>
                                Your Total: $ <span className="cart-total">{cartTotal}</span>
                            </h3>
                            <button
                                className="clear-cart banner-btn"
                                onClick={() => setCart([])}
                            >
                                Clear Cart
                            </button>
                            <button className="checkout">Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;

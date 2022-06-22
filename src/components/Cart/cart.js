import React from "react";
import './styles/cart.scss';

const Cart = () => {
    return (
        <section className="cart-container container">
            <div className="cart-title">
                <h2>Your Shopping Bag</h2>
                <div className="cart-band"></div>
            </div>
            <div className="cart-item-list">
                <div className="cart-item">
                    <div className="cart-image">

                    </div>
                    <div className="item-details">
                        <div className="item item-name">Electric Leggings</div>
                        <div className="item item-style"><p>Size:</p></div>
                        <div className="item item-color"><p>Size:</p></div>
                        <div className="item item-cost"><p>Size:</p></div>
                    </div>
                    <div className="ellipse">...</div>
                </div>
            </div>
        </section>
    )

}

export default Cart;
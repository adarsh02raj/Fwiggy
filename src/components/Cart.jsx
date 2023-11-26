const Cart = () => {
    return(
        <div className="cart">
            <div className="billBox">
                <div className="billed-restaurant">
                    <div className="billed-res-image">

                    </div>
                    <div className="billed-res-details">
                        <h3>Restaurant Name</h3>
                    </div>
                </div>
                <div className="billed-item">
                    <div className="veg-cat"></div>
                    <div className="numberOfItems"></div>
                    <div className="itemPrice"></div>
                </div>
                <div className="gstBills">
                    <h2>Bill details</h2>
                    <div className="itemTotal">
                        <p>Item Total</p>
                        <p>Inr 744</p>
                    </div>
                    <div className="deliveryfee">
                        <p>Delivery fee | 0.3 Km</p>
                        <p>97</p>
                    </div>
                    <div className="toPay">
                        <h3>TO PAY</h3>
                        <h3>849</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
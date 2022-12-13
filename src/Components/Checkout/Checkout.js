import React from "react";
import "./Checkout.css";
import SubTotal from "../SubTotal/SubTotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider/StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />
        <div>
          {user && <h2> Hello, {user.email} </h2>}

          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.length > 0 ? (
            <div>
              {basket.map((item, index) => (
                <CheckoutProduct
                  key={`${item.id}${index}`}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          ) : (
            <h3 className="Checkout__title">Your basket is empty!</h3>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtitle will go here</h2>
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;

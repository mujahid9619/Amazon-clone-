import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider/StateProvider";
import CustomButton from "../../Components/CustomButton";

const Product = ({ id, title, image, price, rating, toastHandler }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    toastHandler();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="rating_emoji" key={i}>
                <StarIcon style={{ fill: "#E1E15C" }} />
              </span>
            ))}
        </div>
      </div>
      <img src={image} />
      <CustomButton onClick={addToBasket}> Add to Basket</CustomButton>
    </div>
  );
};

export default Product;

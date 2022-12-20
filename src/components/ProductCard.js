/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { useState } from "react";
import styled from "styled-components";
import { useAppData } from "../hooks/useAppData";
import { useAuth } from "../hooks/useAuth";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";

const Card = styled.div`
  width: 375px;
  height: 450px;
  display: flex;
  margin: 0 10px;
  background: #fff;
  padding: 25px 20px;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 2px 2px 6px 0px rgb(138 92 245 / 60%);

  @media (max-width: 500px) {
    width: 375px;
    height: 400px;
  }
`;

const CardImageViewer = styled.div`
  display: flex;

  & > img {
    width: 235px;
    height: 325px;
    margin: 0 10px;
    border-radius: 10px;
    border: 2px solid rgb(138 92 245);

    @media (max-width: 500px) {
      width: 200px;
      height: 270px;
    }
  }

  & > div {
    display: flex;
    margin: 0 auto;
    flex-direction: column;

    @media (max-width: 500px) {
      display: none;
    }
  }

  & > div > img {
    width: 75px;
    margin: auto;
    height: 75px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid rgb(138 92 245);
  }
`;

const CardDetails = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;

  & > p:nth-child(1) {
    margin: 10px;
    color: #8b5cf6;
    font-size: 25px;
    margin-top: auto;
    font-weight: bold;
    margin-right: auto;

    @media (max-width: 500px) {
      font-size: 22px;
    }
  }

  & > div {
    width: 100%;
    display: flex;
    margin-top: auto;
    align-items: center;
  }

  & > div > p {
    margin: 5px;
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    margin-right: auto;
    color: rgb(138 92 245 / 64%);
    font-family: "Inter", sans-serif;

    @media (max-width: 500px) {
      font-size: 18px;
    }
  }
`;

const CardButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  width: max-content;
  align-items: center;
`;

const CardButton = styled.div`
  border: 0px;
  color: #fff;
  width: 25px;
  height: 25px;
  display: flex;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50%;
  align-items: center;
  transition: 0.2s all;
  justify-content: center;
  background: #8b5cf67a;

  & > span {
    margin: 0 5px;
  }

  &:hover {
    background: #ba9cff;
  }
`;

function ProductCard({ product }) {
  const { images, thumbnail, title, price } = product;

  const [image1, image2, image3, image4] = images;

  const [image, setImage] = useState(thumbnail);

  const data = useAppData();

  const auth = useAuth();

  const isProductInWishlist =
    data.wishlist.find((prod) => prod.title === product.title) !== undefined;

  const isProductInCart =
    data.cart.find((prod) => prod.title === product.title) !== undefined;

  const handleViewImage = (image) => {
    return () => {
      setImage(image);
    };
  };

  const handleStopViewImage = () => {
    setImage(thumbnail);
  };

  const handleAddToCart = () => {
    if (!auth.isAuthenticated) {
      return toast("You Must Sign In To Add This Product In You Cart");
    }

    data.updateCart(product, "add");
    toast("Product Added to Cart");
  };

  const handleAddToWishList = () => {
    if (!auth.isAuthenticated) {
      return toast("You Must Sign In To Add This Product In You Wishlist");
    }

    data.updateWishList(product, "add");
    toast("Product Added to Your Wishlist");
  };

  const handleRemoveFromCart = () => {
    data.updateCart(product, "remove");
    toast("Product Remove to Cart");
  };

  const handleRemoveFromWishList = () => {
    data.updateWishList(product, "remove");
    toast("Product Removed From Your Wishlist");
  };

  return (
    <Card>
      <CardImageViewer>
        <LazyLoadImage src={image} width={235} height={325} alt="main_img" />
        <div>
          {image1 && (
            <LazyLoadImage
              alt="img1"
              width={75}
              height={75}
              src={image1}
              onMouseLeave={handleStopViewImage}
              onMouseEnter={handleViewImage(image1)}
            />
          )}
          {image2 && (
            <LazyLoadImage
              alt="img2"
              width={75}
              height={75}
              src={image2}
              onMouseLeave={handleStopViewImage}
              onMouseEnter={handleViewImage(image2)}
            />
          )}
          {image3 && (
            <LazyLoadImage
              alt="img3"
              width={75}
              height={75}
              src={image3}
              onMouseLeave={handleStopViewImage}
              onMouseEnter={handleViewImage(image3)}
            />
          )}
          {image4 && (
            <LazyLoadImage
              alt="img4"
              width={75}
              height={75}
              src={image4}
              onMouseLeave={handleStopViewImage}
              onMouseEnter={handleViewImage(image4)}
            />
          )}
        </div>
      </CardImageViewer>
      <CardDetails>
        <p>{title.capitalize()}</p>
        <div>
          <p>Price : {price}$</p>
          <CardButtonsContainer>
            <CardButton>
              {isProductInWishlist ? (
                <span
                  onClick={handleRemoveFromWishList}
                  className="material-symbols-outlined"
                >
                  close
                </span>
              ) : (
                <span
                  onClick={handleAddToWishList}
                  className="material-symbols-outlined"
                >
                  favorite
                </span>
              )}
            </CardButton>
            <CardButton>
              {isProductInCart ? (
                <span
                  onClick={handleRemoveFromCart}
                  className="material-symbols-outlined"
                >
                  close
                </span>
              ) : (
                <span
                  onClick={handleAddToCart}
                  className="material-symbols-outlined"
                >
                  add_shopping_cart
                </span>
              )}
            </CardButton>
          </CardButtonsContainer>
        </div>
      </CardDetails>
    </Card>
  );
}

export { ProductCard };

import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductImg = () => {
  const { product } = useContext(ProductContext);
  const { img = "" } = product;

  return (
    <img
      src={img ? img : noImage}
      className={styles.productImg}
      alt="Coffe Mug"
    />
  );
};

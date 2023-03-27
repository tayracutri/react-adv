import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ImageProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImg = ({ className, style }: ImageProps) => {
  const { product } = useContext(ProductContext);
  const { img = "" } = product;

  return (
    <img
      src={img ? img : noImage}
      className={`${styles.productImg} ${className}`}
      alt="Coffe Mug"
    />
  );
};

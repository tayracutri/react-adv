import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";

import { ProductContextProps, Props } from "../interfaces/interfaces";
import { ProductImg } from "./ProductImage";

import styles from "../styles/styles.module.css";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImg img={product.img} />

<ProductTitle title={product.title} />

<ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Img = ProductImg;
ProductCard.Buttons = ProductButtons;

import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useCart = () => {
  const [cart, setCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log({ count });
    setCart((oldCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldCart;

        return rest;
      }

      return {
        ...oldCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    cart,
    setCart,
    onProductChange,
  };
};

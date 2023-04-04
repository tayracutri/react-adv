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
    // console.log("onProductchange", count, product);

    console.log({ count });
    setCart((oldCart) => {
      const productInCart: ProductInCart = oldCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldCart,
          [product.id]: productInCart,
        };
      }
      //borrar el product si no existe o es menos a 0
      const { [product.id]: toDelete, ...rest } = oldCart;
      console.log(toDelete);
      return rest;
      // if (count === 0) {
      // const { [product.id]: toDelete, ...rest } = oldCart;
      // console.log(toDelete);
      // return rest;
      // }

      // return {
      //   ...oldCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    cart,
    setCart,
    onProductChange,
  };
};

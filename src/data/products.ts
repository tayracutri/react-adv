import { Product } from "../02-components-patterns/interfaces/interfaces";

const product1 = {
    id: "1",
    title: "Coffe Mug",
    img: "./coffee-mug.png",
  };
  const product2 = {
    id: "2",
    title: "Coffe Mug - Meme",
    img: "./coffee-mug2.png",
  };
  

  export const products: Product[] = [product1, product2];
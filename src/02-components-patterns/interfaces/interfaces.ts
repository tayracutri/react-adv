import { Props as ProductCardProps} from "../components/ProductCard";
import { ImageProps } from "../components/ProductImage";
import { TitleProps } from "../components/ProductTitle";
import { ButtonProps } from "../components/ProductButtons";

  
 export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
  export  interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
  }


  export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: (Props: TitleProps) => JSX.Element,
    Img: (Props: ImageProps) => JSX.Element,
    Buttons: (Props:ButtonProps) => JSX.Element
}

 
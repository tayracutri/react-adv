import { ReactElement } from 'react';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[] | React.ReactNode;
  }
  
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

 
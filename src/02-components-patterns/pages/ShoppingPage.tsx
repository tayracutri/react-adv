import { products } from "../../data/products";
import {
  ProductCard,
  ProductButtons,
  ProductImg,
  ProductTitle,
} from "../components";
import { useCart } from "../hooks/useCart";
import "../styles/customStyles.css";

export const ShoppingPage = () => {
  const { cart, onProductChange } = useCart();
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text"
            key={product.id}
            onChange={onProductChange}
            value={cart[product.id]?.count || 0}
          >
            <ProductImg className="img" />
            <ProductTitle />
            <ProductButtons className="buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(cart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductChange}
          >
            <ProductImg className="img" />
            <ProductTitle />
            <ProductButtons
              className="buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

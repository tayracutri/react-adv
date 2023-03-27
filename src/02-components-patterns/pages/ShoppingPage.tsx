import {
  ProductCard,
  ProductButtons,
  ProductImg,
  ProductTitle,
} from "../components";
import "../styles/customStyles.css";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product} className="bg-dark text">
          <ProductImg className="img" />
          <ProductTitle />
          <ProductButtons className="buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text">
          <ProductCard.Img className="img" />
          <ProductCard.Title />
          <ProductCard.Buttons className="buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8 " }}>
          <ProductCard.Img />
          <ProductCard.Title style={{ fontWeight: "bold" }} />
          <ProductCard.Buttons
            style={{ display: "flex", justifyContent: "end" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

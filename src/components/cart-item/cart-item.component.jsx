import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { title, thumbnail, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={thumbnail} alt={`${title}`} />
      <ItemDetails>
        <span>{title}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

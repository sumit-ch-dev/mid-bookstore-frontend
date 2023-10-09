import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useDispatch } from "react-redux";
import { BookCardContainer, Footer, Name, Price
} from './bookItem.styles'

import { addItemToCart } from "../../store/cart/cart.reducer";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const { title, price, description, category, thumbnail } = book;
  const addBookToCart = () => {
    console.log("clicked")
    dispatch(addItemToCart(book))
  }
  return (
    <BookCardContainer>
      <img src={thumbnail} alt={`${title}`} />
      <Footer>
        <Name>{title}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addBookToCart}
      >
        Add to cart
      </Button>
    </BookCardContainer>
  );
};

export default BookItem;

import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    // this is used to clear the cart
    dispatch(clearCart());
  };

  return (
    <div className="m-2">
      <h1 className="font-bold">Cart-{cartItems.length}</h1>
      <button
        className="bg-green-500 p-2 rounded-lg text-white"
        onClick={handleClearCart}
      >
        clearCart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

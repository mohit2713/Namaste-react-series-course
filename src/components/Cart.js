import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <div className=" w-[60%] mx-auto">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold my-auto">Cart</h1>
          <button
            onClick={handleClearCart}
            className="p-2 m-2 font-bold bg-black text-white rounded-md"
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 && (
          <h1>Your Cart is Empty, Add items to the Cart !!!</h1>
        )}
        <ItemList itemCards={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

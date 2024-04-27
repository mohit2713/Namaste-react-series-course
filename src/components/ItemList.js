import { useDispatch } from "react-redux";
import { RESFOODPICS } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemCards }) => {
  //console.log(itemCards);

  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="items">
      {itemCards.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className=" flex w-6/12 ml-auto mr-auto p-3 m-2 border rounded-md justify-evenly "
        >
          <div className="w-[50%] text-center ">
            <p className="text-[14px]">
              {item.card.info.ribbon.text === "Bestseller" ? (
                <li className="list-none p-1  text-yellow-500 font-semibold">
                  {"⭐"}
                  {item.card.info.ribbon.text}
                </li>
              ) : (
                ""
              )}
            </p>

            <li className="list-none">{item.card.info.name}</li>
            <p>
              {item.card.info.price ? (
                <li className="list-none">
                  {"₹"}
                  {item.card.info.price / 100}
                </li>
              ) : (
                <li className="list-none">
                  {item.card.info.defaultPrice / 100}
                </li>
              )}
            </p>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className=" w-[50%] text-center">
            <div className="w-[100%]">
              {item.card.info.imageId ? (
                <img
                  className="ml-auto mr-auto rounded-sm "
                  src={RESFOODPICS + item.card.info.imageId}
                  alt="Logo"
                />
              ) : (
                ""
              )}
            </div>
            <div>
              <button
                onClick={() => handleAddItems(item)}
                className="w-28 text-green-500 text-sm   p-1 m-1 border rounded-md"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

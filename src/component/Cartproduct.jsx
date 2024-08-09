import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "redux/Slice/cartSlice";

export default function Cartproduct({
  cartproduct,
  onCheckboxChange,
  val,
  selectedItems,
  showDeleteButton = true,
}) {
  const [isChecked, setIsChecked] = useState(
    selectedItems?.includes(cartproduct.id)
  );
  const { cartItems } = useSelector((state) => state.Products);
  const [counter, setCounter] = useState(null);
  const dispatch = useDispatch();
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onCheckboxChange(event, cartproduct.id);
    console.log(cartproduct.id);
  };

  useEffect(() => {
    const foundItem = cartItems.find((item) => item.id === cartproduct.id);
    if (foundItem) {
      setCounter(foundItem.quantity);
    }
  }, [cartItems, cartproduct.id]);

  console.log(cartItems);
  const handleRemoveFromCart = () => {
    dispatch(removefromcart(cartproduct.id));
  };

  return (
    <>
      <div className="m-6 p-10  md:p-7  md:m-2 flex md:mb-8 w-[20rem] md:w-full md:flex md:flex-row">
        {!val && (
          <div className="checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
        )}
        <div className="flex flex-col md:flex md:flex-row">
          <div className="image">
            {cartproduct && (
              <img
                src={cartproduct.image}
                alt=""
                className="w-32 object-contain mr-7 m-auto md:ml-10 "
              />
            )}
          </div>

          <div className="flex-col mt-5 pl-5 md:flex-row md:flex md:justify-between md:w-[20rem]">
            {cartproduct ? (
              <div className="detail">
                <h1 className="text-lg font-bold mb-3 md:w-[21rem]">
                  {cartproduct.title}
                </h1>
                <p className="text-orange-500">
                  {cartproduct.category.toUpperCase()}
                </p>
                <p>Quantity: {counter}</p>
                <p>Price: Rs.{cartproduct.price * counter}</p>
              </div>
            ) : (
              <div className="detail">
                <p>No items here</p>
              </div>
            )}
            <div className="delete md:flex md:flex-col  md:justify-end">
              {showDeleteButton && (
                <button
                  onClick={handleRemoveFromCart}
                  className="border border-white bg-red-700 text-white p-2 w-32 rounded-3xl mt-4">
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

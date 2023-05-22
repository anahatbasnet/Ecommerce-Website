import { TbTruckDelivery } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function DeliveryPage({cartproduct}) {
  const { location } = useSelector((state) => state.address);
  const { buy } = useSelector((state) => state.buynow);
  const { counter } = useSelector((state) => state.Products);

  return (

    <>
    <div className="container flex flex-col justify-center justify-items-center m-auto h-[100vh]">

          <p className="text-sky-700 flex justify-center border-b-sky-700 ">
            <TbTruckDelivery size={200} />
          </p>
      <div className="flex justify-center ml-72 ">
        
        <div>
          <p className="text-sky-700 font-bold text-5xl ml-72">
            Your order is on the way
          </p>
          <p className="mb-2 ml-72">
            <span className="font-semibold">Street:</span> {location.state}
          </p>
          <p className="mb-2 ml-72">
            <span className="font-semibold">City:</span> {location.city}
          </p>
          <p className="mb-4 ml-72">
            <span className="font-semibold">Country:</span> {location.country}
          </p>
          <div className=" bg-white w-4/5  mt-10 ">
            <h2 className=" font-bold text-sky-700 text-4xl ml-72">Order Details</h2>
            <div className="flex m-2">
              <img
                src={buy.image}
                alt=""
                className="object-content w-20 h-25 mt-5 ml-72"
              />
              <div>
                <h2 className="font-bold text-sky-700 text-3xl mt-8">
                  {buy.title}
                </h2>
               
                <h2 className="text-lime-700 text-2xl font-bold">Be Ready with ${buy.price * counter}</h2>
              </div>
            </div>
          </div>
                </div>
        </div>
      </div>
    </>
  );
}

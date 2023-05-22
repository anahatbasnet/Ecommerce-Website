import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

export default function Addcart(){
   
    return(
        <>
        <Navbar/>
        <div className="mt-15">

        <div className="flex justify-center m-auto border border-black h-[20vh] w-[50%] items-center ">

        <h3 className="text-3xl "> Item added to cart successfully</h3>
        <Link to = "/cart">
        <button className='border rounded-3xl h-10 w-28 m-2 bg-sky-600 text-white hover:bg-sky-700' >Go to Cart</button>
        </Link>
        </div>
        </div>
        </>
        
    )
}
import { MessageSquare } from "lucide-react";
import Lang from "./lang";

const Top = () => {
    return ( 
        <>
        <div className="top bg-black rounded h-1/10 w-full flex items-center justify-around">
          <div className="profile w-10 h-10 bg-white rounded-full flex justify-center items-center font-semibold ">
            V
          </div>

          <button className=" rounded py-4 h-11 w-50 cursor-pointer flex justify-around items-center text-lg font-semibold text-white bg-blue-600  hover:bg-blue-700 active:bg-slate-700 ">
            New Chat...
            <MessageSquare />
          </button>
        </div>
            <div>
            <Lang></Lang>
            </div>  
            </>
     );
}
 
export default Top;
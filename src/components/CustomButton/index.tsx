import { ReactNode } from "react";


export function CustomButton({buttonTitle, }:{buttonTitle: string, }) {
    return (
        <div className="mx-auto p-[3px] bg-gradient-to-r from-[#fff000]  to-[#e6258f]">           
              <button className="flex flex-col justify-between h-full text-white font-bold p-2 bg-[#242424]"> {buttonTitle} </button>          
          </div>
    )
}
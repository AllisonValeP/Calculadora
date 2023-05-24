import { ReactNode } from "react";


export function CustomButton({buttonTitle, buttonIcon}:{buttonTitle: string, buttonIcon?:string }) {
    return (
        <div className="mx-auto p-[3px] cursor-pointer rounded-md bg-gradient-to-r from-[#fff000]  to-[#e6258f] ">           
              <button className="font-futura-ligth self-end flex flex-row justify-between  text-white font-bold p-2 rounded-md  bg-[#242424] max-[550px]:text-[2rem] max-[550px]:p-[25px]"> <img className="bg-[#242424] w-5 mr-1 " src={buttonIcon}/>{buttonTitle} </button>          
          </div>
    )
}
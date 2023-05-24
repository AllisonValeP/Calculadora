import Dialog from '@mui/material/Dialog';
import { CustomButton } from "@/components/CustomButton"
import { CustomSlider } from "@/components/CustomSlider"
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import { red } from '@mui/material/colors';


export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
      <main className="relative h-full pt-20 flex flex-col items-center justify-center gap-4 overflow-hidden">
         <h1 className='text-white text-6xl mt-3 font-bold'>Endomorfo</h1>

      <div className='w-max-[600px] p-5 w-full flex flex-col items-center'>

            <div className="flex flex-row gap-8">
            <CustomButton buttonTitle="Masculino"/>
            <CustomButton buttonTitle="Feminino"/>
            </div>    
            
            <CustomSlider sliderTitle="Idade" defaultValue={0} minValue={16}/>
            <CustomSlider sliderTitle="Peso - kg" defaultValue={0} maxValue={200} minValue={40}/>
            <CustomSlider sliderTitle="Altura - cm" defaultValue={0} maxValue={250} minValue={130}/>

            <div className="h-16 w-36 text-center rounded-md bg-gradient-to-r from-[#fff000]  to-[#e6258f]">           
                    <button className="text-black h-full font-bold text-xl p-2 "> Calcular IMC </button>          
            </div>

            <div className="text-white flex flex-row pl-32 gap-7  self-start w-[600px] h-auto bg-gradient-to-r from-[#fff000] via-[#e6258f] to-transparent">
            <h1 className="font-bold text-black text-4xl  bg-transparent">Seu IMC é</h1>     
            <h1 className="flex flex-col justify-between  text-4xl text-center font-bold bg-transparent">23.85</h1>         
            </div>

            <div className="text-white flex flex-row pl-32 gap-7  self-start w-[600px] h-auto bg-gradient-to-r from-[#fff000] via-[#e6258f] to-transparent">
            <h1 className="font-bold text-black text-4xl  bg-transparent">Resultado</h1>     
            <h1 className="flex flex-col justify-between  text-4xl text-center font-bold bg-transparent">00.00</h1>         
            </div>

            <div className="text-white flex flex-row pl-32 gap-7  self-start w-[600px] h-auto bg-gradient-to-r from-[#fff000] via-[#e6258f] to-transparent">
            <h1 className="font-bold text-black text-4xl  bg-transparent">Resultado</h1>     
            <h1 className="flex flex-col justify-between  text-4xl text-center font-bold bg-transparent">00.00</h1>         
            </div>

            <div>
            <Dialog  open={false} onClose={handleClose} sx={{background:"white"}}>
            <div className='flex flex-row '>
                <div  >
                <DialogTitle sx={{fontSize:"50px",color:"#fff000"}} >
                    Iridium
                </DialogTitle>

                
                
                    <DialogContentText sx={{fontSize:"20px",color:"white"}}>
                    Insira nome e email para continuar
                    </DialogContentText>

                    <form className='text-white mt-5'>
                    <label title="Nome" className='text-white'> Nome </label>
                    <input type='text' placeholder='nome' className='bg-[#242424] p-1  text-white rounded-sm border-2 border-[#fff000]  hover:border-[#e6258f] focus:outline-[#e6258f] onfocus:border-none'/>
                </form>
            
                <form className='text-white mt-5 '>
                    <label title="Email" > Email </label>
                    <input type='email' placeholder='email' className='p-1 bg-[#242424] mb-10 text-white rounded-sm border-2 border-[#fff000]  hover:border-[#e6258f] focus:outline-[#e6258f] onfocus:border-none'  />
                </form>
                <DialogActions >
                    <CustomButton  buttonTitle='Entrar'/>
                </DialogActions>
                </div>

                <div className='w-full bg-white h-full'>
                ae
                {/* <img src='image-modal.jpg' /> */}
                </div> 

                </div> 
            </Dialog>
            
            </div>
    </div>
    </main>
  )
}

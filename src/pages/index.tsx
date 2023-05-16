import Dialog from '@mui/material/Dialog';

import { CustomButton } from "../components/CustomButton"
import { CustomSlider } from "@/components/CustomSlider"
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import React from 'react';

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="pt-20 flex flex-col items-center justify-center gap-8">
      

      <div className="flex flex-row gap-8">
        <CustomButton buttonTitle="Masculino"/>
        <CustomButton buttonTitle="Feminino"/>
      </div> 

     
     
        <form>      
         <input type="number" name="Idade" id="idade" required placeholder="Idade" 
         className="bg-[#242424] text-white h-11 w-24 text-center text-xl
          border-4 border-[#fff000] hover:border-[#e6258f] transition-all
           duration-300  focus:border-[#e6258f] focus:outline-none" />        
        </form>
      <CustomSlider sliderTitle="Peso - kg"/>
      <CustomSlider sliderTitle="Altura - cm"/>

      <div className="h-16 w-36 text-center bg-gradient-to-r from-[#fff000]  to-[#e6258f]">           
              <button className="text-black h-full font-bold text-xl p-2 "> Calcular IMC </button>          
      </div>

      <div className="text-white mt-9 ">
        <h1 className="font-bold text-4xl mb-3">Seu IMC é</h1>

        <div className="mx-auto p-[3px] bg-gradient-to-r from-[#fff000]  to-[#e6258f]">           
          <h1 className="flex flex-col justify-between h-full text-4xl text-center font-bold p-2 bg-[#242424]">23.85</h1>        
      </div>

      <div>
        <Dialog open={true} onClose={handleClose}>
          <DialogTitle color={'#fff000'}>Iridium</DialogTitle>
          <DialogContent>
            <DialogContentText color={'white'}>
              Insira nome e email para continuar
            </DialogContentText>
            <TextField
            
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            />

            <TextField
            
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button variant='text' color="primary" sx={{
            '& .MuiTouchRipple-root': {
              background:"blue",
              
            },}} onClick={handleClose}>Cancel</Button>

            <Button variant='text' color="primary" sx={{ '& .MuiTouchRipple-root': {
            
              color:"white"
            }, }} onClick={handleClose}><Typography >Subscribe</Typography></Button>
          </DialogActions>
        </Dialog>
      </div>

      </div>
    </main>
  )
}

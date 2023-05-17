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
    <main className="relative h-full pt-20 flex flex-col items-center justify-center gap-4 overflow-hidden">
      

      <div className="flex flex-row gap-8">
        <CustomButton buttonTitle="Masculino"/>
        <CustomButton buttonTitle="Feminino"/>
      </div>    
       
      <CustomSlider sliderTitle="Idade" defaultValue={0} minValue={16}/>
      <CustomSlider sliderTitle="Peso - kg" defaultValue={0} maxValue={200} minValue={40}/>
      <CustomSlider sliderTitle="Altura - cm" defaultValue={0} maxValue={250} minValue={130}/>

      <div className="h-16 w-36 text-center bg-gradient-to-r from-[#fff000]  to-[#e6258f]">           
              <button className="text-black h-full font-bold text-xl p-2 "> Calcular IMC </button>          
      </div>

      <div className="text-white flex flex-row pl-32 gap-7  self-start w-[600px] h-auto bg-gradient-to-r from-[#fff000] via-[#e6258f] to-transparent">
        <h1 className="font-bold text-black text-4xl  bg-transparent">Seu IMC é</h1>     
        <h1 className="flex flex-col justify-between  text-4xl text-center font-bold bg-transparent">23.85</h1>         
      </div>

      <div className="text-white flex flex-row pl-32 gap-7  self-start w-[600px] h-auto bg-gradient-to-r from-[#fff000] via-[#e6258f] to-transparent">
        <h1 className="font-bold text-black text-4xl  bg-transparent">Resultado</h1>     
        <h1 className="flex flex-col justify-between  text-4xl text-center font-bold bg-transparent">0000</h1>         
      </div>

      <div className="text-white flex flex-row pl-32 gap-7  self-start w-[600px] h-auto bg-gradient-to-r from-[#fff000] via-[#e6258f] to-transparent">
        <h1 className="font-bold text-black text-4xl  bg-transparent">Resultado</h1>     
        <h1 className="flex flex-col justify-between  text-4xl text-center font-bold bg-transparent">0000</h1>         
      </div>

      <div>
        <Dialog open={false} onClose={handleClose}>
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

    </main>
  )
}

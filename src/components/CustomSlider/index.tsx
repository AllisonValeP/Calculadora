import Slider from '@mui/material/Slider';

export function CustomSlider({sliderTitle, }:{sliderTitle: string, }){
    return(
    <div className="mb-10 w-[600px] relative">
        <h1 className="mb-10 font-bold text-white">{sliderTitle}</h1>
        <Slider 
        defaultValue={50} 
        aria-label="Default" 
        valueLabelDisplay="on" 
        sx={{   
          background: 'linear-gradient(to right bottom, #fff000, #e6258f)',
          color:'#242424'
          }}  
        />
      </div>
    )
}

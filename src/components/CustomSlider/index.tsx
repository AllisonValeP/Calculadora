import Slider from '@mui/material/Slider';

export function CustomSlider({sliderTitle, defaultValue, maxValue, minValue }:{sliderTitle: string, defaultValue:number, maxValue?:number, minValue:number}){
    return(
    <div className="mb-10 w-[600px] relative">
        <h1 className="font-bold text-xl text-white ml-10 ">{sliderTitle}</h1>
        <Slider 
        aria-label="Default" 
        valueLabelDisplay="on" 
        defaultValue={defaultValue} 
        max={maxValue}
        min={minValue}
        sx={{   
          background: 'linear-gradient(to right bottom, #fff000, #e6258f)',
          color:'#242424'
          }}  
        />
      </div>
    )
}

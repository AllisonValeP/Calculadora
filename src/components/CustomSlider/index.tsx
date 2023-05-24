import Slider from '@mui/material/Slider';

export function CustomSlider({sliderTitle, defaultValue, maxValue, minValue }:{sliderTitle: string, defaultValue:number, maxValue?:number, minValue:number}){
    return(
    <div className="my-10 max-w-[600px] max-[450px]:w-[800px]   min-[451px]:w-full xl:w-full relative flex flex-row items-center max-[550px]:flex-col">
        <h1 className="font-futura-ligth font-bold text-white w-36 min-[508px]:text-xl max-[450px]:text-[40px] max-[450px]:w-auto max-[550px]:mb-5">{sliderTitle}</h1>
        <Slider 
        aria-label="Default" 
        valueLabelDisplay="on" 
        defaultValue={defaultValue} 
        max={maxValue}
        min={minValue}
        sx={{   
          background: 'linear-gradient(to right bottom, #fff000, #e6258f)',
          color:'#242424',
          fontFamily: 'Futura Std Cond',
          }}  
        />
      </div>
    )
}

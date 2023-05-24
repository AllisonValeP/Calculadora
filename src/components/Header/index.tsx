

export function Header ({headerTitle}:{headerTitle:string}){
    return (
        <header className="items-center flex flex-col mt-2">
            <img src="logoIridium.png" className="w-[70px]"/>
            <h1 className='text-white text-5xl mt-3 font-futura-base'>{headerTitle}</h1>
        </header>
    )
}
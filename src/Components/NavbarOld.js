
import { useState } from 'react';

function NavBar() { 
    const [open, setOpen] = useState(true) ;
    const handleChangeOpen = ()=>{
        setOpen(!open) ;
        console.log(open);
    }
    return ( 
        <div>
            <nav className="mx-10 lg:mx-32 pt-5 flex justify-between items-center border-b border-gray-600 py-5 ">
                <h1 className="text-3xl  cursor-pointer   text-[#00df90] font-bold capitalize hover:uppercase hover:tracking-wider hover:text-[#25f0a9]">Slimani.</h1>
                <ul className="hidden sm:flex space-x-3">
                    <li className="text-white  cursor-pointer  font-bold capitalize hover:uppercase hover:text-[#00df90] hover:underline hover:text-xl text-lg">Home</li>
                    <li className="text-white cursor-pointer  font-bold capitalize hover:uppercase hover:text-[#00df90] hover:underline hover:text-xl text-lg">Services</li>
                    <li className="text-white  cursor-pointer font-bold capitalize hover:uppercase hover:text-[#00df90] hover:underline hover:text-xl text-lg">About</li>
                    <li className="text-white  cursor-pointer font-bold capitalize hover:uppercase hover:text-[#00df90] hover:underline hover:text-xl text-lg">Contact me</li> 
                </ul> 
                <div className={ open ? 'sm:hidden flex flex-col space-y-1 cursor-pointer ' : 'hidden'} onClick={handleChangeOpen}>
                    <div className='border border-[#00df90] w-8 h-1 bg-[#00df90]'></div>
                    <div className='border border-[#00df90] w-8 h-1 bg-[#00df90]'></div>
                    <div className='border border-[#00df90] w-8 h-1 bg-[#00df90]'></div> 
                </div>
                <div className={ !open ? 'sm:hidden flex flex-col space-y-1 cursor-pointer ' : 'hidden'} onClick={handleChangeOpen}>
                    <div className='border border-[#00df90] rotate-45 w-8 h-1 bg-[#00df90]'></div>
                    <div className='border border-[#00df90] rotate-135 w-8 h-1 bg-[#00df90]'></div>
                </div>
            </nav>
            <div className={!open ?'sm:hidden fixed left-10 top-20 bg-slate-800 w-[80vw] h-full px-10 py-10' : 'hidden'}>
                <ul className="flex flex-col space-y-8">
                    <li className="text-white  cursor-pointer  font-bold capitalize hover:uppercase hover:text-[#00df90] hover:underline hover:text-xl text-lg">Home</li>
                    <li className="text-white cursor-pointer  font-bold capitalize hover:uppercase hover:text-[#00df90] hover:underline hover:text-xl text-lg">Services</li>
                    <li className="text-white  cursor-pointer font-bold capitalize hover:uppercase hover:text-[#00df90] hover:underline hover:text-xl text-lg">About</li>
                    <li className="text-white  cursor-pointer font-bold capitalize hover:uppercase hover:text-[#00df90] hover:underline hover:text-xl text-lg">Contact me</li> 
                </ul> 
            </div>
        </div>
     );
}

export default NavBar;
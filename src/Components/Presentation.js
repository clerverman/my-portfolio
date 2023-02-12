import Coding from "../assets/coding-html-svgrepo-com.png"
function Presentation() {
    return ( 
        <div className="mx-10 lg:mx-32 mt-10 md:mt-24 md:flex md:flex-row md:justify-around"> 
            <div className="flex cursor-pointer justify-center md:justify-start mt-24 md:hidden">
                <img src={Coding} alt="coding" className="w-60  md:w-96 md:h-full hover:scale-75 transition ease-out duration-300" />
            </div>
            <div className="py-10 max-w-lg flex flex-col px-5 items-center md:items-start">
                <h1 className="text-white font-bold text-3xl my-5 uppercase">Slimani mouhcine</h1>
                <p className="text-gray-300 font-semibold my-2 text-lg md:text-2xl">MQList : Software quality at FSDM.</p>
                <p className="text-gray-400 font-semibold text-lg md:text-2xl">Freelancer : web developer</p>
            </div>
            <img src={Coding} alt="coding" className="w-44 cursor-pointer hidden md:block lg:w-96 lg:h-full hover:scale-75 transition ease-out duration-300" />
        </div> 
    );
}

export default Presentation;
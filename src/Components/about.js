import MyPic from "../assets/Slimani_mouhcine.JPG"
import {MdOutlineWavingHand} from "react-icons/md"
import { FaAngleDoubleDown } from "react-icons/fa";

function About() {
    return (  
        <div className="mt-5 lg:my-24 flex flex-col">
            <div className="container mx-auto flex lg:flex-row flex-col justify-around items-center">
                    <div className="hidden lg:flex flex-col">
                        <div className="flex space-x-5">
                            <h1 className="text-white text-4xl font-bold">Slimani Mouhcine</h1>
                            <MdOutlineWavingHand className="text-myColor text-4xl  duration-700 hover:-rotate-90  "/> 
                        </div>
                        <div className="flex mt-10 space-x-5 items-center">
                            <div className="w-20 h-2 bg-myColor"></div>
                            <p className="text-white text-xl font-bold"> MQList student : M1</p>
                            <div className="w-20 h-2 bg-myColor"></div>
                        </div>
                        <div className="mt-5">
                            <p className="text-white max-w-sm">I am a full stack developer: react js, tailwind css, laravel with a repectable experience: more than 7 months in web development.</p>
                        </div>
                    <div className="flex justify-center">
                            <button className="btn">Text me</button>
                    </div>
                    </div> 
                    <img src={MyPic} alt="mypic" className="my-picture"/>
                    <div className="lg:hidden flex flex-col mt-16">
                        <div className="flex space-x-5">
                            <h1 className="text-white text-4xl font-bold">Slimani Mouhcine</h1>
                            <MdOutlineWavingHand className="text-myColor text-4xl  duration-700 hover:-rotate-90  "/> 
                        </div>
                        <div className="flex mt-10 space-x-5 items-center">
                            <div className="w-20 h-2 bg-myColor"></div>
                            <p className="text-white text-xl font-bold">MQList student : M1</p>
                            <div className="w-20 h-2 bg-myColor"></div>
                        </div>
                        <div className="mt-5">
                            <p className="text-white max-w-sm">I am a full stack developer: react js, tailwind css, laravel with a repectable experience: more than 7 months in web development.</p>
                        </div>
                    <div className="flex justify-center">
                            <button className="btn">Text me</button>
                    </div>
                    </div>  
            </div>   
            <div className='my-10 flex justify-center'>
                <FaAngleDoubleDown className="text-black text-4xl animate-bounce  bg-myColor rounded-full "/>
            </div>
        </div>
    );
}

export default About;
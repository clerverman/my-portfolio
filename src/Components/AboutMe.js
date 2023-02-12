import { AiOutlineFileDone } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import MyPic from "../assets/Slimani_mouhcine.JPG"

function AboutMe() {
    return (  
        <div className="sm:pt-0 pt-48 container mx-auto">
            <div className="flex justify-center space-y-2 flex-col text-center"> 
                <h1 className="text-white font-bold text-3xl">About Me </h1>  
                <span className="text-gray-400  font-semibold "> My introduction</span>
            </div>
            <div className='md:grid md:grid-cols-5 gap-4 mt-16'>
                <div className="flex justify-center col-span-2">
                    <img src={MyPic} alt="" className="rounded mb-10"/>
                </div>
                <div className="md:col-span-3 space-y-5">
                    <div className="flex flex-row justify-center md:justify-start space-x-5">
                        <div className="card">
                            <FaRegLightbulb className="text-3xl text-myColor mb-4"/>
                            <p className="card-title"> Experience</p>
                            <p className="text-white">&gt; 7 mois</p> 
                        </div>
                        <div className="card">
                            <AiOutlineFileDone className="text-3xl text-myColor mb-4"/>
                            <p  className="card-title"> Completed</p>
                            <p  className="text-white">10 projects</p> 
                        </div>
                        <div className="card">
                            <MdHeadsetMic className="text-3xl text-myColor mb-4" />
                            <p  className="card-title"> Support</p>
                            <p  className="text-white">24/24 H</p> 
                        </div>
                    </div> 
                    <div>
                        <p className="text-white sm:max-w-screen-sm">I am a 1st year student of the maste: Software Quality. I have experience in development and with laravel ^8.0, in desktop programming too and without forgetting in mobile with Android.</p>
                    </div>  
                    <div className="flex">
                        <button className="btn"> Download cv</button>      
                    </div>
                </div>
            </div>
        </div> 
     );
}

export default AboutMe;
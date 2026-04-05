import { CircleFadingArrowUpIcon } from "lucide-react"
import Image from "next/image"
import { FaArrowAltCircleLeft, FaArrowCircleUp, FaRegArrowAltCircleLeft } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go"

type ProjectDetails = {
    image:string,
    name:string,
    details:string,
    link:string
}



export const ProjectCard = ({image,name,details,link}:ProjectDetails)=>{
    return (
        <>
            <div className="h-fit w-fit flex flex-col items-center justify-center p-2 border rounded-md shadow-2xl/10 shadow-neutral-400">
                <div>
                    <div className="bg-linear-to-br from-neutral-800 via-neutral-600 to-neutral-900 max-w-100 h-60 flex items-center justify-center p-2 border rounded-md">
                        <div className="h-50 max-w-90 ">
                            <Image className="w-full h-full transition duration-500 hover:scale-[1.02]" width={1200} height={700} alt="image" src={image} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center max-w-80 mt-2 ">
                    <div className="m-2">
                        <h2 className="text-xl font font-medium">{name}</h2>
                    <p className="text-sm text-neutral-400">{details}</p>
                    </div>
                    <a  href={link} className="w-full flex items-center justify-center  gap-1 p-1 border rounded text-sm cursor-pointer hover:bg-neutral-400 hover:text-neutral-700 transform duration-200 ease-linear" target="_blank" >Go to Project <GoArrowUpRight /> </a>
                </div>
            </div>
        </>
    )
}
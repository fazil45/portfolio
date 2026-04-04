import Link from "next/link"




export const Navbar = ()=>{
    return (
        <>
            <div className="w-full max-h-16 flex items-center justify-between border border-white rounded-lg shadow-2xl/25 p-2">
                <div className="p-2 border border-white rounded font-semibold text-shadow-2xs/20">
                    <Link href={"/"}>Mohd Fazil</Link>
                </div>
                <div className="flex gap-2">
                       <div className="p-2 border border-white rounded" ><Link href={"/projects"}>Projects</Link></div> 
                       <div className="p-2 border border-white rounded"><Link href={"/experience"}>Experience</Link></div> 
                       <div className="p-2 border border-white rounded">☀</div> 
                </div>
            </div>
        </>
    )
}
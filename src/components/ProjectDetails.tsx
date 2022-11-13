import React  from "react";
import { AiFillGithub } from "react-icons/ai";
import CardData from './CardData'
export const ProjectDetails= ()=>{  

 
    return (
        <>
             <h2 className="text-3xl font-bold">React Boot Camp Projects </h2>
             <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 items-center">  
             {CardData.map((value:any,index:number)=>(
               
             
                    <div key={index} className="border-black border-1  hover:bg-gray-200   shadow-lg w-56 h-80 m-4 ">
                        
                        <div className="items-center">
                            <a href={value.githubLinkDemo}>
                                <img  className="w-56 object-fill h-28 cursor-pointer "  src={value.projectImgUrl} />
                            </a>
                        </div>
                        <div  className="text-center   p-4 ">
                            <div className="flex gap-1 items-center justify-evenly">
                                <p className="text-xl font-bold">{value.projectName}</p>
                                <a  href={value.githubLinkCode}><AiFillGithub/></a>                               
                           </div>
                                <p>{value.description}</p>
                                <p className="font-bold">Skill : {value.skillUsed}</p>
                                 
                          
                           
                        </div>
                    </div>      
              
                       ))} 
            </div> 
        </>
    )
}
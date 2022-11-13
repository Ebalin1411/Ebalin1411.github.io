import * as React from 'react';
import ProfilePic from '../images/ebalin.JPG';
import { AiFillPhone,AiFillGithub,AiOutlineMail } from "react-icons/ai";
import {BiCurrentLocation}from 'react-icons/bi'

export const PersonalDetails=()=>{
       return (
                 
               
                
                <div className="md:flex md:flex-row flex flex-col items-center justify-between text-xl ">
                   
                            <div className='flex flex-col '>
                                <div className='flex gap-2'>
                                    <AiFillPhone />  
                                    <span className="">+91 9790919258 </span> 
                                </div>
                                <div className='flex gap-2'>
                                    <AiOutlineMail />  
                                    <span className="text">ebalinrosecse2006@gmail.com</span>
                                    <a className="" href="https://github.com/Ebalin1411"><AiFillGithub/></a>                                                            
                                   
                                </div>
                                <div  className='flex'>
                                        <a href='https://maps.google.com?q=12.9815°,80.2180°'><BiCurrentLocation/></a> 
                                        <span className="text">Chennai,TamilNadu.</span>
                                </div>
                                
                            </div> 
                        <div className="p-2 text-4xl font-bold flex flex-col items-center ">
                            <img className="rounded-full" src={ProfilePic} height={100} width={100} alt='Profile Picture'></img> 
                            <span>EBALIN ROSE </span>                   
                        </div>
                  

                                           
               
                </div>
                
         
       
    )
}
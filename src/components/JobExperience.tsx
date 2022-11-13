import * as React from 'react';

export const JobExperience=()=>{
    return(
        <div>
                    <div className="m-2">                
                            <h2 className="text-3xl font-bold">Profile</h2>
                            <p>A software engineering graduate seeking to find an opportunity to work in a challenging environment that will encourage me to improve and learn new skills.</p>
                
                    </div>
                    <div className="m-2">  
                        <h2 className="font-bold text-3xl">Work Experience </h2>              
                        <div className="md:flex md:flex-row flex flex-col  items-center">
                            
                            {/* <!--Company1 info--> */}
                            <div className="m-2">                   
                                <h5>August 2008 – April 2010</h5>                       
                                <h5>Uniphore Software System – Chennai. </h5> 
                                <h4>Project Associate</h4>
                            </div>
                            {/* <!--Company2 info--> */}
                            <div className="m-2">                   
                                <h5>December 2007  – July 2008</h5>
                                <h5>RTBI   IITM Research Group-Chennai.</h5>
                                <h4>Project Associate</h4> 
                            </div> 
                        </div>
                    </div>

                

        </div>
    )


}
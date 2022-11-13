

import { PersonalDetails } from './components/PersonalDetails';
import { JobExperience } from './components/JobExperience';
import { ProjectDetails } from './components/ProjectDetails';
import CardData from './components/CardData'



function App() {
  
  

  return (
    <body className=" h-auto w-full bg-black">
       <div className="md:grid  flex flex-col justify-evenly ">                         
         <div className="flex flex-col bg-pink-200 h-full w-full m-4 p-4">
            <PersonalDetails
            /> 
         </div>
         <div className="flex flex-col   bg-gray-300  w-full  h-auto m-4 p-4">
            <JobExperience/>  
            {CardData&&(<ProjectDetails  />)}       
                      
         </div>         
    </div>
    </body>
   
  );
}

export default App;

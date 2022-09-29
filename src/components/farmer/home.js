
                 
import {ethers,ethereum} from 'ethers';
import {React,useState} from 'react';
import { MDBDataTable } from 'mdbreact';

import farm from './Farm.json';

const Home = () => {
    const [farmOwner, setFarmOwner] = useState("")
    const [farmName,setFarmName]=useState("");
    const [farmLangitude, setFarmLangitude] = useState(0)
    const [farmLatitude,setFarmLatitude]=useState(0);
    const address=window.localStorage.getItem("address");
    console.log(address);
    
    const data = {
        columns: [
          {
            label: 'Ref',
            field: 'ref',
            sort: 'asc',
            width: 150
          },
          {
            label: 'birth date',
            field: 'birth_date',
            sort: 'asc',
            width: 270
          },
          {
            label: 'weight',
            field: 'weight',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 100
          },
          {
            label: 'vaccine date',
            field: 'vaccine_date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'breed',
            field: 'breed',
            sort: 'asc',
            width: 100
          }
        ],
        rows:[{},{},{},{},{},{},{}]
     };
    farm.Farm.map((res)=>{
        console.log(res.ownerAddress," ... ",address);
        if(res.ownerAddress==address)
        {
            

            console.log(res)

            res.Animals.map((animal,index)=>
            {

                console.log(animal,"index : ",index);
               
                    data.rows[index].ref=animal.ref;
                    data.rows[index].birth_date=animal.birth_date;
                    data.rows[index].weight=animal.weight;
                    data.rows[index].age=animal.age;
                    data.rows[index].vaccine_date=animal.vaccine_date;
                    data.rows[index].breed=animal.breed;


                
              
            });
    
        }
    }
  
    );
   
    return(
        <>
        <MDBDataTable
      striped
      bordered
      data={data}
    />
        </>
        
    )
    
}

export default Home;

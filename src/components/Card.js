import { Link } from 'react-router-dom'
import logements from "../logements.json";





export default function Card(){
    return(

       <div className='cards'>
         
        {
            
            logements.map( logement => {
                return(
                    <Link to={`/logement/${logement.id}`} key={logement.id}>
                <div className ="card" key={logement.title}>
                 
                  <img src= {logement.cover}/>
                    <p>{logement.title}</p>
                 
                </div>
                </Link>
                )

            })
        }
        </div>
     
    );



}



import { Link } from 'react-router-dom'
import logements from "../logements.json";





export default function Card(){
    return(

       <div className='cards'>
         
        {
            
            logements.map( logement => {
                return(
                    
                <div className ="card" key={logement.title}>
                    <Link to={`/logement/${logement.id}`} key={logement.id}>
                        <img src= {logement.cover}/>
                        <p>{logement.title}</p>
                    </Link>
                    
                </div>
                )

            })
        }
        </div>
     
    );



}

 
import Arrowleft from "../images/arrow-left.png";
import Arrowright from "../images/arrow-right.png";
import { useState } from "react";

export default function Carrousel({imageSlider})
{
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        {/* si on est à la dernière image, on revient au debut*/}
        if(index === imageSlider.length - 1) {
            setIndex(0)
            {/*sinon on passe à la prochaine image*/}
        } else {
            setIndex(index + 1)
        }
    }

    const prevSlide = () => {
    {/* si on est la première image , on revient à la dernère*/}
        if(index === 0){
            setIndex(imageSlider.length - 1)
        } else{
            {/* sinon on passe à la précédente*/}
            setIndex(index - 1)
        }
           
    }

return(
    <section style={{backgroundImage : `url(${imageSlider[index]})`}} className='carrousel'>
        {/* si il y'a plus d'une image dans le carrousel*/}
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carrouselArrowRight' 
                        src={Arrowright} 
                        alt="Slider suivant" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carrouselArrowLeft' 
                        src={Arrowleft} 
                        alt="Slider précédent" 
                        onClick={prevSlide}
                    />
                    {/* compteur d'images, il n'est pas visible en mobile*/}
                    <p className='slideCount'>{index + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
)
}
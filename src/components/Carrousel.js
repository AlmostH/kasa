import Arrowleft from "../images/arrow-left.jpg";
import Arrowright from "../images/arrow-right.jpg";
import { useState } from "react";

export default function Carrousel({imageSlider})
{
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex(index + 1)
        if(index === imageSlider.length - 1)
            setIndex(0)
    }

    const prevSlide = () => {
        setIndex(index - 1)
        if(index === 0)
            setIndex(imageSlider.length - 1)
    }

return(
    <section style={{backgroundImage : `url(${imageSlider[index]})`}} className='carrousel'>
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
                    {/* compteur d'images il n'est pas visible en mobile*/}
                    <p className='slideCount'>{index + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
)
}
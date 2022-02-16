import { Link } from "react-router-dom";
import Maintitle from "./Maintitle";
import Slider from "./Slider";
import styles from "./Carousel.module.css";
import { useEffect, useRef, useState } from "react";
import useInterval from "./useInterval";


function Carousel() {
    const carouselContent = [
        { src: '/images/sample-project.png' },
        { src: '/images/sample-project.png' },
        { src: '/images/sample-project.png' },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const slideRef = useRef(null)
    const sliders = carouselContent.length - 1

    const nextSlide = () => {
        if ( currentSlide >= sliders ) { setCurrentSlide(0) }
        else { setCurrentSlide( currentSlide + 1 ) }
    }
    const prevSlide = () => {
        if ( currentSlide === 0 ) { setCurrentSlide(sliders) }
        else { setCurrentSlide( currentSlide - 1 ) }
    }


    // Auto Slide
    const delay = 3200
    const [isHover, setHover] = useState(false)

    useInterval(() => {
        nextSlide()
    }, isHover ? null : delay)

    useEffect(() => {
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`
    }, [currentSlide]);

    return ( 
        <div className={ styles.carousel }>
            <Maintitle title='프로젝트' />
            <div className={ styles.carousel__frame } onMouseOver={(event) => { setHover(true) }} onMouseOut={(event) => { setHover(false) } } >
                <div className={ styles.carousel__content } ref={slideRef}>
                    { carouselContent.map((content, index) => (
                        <Slider src={content.src} key={index} />
                    )) }
                </div>
            </div>
        </div>
    )
}
export default Carousel
import React from 'react';
import Slider from "react-slick";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";


const Caroussel = (props) => {

    const slideshow = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        pauseOnHover: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide : true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ],

    };

    const onLeftClick = (event) => {
        event.preventDefault();
        slideshow.current.slickPrev();
    };

    const onRightClick = (event) => {
        event.preventDefault();
        slideshow.current.slickNext();
    };

    return <div className="relative">
        <Slider {...settings} ref={slideshow} className="overflow-hidden">
            <div className="relative px-1 md:px-2 pt-2">
                <img src="../slider/gallery.jpg" alt="" className=""/>
            </div>

            <div className="relative px-1 md:px-2 pt-2">
                <img src="../slider/gallery.jpg" alt="" className="object-contain w-full h-full"/>
            </div>

            <div className="relative px-1 md:px-2 pt-2">
                <img src="../slider/gallery.jpg" alt="" className="object-contain w-full h-full"/>
            </div>

            <div className="relative px-1 md:px-2 pt-2">
                <img src="../slider/gallery.jpg" alt="" className="object-contain w-full h-full"/>
            </div>

            <div className="relative px-1 md:px-2 pt-2">
                <img src="../slider/gallery.jpg" alt="" className="object-contain w-full h-full"/>
            </div>

            <div className="relative px-1 md:px-2 pt-2">
                <img src="../slider/gallery.jpg" alt="" className="object-contain w-full h-full"/>
            </div>



        </Slider>
        <div className="absolute inset-0 flex items-center justify-between">
            <a className="text-white md:ml-2 bg-black hover:bg-opacity-25 md:p-4 flex items-center p-2 ml-2 rounded-full hover:text-white" href="#" onClick={(event) => onLeftClick(event)}><FontAwesomeIcon icon={faChevronLeft} className="md:h-4 md:w-4 w-4 h-4 fill-current block" /> </a>
            <a className="text-white md:mr-2 bg-black hover:bg-opacity-25 md:p-4 flex items-center p-2 mr-2 rounded-full hover:text-white" href="#" onClick={(event) => onRightClick(event)}><FontAwesomeIcon icon={faChevronRight} className="md:h-4 md:w-4 w-4 h-4 fill-current block" /> </a>
        </div>
    </div>
};

export default Caroussel
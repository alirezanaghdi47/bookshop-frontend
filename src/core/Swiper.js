import PropTypes from 'prop-types';
import Slider from "react-slick";

//=================//
//===== style =====//
//=================//

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/core/react-slider.scss";

//=====================//
//===== component =====//
//=====================//

import BookItem from '../components/ui/BookItem';

//====================//
//===== variable =====//
//====================//

const settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rtl: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const Swiper = ({books}) => {

    return (
        <Slider {...settings}>
            {
                books.map((book , index) =>
                    <div className="swiper__item" key={index}>
                        <BookItem book={book}/>
                    </div>
                )
            }
        </Slider>
    );
};

Swiper.prototype = {
    books: PropTypes.array
};

export default Swiper;

import PropTypes from 'prop-types';
import Slider from "react-slick";

//=================//
//===== style =====//
//=================//

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/core/react-slider.scss";

//=====================//
//===== component =====//
//=====================//

import AdvertiseItem from '../../components/ui/AdvertiseItem';

//====================//
//===== variable =====//
//====================//

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
};

const Carousel = ({advertises}) => {

    return (
        <Slider {...settings} className="carousel">
            {
                advertises.map((advertise, index) =>
                    <div className="carousel__item ratio ratio-16x9" key={index}>
                        <AdvertiseItem advertise={advertise}/>
                    </div>
                )
            }
        </Slider>
    );
};

Carousel.prototype = {
    advertises: PropTypes.array
};

export default Carousel;

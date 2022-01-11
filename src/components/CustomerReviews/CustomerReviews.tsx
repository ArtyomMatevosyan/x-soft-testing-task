import CustomerReviewsCard from "./CustoomerReviewsCard";
import petHempData from '../../petHempData.json'
import Slider from "react-slick";
import { ReactComponent as SliderArrowLeft } from '../../assets/icons/sliderArrow_left.svg';
import { ReactComponent as SliderArrowRight } from '../../assets/icons/sliderArrow_right.svg';

const CustomerReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: <SliderArrowLeft />,
        nextArrow: <SliderArrowRight />,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    const { reviews } = petHempData
    return (
        <div className="customerReviews">
            <div className="customerReviews_content">
                <div className="customerReviews_content__titlePart">
                    <p>Сustomer Reviews</p>
                </div>
                <div className="customerReviews_content__sliderPart">
                    <Slider {...settings}>
                        {reviews.map(({ video, name, auther, title, description }, index) => (
                            <CustomerReviewsCard
                                video={video}
                                name={name}
                                auther={auther}
                                title={title}
                                description={description}
                                key={index}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews;
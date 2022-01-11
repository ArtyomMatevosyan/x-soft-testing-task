import CustomerReviewsCard from "./CustoomerReviewsCard";
import petHempData from '../../petHempData.json'
import Slider from "react-slick";
import { SlickArrowLeft, SlickArrowRight } from "../utils/SliderArrowFunctions";

const CustomerReviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 965,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 685,
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
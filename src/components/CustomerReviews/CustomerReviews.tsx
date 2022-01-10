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
                        {reviews.map(() => (
                            <CustomerReviewsCard />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews;
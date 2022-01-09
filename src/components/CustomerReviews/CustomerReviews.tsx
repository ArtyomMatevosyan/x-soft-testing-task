import CustomerReviewsCard from "./CustoomerReviewsCard";
import petHempData from '../../petHempData.json'
import Slider from "react-slick";

const CustomerReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true
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
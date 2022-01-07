import CustomerReviewsCard from "./CustoomerReviewsCard";

const CustomerReviews = () => {
    return (
        <div className="customerReviews">
            <div className="customerReviews_content">
                <div className="customerReviews_content__titlePart">
                    <p>Сustomer Reviews</p>
                </div>
                <div className="customerReviews_content__sliderPart">
                    <CustomerReviewsCard />
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews;
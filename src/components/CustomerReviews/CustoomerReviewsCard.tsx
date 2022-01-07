import StarsIcon from '../../assets/icons/stars.png'

const CustomerReviewsCard = () => {
    return (
        <div className="customerReviewsCard">
            <div className="customerReviewsCard_videoPart">
                <video src=""></video>
            </div>
            <div className="customerReviewsCard_content">
                <div className="customerReviewsCard_content__estimate">
                    <img src={StarsIcon} alt="starsIcon" />
                </div>
                <div className='customerReviewsCard_content__titlePart'>
                    <p>Great for my dog</p>
                </div>
                <div className='customerReviewsCard_content__info'>
                    <p>“Thus product seems to work well though we have only gone through one bottle.”</p>
                </div>
                <div className='customerReviewsCard_content__author'>
                    <p>Nichole P.</p>
                    <p>CBD Oil for Dogs & Cats</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviewsCard
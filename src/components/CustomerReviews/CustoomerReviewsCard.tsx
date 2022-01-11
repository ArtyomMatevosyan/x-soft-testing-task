import { FC } from 'react'
import StarsIcon from '../../assets/icons/stars.png'

type CustomerReviewsCardProps={
    title: string,
    description: string,
    video: string,
    auther: string,
    name: string,

}

const CustomerReviewsCard: FC<CustomerReviewsCardProps> = ({title, description,auther,name,video}) => {
    return (
        <div className="customerReviewsCard">
            <div className="customerReviewsCard_videoPart">
                {/* <video src=""></video> */}
                <img src={video} alt='' />
            </div>
            <div className="customerReviewsCard_content">
                <div className="customerReviewsCard_content__estimate">
                    <img src={StarsIcon} alt="starsIcon" />
                </div>
                <div className='customerReviewsCard_content__titlePart'>
                    <p>{title}</p>
                </div>
                <div className='customerReviewsCard_content__info'>
                    <p>{description}</p>
                </div>
                <div className='customerReviewsCard_content__author'>
                    <p>{auther}</p>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviewsCard
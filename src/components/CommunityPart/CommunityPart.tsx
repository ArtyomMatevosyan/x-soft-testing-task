import InstagramIcon from '../../assets/icons/instagram_icon.svg';
import BigImage from '../../assets/images/community_BigImage.png';
import SmallImage1 from '../../assets/images/community_smallImg1.png';
import SmallImage2 from '../../assets/images/community_smallImg2.png';
import SmallImage3 from '../../assets/images/community_smallImg3.png';
import SmallImage4 from '../../assets/images/community_smallImg4.png';

const CommunityPart = () => {
    return (
        <div className="communityPart">
            <div className="communityPart_content">
                <div className="communityPart_content__titlePart">
                    <p className="communityPart_content__titlePart--title">We love our community</p>
                    <div className="communityPart_content__titlePart--follow">
                        <img src={InstagramIcon} alt="instagramIcon" />
                        <p>Follow us in Instagram</p>
                    </div>
                </div>
                <div className="communityPart_content__images">
                    <div className="communityPart_content__images--bigImage">
                        <img src={BigImage} alt="" />
                    </div>
                    <div className="communityPart_content__images--smallImages">
                        <div>
                            <img src={SmallImage1} alt="smallImage1" className='communityPart_content__images--smallImages-img' />
                        </div>
                        <div>
                            <img src={SmallImage2} alt="smallImage2" className='communityPart_content__images--smallImages-img' />
                        </div>
                        <div>
                            <img src={SmallImage3} alt="smallImage3" className='communityPart_content__images--smallImages-img' />
                        </div>
                        <div>
                            <img src={SmallImage4} alt="smallImage4" className='communityPart_content__images--smallImages-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityPart;
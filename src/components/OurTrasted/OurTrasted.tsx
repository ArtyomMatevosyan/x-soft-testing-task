import GuaranteeIcon from '../../assets/icons/guaranteeIcon.png'
import Button from '../UI/Button/Button';
import OurTrastedSliderCard from './OurTrastedSliderCard';

const OurTrasted = () => {
    return (
        <div className="ourTrasted">
            <div className="ourTrasted_content">
                <div className="ourTrasted_content__guaranteePart">
                    <span>
                        <img src={GuaranteeIcon} alt="guaranteeIcon" />
                    </span>
                    <h3>Our Trusted Guarantee</h3>
                    <p>We stand behind our product and offer a 30-day, no questions asked, money back guarantee</p>
                    <Button>Shop now</Button>
                </div>
                <div className="ourTrasted_content__sliderPart">
                    <OurTrastedSliderCard />
                </div>
            </div>
        </div>
    )
}

export default OurTrasted;
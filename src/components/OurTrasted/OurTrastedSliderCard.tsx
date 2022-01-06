import OurTrastedSliderImage from '../../assets/images/ourTrastedCard-image.png'
import LeafIcon from '../../assets/icons/leaf.png'

const OurTrastedSliderCard = () => {
    return (
        <div className="ourTrastedSliderCard">
            <img src={OurTrastedSliderImage} alt="ourTrastedSliderImage" className='ourTrastedSliderCard_img' />
            <div className='ourTrastedSliderCard_content'>
                <div>
                    <img src={LeafIcon} alt="leafIcon" />
                </div>
                <p className='ourTrastedSliderCard_content__title'>All natural</p>
                <p className='ourTrastedSliderCard_content__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
        </div>
    )
}

export default OurTrastedSliderCard;
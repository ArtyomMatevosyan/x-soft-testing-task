import ArrowLeft from '../../../assets/icons/sliderArrow_left.svg';
import ArrowLeftSmall from '../../../assets/icons/arrow_left_small.svg';

const SliderArrowLeft = () => {
    return(
        <div className='sliderArrowLeft'>
            <img src={ArrowLeft} alt="ArrowLeft" />
            <img src={ArrowLeftSmall} alt="ArrowLeftSmall" />
        </div>
    )
}

export default SliderArrowLeft;
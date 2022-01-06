import LeftArrowIcon from '../../assets/icons/left-arrow.svg';
import RightArrowIcon from '../../assets/icons/right-arrow.svg';
import TreesIcon from '../../assets/icons/trees.svg';
import ColorPickerIcon from '../../assets/icons/color-picker.svg';
import OpenCollectiveIcon from '../../assets/icons/open-collective.svg';
import HomePageHeroSliderImage from '../../assets/images/homePageHero-sliderImage.png';
import Button from '../UI/Button/Button';
import HomePageHeroSlider from './HomePageHeroSlider/HomePageHeroSlider';

const HomePageHero = () => {
    return (
        <div className="homePageHero">
            <div className="homePageHero_content">
                <div className="homePageHero_content__slider">
                    <div className="homePageHero_content__slider__arrowLeft">
                        <img src={LeftArrowIcon} alt="leftArrowIcon" />
                    </div>
                    <div className="homePageHero_content__slider__info">
                        <h3>Set your pet at ease!</h3>
                        <div>
                            <span>
                                <img src={TreesIcon} alt='treesIcon' />
                            </span>
                            <p>Organic & Natural Ingradients</p>
                        </div>
                        <div>
                            <span>
                                <img src={ColorPickerIcon} alt='colorPickerIcon' />
                            </span>
                            <p>Lab-Tested</p>
                        </div>
                        <div>
                            <span>
                                <img src={OpenCollectiveIcon} alt='openCollectiveIcon' />
                            </span>
                            <p>Full-Spectrum</p>
                        </div>
                        <Button>Buy now</Button>
                    </div>
                    <div>
                        <img src={HomePageHeroSliderImage} alt='homePageHeroSliderImage' />

                    </div>
                    <div className="homePageHero_content__slider__arrowRight">
                        <img src={RightArrowIcon} alt="rightArrowIcon" />
                    </div>
                </div>
            </div>
            <HomePageHeroSlider />
        </div>
    )
}

export default HomePageHero
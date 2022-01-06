import CatImage from '../../assets/images/cat-image.png';
import DogImage from '../../assets/images/dog-image.png';
import DropIcon from '../../assets/icons/drop-opacity.svg';
import BigColorPickerIcon from '../../assets/icons/color-picker-big.svg';


const HomePageCards = () => {
    return (
        <div className="homePageCards">
            <div className="homePageCards_upperPart">
                <div>
                    <img src={CatImage} alt="catImage" />
                </div>
                <div className='homePageCards_upperPart__info'>
                    <div>
                        <img src={DropIcon} alt="dropIcon" />
                    </div>
                    <p className='homePageCards_upperPart__info--title'>Dosage Chart</p>
                    <p className='homePageCards_upperPart__info--text'>Are you looking for the correct dosage size of CBD oil for pet? </p>
                    <button className='homePageCards_button'>learn more</button>
                </div>
            </div>
            <div className="homePageCards_downPart">
                <div className='homePageCards_downPart__info'>
                    <div>
                        <img src={BigColorPickerIcon} alt="bigColorPickerIcon" />
                    </div>
                    <p className='homePageCards_upperPart__info--title'>Lab Tested / COA</p>
                    <p className='homePageCards_upperPart__info--text'>All Pet Hemp products are laboratory tested.
                        Please learn more here. </p>
                    <button className='homePageCards_button'>learn more</button>
                </div>
                <div>
                    <img src={DogImage} alt="dogImage" className='homePageCards_downPart__dogImage' />
                </div>
            </div>
        </div>
    )
}

export default HomePageCards;
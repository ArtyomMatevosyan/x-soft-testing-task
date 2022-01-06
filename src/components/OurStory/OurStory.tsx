import PatternImage from '../../assets/images/ourStory-bgImage.png';
import OurStoryImage from '../../assets/images/ourStory-image.png';
import ButtonSecondary from '../UI/Button/ButtonSecondary';

const OurStory = () => {
    return (
        <div className="ourStory">
            <div className="ourStory_content">
                <div className="ourStory_content__imgPart">
                    <img src={PatternImage} alt="" className='ourStory_content__imgPart__bgImage' />
                    <img src={OurStoryImage} alt="" className='ourStory_content__imgPart__image' />
                </div>
                <div className="ourStory_content__info">
                    <h3>Our story</h3>
                    <div className='ourStory_content__info__content'>
                        <p>Starting Pet Hemp Company was inspired by our family dog, Woody, a grey-haiinspired by our family dog, Woody, a grey-haiinspired by our family dog, Woody, a grey-hai    red labradoodle who graced our lives for over 13 years. We often referred to him as the “mayor” because he was so friendly with other animals. Woody’s best friend in the world was our cat Frankie. Every evening we would find the two of them playing together even though Woody was 90 pounds and Frankie was 12 pounds. This past summer Woody’s age began to catch up with him.</p>
                    </div>
                    <ButtonSecondary>Learn more</ButtonSecondary>
                </div>
            </div>
        </div>
    )
}

export default OurStory;
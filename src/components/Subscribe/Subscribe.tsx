import SubscribeImage from '../../assets/images/subscribe_image.png'
import ButtonSecondary from '../UI/Button/ButtonSecondary';

const Subscribe = () => {
    return(
        <div className="subscribe">
            <div className="subscribe_content">
                <img src={SubscribeImage} alt="" />
                <div className='subscribe_content__info'>
                    <p className='subscribe_content__info--title'>Subscribe to Newsletter</p>
                    <p className='subscribe_content__info--subtitle'>Subscribe to our newsletter & stay updated</p>
                    <div className='subscribe_content__info--emailPart'>
                        <input type="email" placeholder='Email'/>
                        <ButtonSecondary>Subscribe now</ButtonSecondary>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;
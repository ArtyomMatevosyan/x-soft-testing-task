import PetHempIcon from '../../assets/logo.svg';
import AmexIcon from '../../assets/icons/amex.svg';
import HzIcon from '../../assets/icons/hz.svg';
import Hz2Icon from '../../assets/icons/hz2.svg';
import JcbIcon from '../../assets/icons/jcb.svg';
import McIcon from '../../assets/icons/mc.svg';
import VisaIcon from '../../assets/icons/visa.svg';
import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import PinterestIcon from '../../assets/icons/pinterest-icon.svg'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content">
                <div className='footer_content__leftPart'>

                    <div className="footer_content__info">
                        <img src={PetHempIcon} alt="PetHempIcon" />
                        <p className='footer_content__info--companyName'>Pet Hemp Company © 2020 </p>
                        <div className='footer_content__info--cards'>
                            <img src={AmexIcon} alt="AmexIcon" />
                            <img src={HzIcon} alt="HzIcon" />
                            <img src={Hz2Icon} alt="Hz2Icon" />
                            <img src={JcbIcon} alt="JcbIcon" />
                            <img src={McIcon} alt="McIcon" />
                            <img src={VisaIcon} alt="VisaIcon" />
                        </div>
                        <p className='footer_content__info--aboutCompany'>Pet Hemp Company offers the most trusted and highest quality pet CBD products. Pet Hemp Company provides the highest quality ingredients, balance and consistent dosage, lab test results
                            and great reviews for their products.</p>
                    </div>
                    <div className="footer_content__contacts">
                        <p className="footer_content--subtitle">Contacts</p>
                        <p className="footer_content--listItem">Pet Hemp Company
                            7250 Bandini Blvd #207 Commerce, CA 90040</p>
                        <p className="footer_content--listItem">1-833-PET-CBD-1</p>
                        <p className="footer_content--listItem">1-833-738-2231</p>
                        <p className="footer_content--listItem">info@pethempco.com</p>
                        <div className='footer_content__contacts--icons'>
                            <img src={FacebookIcon} alt="FacebookIcon" />
                            <img src={PinterestIcon} alt="PinterestIcon" />
                        </div>
                    </div>
                </div>
                <div className="footer_content__products">
                    <p className="footer_content--subtitle">Product</p>
                    <p className="footer_content--listItem">Product List</p>
                    <p className="footer_content--listItem">Resources</p>
                    <p className="footer_content--listItem">Home Remedies</p>
                    <p className="footer_content--listItem">Wholesale</p>
                    <p className="footer_content--listItem">Affiliate</p>

                </div>
                <div className="footer_content__policy">
                    <p className="footer_content--subtitle">Policy</p>
                    <p className="footer_content--listItem">Return Policy</p>
                    <p className="footer_content--listItem">Privacy Policy</p>
                    <p className="footer_content--listItem">Shipping Policy</p>
                    <p className="footer_content--listItem">Money Back guarantee</p>
                    <p className="footer_content--listItem">Social Media</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
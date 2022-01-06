import ArrowDownIcon from '../../assets/icons/arrow-down.svg'

const PopularProductsUpperPart = () => {
    return (
        <div className="popularProductsUpperPart">
            <h3>Our Most Popular Products </h3>
            <div className="popularProductsUpperPart_content">
                <div className='popularProductsUpperPart_content__subtitles'>
                    <div className="popularProductsUpperPart_content__subTitle">Dog Treats</div>
                    <div className="popularProductsUpperPart_content__subTitle">Cat Treats</div>
                    <div className="popularProductsUpperPart_content__subTitle">CBD Tinctures</div>
                    <div className="popularProductsUpperPart_content__subTitle">CBD Capsules</div>
                </div>
                <div className="popularProductsUpperPart_content__select">
                    <span>Type of Pet</span>
                    <span>
                        <img src={ArrowDownIcon} alt="arrowDownIcon" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PopularProductsUpperPart
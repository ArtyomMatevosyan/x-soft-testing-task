import ReliefIcon from '../../assets/icons/relief.svg'

const ShopConcernCard = () => {
    return(
        <div className="cards">
            <div className="cards_img">
                <img src={ReliefIcon} alt="reliefIcon" />
            </div>
            <p className="cards_title">Relief</p>
        </div>
    )
}

export default ShopConcernCard;
import RibbonIcon from '../../assets/icons/ribbon.svg'

const KeyWaysPartCard = () => {
    return (
        <div className="keyWaysCard">
            <div>
                <img src={RibbonIcon} alt="ribbonIcon" />
            </div>
            <div className='keyWaysCard_content'>
                <p className='keyWaysCard_content__title'>Cancer & Tumors</p>
                <p className='keyWaysCard_content__text'>Cancer Treatment and Chemotherapy has many side effects that can be reduced with Pet Hemp CBD.</p>
            </div>
        </div>
    )
}

export default KeyWaysPartCard;
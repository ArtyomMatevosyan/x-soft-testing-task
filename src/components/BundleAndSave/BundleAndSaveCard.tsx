import BundleCardImage from '../../assets/images/BundlesCard.png'

const BundleAndSaveCard = () => {
    return (
        <div className="bundleAndSaveCard">
            <div className="bundleAndSaveCard_imgPart">
                <img src={BundleCardImage} alt="bundleCardImage" />
            </div>
            <div className="bundleAndSaveCard_content">
                <div className="bundleAndSaveCard_content__title">
                    <p>CBD Dog Treats + CBD Dog Treats</p>
                </div>
                <div className="bundleAndSaveCard_content__company">
                    <p>Pet Hemp Company</p>
                </div>
                <div className="bundleAndSaveCard_content__prices">
                    <div className="bundleAndSaveCard_content__prices--price">
                        <p>$ 39.95</p>
                        <p>Only $ 29.95</p>
                    </div>
                    <div className="bundleAndSaveCard_content__prices--sale">
                        <p>-20%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BundleAndSaveCard;
import { FC } from 'react';

type BundleAndSaveCardProps = {
    title: string,
    company: string,
    image: string,
    oldPrice: string,
    newPrice: string,
    sale: string
}

const BundleAndSaveCard: FC<BundleAndSaveCardProps> = ({ image, title, company, oldPrice, newPrice, sale }) => {
    return (
        <div className="bundleAndSaveCard">
            <div className="bundleAndSaveCard_imgPart">
                <img src={image} alt="" />
            </div>
            <div className="bundleAndSaveCard_content">
                <div className="bundleAndSaveCard_content__title">
                    <p>{title}</p>
                </div>
                <div className="bundleAndSaveCard_content__company">
                    <p>{company}</p>
                </div>
                <div className="bundleAndSaveCard_content__prices">
                    <div className="bundleAndSaveCard_content__prices--price">
                        <p>{oldPrice}</p>
                        <p>Only {newPrice}</p>
                    </div>
                    <div className="bundleAndSaveCard_content__prices--sale">
                        <p>{sale}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BundleAndSaveCard;
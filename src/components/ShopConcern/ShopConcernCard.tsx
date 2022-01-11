import { FC } from 'react';

type ShopConcernCardProps = {
    title: string,
    image: string,
}

const ShopConcernCard: FC<ShopConcernCardProps> = ({ title, image }) => {
    return (
        <div className="cards">
            <div className="cards_img">
                <img src={image} alt="reliefIcon" />
            </div>
            <p className="cards_title">{title}</p>
        </div>
    )
}

export default ShopConcernCard;
import { FC } from "react";

type PopularProductsCardProps = {
    image: string,
    title: string,
    price: string,
    companyName: string,
}

const PopularProductsCard: FC<PopularProductsCardProps> = ({ image, title, price, companyName }) => {
    return (
        <div className="card">
            <div className="card_imgPart">
                <img src={image} alt="" />
            </div>
            <h4>{title}</h4>
            <p className="card_companyName">{companyName}</p>
            <p className="card_price">{price}</p>
        </div>
    )
}

export default PopularProductsCard;
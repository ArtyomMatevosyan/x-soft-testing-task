import { FC } from "react"

type HomePageHeroSliderCardProps = {
    image: string,
    reviews: string,
    point: string,
}
const HomePageHeroSliderCard: FC<HomePageHeroSliderCardProps> = ({ image, reviews, point }) => {
    return (
        <div className="homePageHeroSliderCard">
            <img src={image} alt="" />
            <div className="homePageHeroSliderCard_excelentPoint">
                <span>Excelent</span>
                <div className="homePageHeroSliderCard_excelentPoint__point">
                    <img src={point} alt="" />
                </div>
            </div>
            <div className="homePageHeroSliderCard_reviews">
                <p>{reviews}</p>
            </div>
        </div>
    )
}

export default HomePageHeroSliderCard

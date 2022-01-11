import PopularProductsCard from "./PopularProductsCard";
import petHempData from '../../petHempData.json'
import Slider from "react-slick";
import { SlickArrowLeft, SlickArrowRight } from "../utils/SliderArrowFunctions";

const PopularProductsSlider = () => {

    const { products } = petHempData

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };
    return (
        <div className="popularProductsSlider">
            <Slider {...settings}>
                {products.map(({ image, title, price, companyName }, index) => (
                    <PopularProductsCard
                        image={image}
                        title={title}
                        companyName={companyName}
                        price={price}
                        key={index}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default PopularProductsSlider;
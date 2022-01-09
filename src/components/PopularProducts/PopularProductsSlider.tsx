import PopularProductsCard from "./PopularProductsCard";
import petHempData from '../../petHempData.json'
import Slider from "react-slick";


const PopularProductsSlider = () => {
    const { products } = petHempData
    // console.log(products)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
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
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="popularProductsSlider">

            <Slider {...settings}>
                {products.map(({ image, title, price, companyName }) => (
                    <PopularProductsCard
                        image={image}
                        title={title}
                        companyName={companyName}
                        price={price}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default PopularProductsSlider;
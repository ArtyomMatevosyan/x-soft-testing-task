import Slider from 'react-slick';
import petHempData from '../../../petHempData.json';
import HomePageHeroSliderCard from './HomePageHeroSliderCard';

const HomePageHeroSlider = () => {

    const {brandSlider} = petHempData

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1

                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="homePageHeroSlider">
            <Slider {...settings}>
                {brandSlider.map(({image, reviews, excelentPoint}, index)=>(
                    <HomePageHeroSliderCard 
                        image={image}
                        reviews={reviews}
                        point={excelentPoint}
                        key={index}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default HomePageHeroSlider
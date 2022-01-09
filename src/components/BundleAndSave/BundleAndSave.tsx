import BundleAndSaveCard from "./BundleAndSaveCard";
import petHempData from '../../petHempData.json'
import Slider from "react-slick";

const BundleAndSave = () => {
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
    const { bundleAndSave } = petHempData;
    return (
        <div className="BundleAndSave">
            <div className="BundleAndSave_content">
                <div className="BundleAndSave_content__titlePart">
                    <p>Bundle and save</p>
                </div>
                <div className="BundleAndSave_content__sliderPart">
                    {bundleAndSave.map(() => (
                        <Slider {...settings}>
                                <BundleAndSaveCard />
                        </Slider>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BundleAndSave;
import BundleAndSaveCard from "./BundleAndSaveCard";
import petHempData from '../../petHempData.json'
import Slider from "react-slick";
import { SlickArrowLeft, SlickArrowRight } from "../utils/SliderArrowFunctions";

const BundleAndSave = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
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
          <Slider {...settings}>
            {bundleAndSave.map(({ newPrice, oldPrice, company, title, image, sale }, index) => (
              <BundleAndSaveCard
                newPrice={newPrice}
                oldPrice={oldPrice}
                company={company}
                title={title}
                image={image}
                sale={sale}
                key={index}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default BundleAndSave;
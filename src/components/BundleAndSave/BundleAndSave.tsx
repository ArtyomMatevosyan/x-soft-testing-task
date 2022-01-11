import BundleAndSaveCard from "./BundleAndSaveCard";
import petHempData from '../../petHempData.json'
import Slider from "react-slick";
import { ReactComponent as SliderArrowLeft } from '../../assets/icons/sliderArrow_left.svg';
import { ReactComponent as SliderArrowRight } from '../../assets/icons/sliderArrow_right.svg';

const BundleAndSave = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <SliderArrowLeft />,
    nextArrow: <SliderArrowRight />,
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
            {bundleAndSave.map(() => (
              <BundleAndSaveCard />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default BundleAndSave;
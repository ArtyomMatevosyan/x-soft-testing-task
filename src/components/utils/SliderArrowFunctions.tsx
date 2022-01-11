import SliderArrowLeft from '../UI/SliderArrowLeft/SliderArrowLeft';
import SliderArrowRight from '../UI/SliderArrowRight/SliderArrowRight';

export const SlickArrowLeft = ({ children, currentSlide, slideCount, ...props }: any) => (
	<span
		{...props}
		className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
		aria-hidden='true'
		aria-disabled={currentSlide === 0 ? true : false}>
		{children ? children : <SliderArrowLeft />}
	</span>
);

export const SlickArrowRight = ({ children, currentSlide, slideCount, ...props }: any) => (
	<span
		{...props}
		className={
			'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
		}
		aria-hidden='true'
		aria-disabled={currentSlide === slideCount - 1 ? true : false}>
		{children ? children : <SliderArrowRight />}
	</span>
);
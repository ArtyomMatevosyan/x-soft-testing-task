import PopularProductsSlider from "./PopularProductsSlider";
import PopularProductsUpperPart from "./PopularProductsUpperPart";

const PopularProducts = () => {
    return (
        <div className="popularProducts">
            <div className="popularProducts_content">
                <PopularProductsUpperPart />
                <PopularProductsSlider />
            </div>
        </div>
    )
}

export default PopularProducts;
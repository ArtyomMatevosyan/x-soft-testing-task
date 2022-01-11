import ShopConcernCard from "./ShopConcernCard";
import petHempData from '../../petHempData.json'

const ShopConcern = () => {

    const { shopByConcern } = petHempData;

    return (
        <div className="shopConcern">
            <div className="shopConcern_content">
                <h3>Shop by Concern</h3>
                <div className="shopConcern_content__cards">
                    {shopByConcern.map(({ title, image }, index) => (
                        <ShopConcernCard
                            title={title}
                            image={image}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopConcern;
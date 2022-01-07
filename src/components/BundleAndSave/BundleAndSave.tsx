import BundleAndSaveCard from "./BundleAndSaveCard";

const BundleAndSave = () => {
    return (
        <div className="BundleAndSave">
            <div className="BundleAndSave_content">
                <div className="BundleAndSave_content__titlePart">
                    <p>Bundle and save</p>
                </div>
                <div className="BundleAndSave_content__sliderPart">
                    <BundleAndSaveCard />
                </div>
            </div>
        </div>
    )
}

export default BundleAndSave;
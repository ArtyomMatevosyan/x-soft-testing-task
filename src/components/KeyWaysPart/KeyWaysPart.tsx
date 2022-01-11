import KeyWaysPartCard from "./KeyWaysPartCard";
import petHempData from '../../petHempData.json';

const KeyWaysPart = () => {

    const { keyWays } = petHempData;

    return (
        <div className="keyWaysPart">
            <div className="keyWaysPart_content">
                <div className="keyWaysPart_content__titlePart">
                    <p>Key Ways That CBD Can Help</p>
                </div>
                <div className="keyWaysPart_content__keys">
                    {keyWays.map(({ title, image, description }, index) => (
                        <KeyWaysPartCard 
                            title={title} 
                            image={image} 
                            description={description}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KeyWaysPart;
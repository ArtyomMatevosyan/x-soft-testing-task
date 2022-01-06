import KeyWaysPartCard from "./KeyWaysPartCard";

const KeyWaysPart = () => {
    return(
        <div className="keyWaysPart">
            <div className="keyWaysPart_content">
                <div className="keyWaysPart_content__titlePart">
                    <p>Key Ways That CBD Can Help</p>
                </div>
                <div className="keyWaysPart_content__keys">
                    <KeyWaysPartCard />
                </div>
            </div>
        </div>
    )
}

export default KeyWaysPart;
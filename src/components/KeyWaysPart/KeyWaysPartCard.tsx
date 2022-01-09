import { FC } from 'react';

type KeyWaysPartCardProps = {
    title: string,
    description: string,
    image: string
}

const KeyWaysPartCard: FC<KeyWaysPartCardProps> = ({title,description,image}) => {
    return (
        <div className="keyWaysCard">
            <div>
                <img src={image} alt="ribbonIcon" />
            </div>
            <div className='keyWaysCard_content'>
                <p className='keyWaysCard_content__title'>{title}</p>
                <p className='keyWaysCard_content__text'>{description}</p>
            </div>
        </div>
    )
}

export default KeyWaysPartCard;
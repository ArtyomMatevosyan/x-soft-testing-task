import { FC } from "react";

const ButtonSecondary: FC = ({children}) => {
    return (
        <button className="buttonSecondary">
            {children}
        </button>
    )
}

export default ButtonSecondary;
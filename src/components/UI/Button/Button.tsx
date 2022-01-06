import { FC } from "react";


const Button: FC = ({ children }) => {
    return (
        <button className="button">
            {children}
        </button>
    )
}

export default Button;

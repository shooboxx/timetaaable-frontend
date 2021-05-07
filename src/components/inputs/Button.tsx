import React from 'react';

interface ButtonProps {
    buttonType: String;
    title: String;
    // link: String,
    // disabledFlag: Boolean,
    onclick: any

}
const getButtonStyle = (buttonType : String) => {
    return buttonType === 'primary'? 'btn-primary' 
    : buttonType === 'secondary'? 'btn-secondary' 
    : buttonType === 'warning'? 'btn-warning' 
    : buttonType === 'comp' ? 'btn-comp' : 'primary'
};

const Button: React.FC<ButtonProps>  = ({ 
    buttonType = 'primary',
    title,
    onclick,
    // link,
    // disabledFlag = false,
    ...props


}) => {
    let btnStyleClass = getButtonStyle(buttonType);

    return (
        <button className={`${btnStyleClass} btn`} onClick={onclick}>
            {title}
        </button>
    )
};
export { Button };
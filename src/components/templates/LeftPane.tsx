import React from 'react';

interface PaneProps {
    styleNames?: String
}

const LeftPane: React.FC<PaneProps> = ({
    styleNames,
    ...props
}) => {


    return (
        <div className={`pane-left ${styleNames}`}>
            {props.children}
        </div>

    )
};
export { LeftPane};
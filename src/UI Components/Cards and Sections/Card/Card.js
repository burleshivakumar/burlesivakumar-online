import React, { } from "react";

const Card = ({ headerText, children }) => (
    <div className='card'>
        {headerText && <h3>{headerText}</h3>}
        {children}
    </div>
)

export default Card;
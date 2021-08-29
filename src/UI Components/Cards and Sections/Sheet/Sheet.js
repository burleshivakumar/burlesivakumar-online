import React, { } from "react";

import './sheet.scss';

export const Sheet = ({ headerText, children }) => (
    <div className='sheet'>
        {headerText && <h3>{headerText}</h3>}
        {children}
    </div>
)

export default Sheet;
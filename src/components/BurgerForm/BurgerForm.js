import React from 'react';
import './BurgerForm.css'

function BurgerForm(props) {
    return <div className="BurgerForm">
            <p>{props.getTotal()}</p>
            {props.children}
            </div>
}

export default BurgerForm;
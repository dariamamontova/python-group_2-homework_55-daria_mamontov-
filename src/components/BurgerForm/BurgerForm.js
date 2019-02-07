import React from 'react';
import './BurgerForm.css';

function BurgerForm(props) {
    return <div className="BurgerForm card w-50 my-5 py-3 px-5 d-inline-block align-center">
            <p className="py-2">CURRENT PRICE: <b>{props.getTotal()}</b></p>
            {props.children}
            </div>
}

export default BurgerForm;

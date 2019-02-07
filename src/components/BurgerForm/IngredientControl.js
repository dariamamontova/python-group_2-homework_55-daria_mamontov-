import React from 'react';
import './BurgerForm.css';


function IngredientControl(props) {
    return <div className="row">
        <div className="col-sm-6 text-uppercase mt-2">
        <p><b>{props.name}</b></p>
            </div>
        <div className="col-sm-6">
        <button type="submit" class="btn btn-warning px-3 mx-2" onClick={props.onAddIngredient}>MORE</button>
        <button type="submit" disabled={props.isRemoveButtonDisabled} class="btn btn-danger px-4" onClick={props.onRemoveIngredient}>LESS</button>
        </div>
    </div>
}


export default IngredientControl;

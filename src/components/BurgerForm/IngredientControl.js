import React from 'react';


function IngredientControl(props) {
    return <div>
        <p>{props.name}</p>
        <button onClick={props.onAddIngredient}>add</button>
        <button onClick={props.onRemoveIngredient}>remove</button>
    </div>
}


export default IngredientControl;

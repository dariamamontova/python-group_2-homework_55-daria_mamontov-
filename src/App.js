import React, {Component} from 'react';
import './App.css';
import Burger from './components/Burger/Burger';

const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат'},
    {name: 'cheese', price: 20, label: 'Сыр'},
    {name: 'meat', price: 30, label: 'Мясо'},
    {name: 'bacon', price: 20, label: 'Бекон'}
];


class App extends Component {
    state = {
        ingredients: {
            salad: {count: 1, total: 0},
            cheese: {count: 2, total: 0},
            meat: {count: 2, total: 0},
            bacon: {count: 1, total: 0}
        }
    };



    render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default App;

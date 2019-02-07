import React, {Component} from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import IngredientControl from './components/BurgerForm/IngredientControl';
import BurgerForm from './components/BurgerForm/BurgerForm';

const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат'},
    {name: 'cheese', price: 20, label: 'Сыр'},
    {name: 'meat', price: 30, label: 'Мясо'},
    {name: 'bacon', price: 20, label: 'Бекон'}
];


class App extends Component {
    state = {
        ingredients: {
            salad: {count: 0, total: 0, label: 'Салат', price: 5},
            cheese: {count: 0, total: 0, label: 'Сыр', price: 20},
            meat: {count: 0, total: 0, label: 'Мясо', price: 30},
            bacon: {count: 0, total: 0, label: 'Бекон', price: 20}
        },
    };

    addIngredient = (name) => {
        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;
        ingredient.count += 1;
        ingredient.total = ingredient.count * price;
        let ingredients = {...this.state.ingredients};

        ingredients[name] = ingredient;
        let state = {...this.state};
        state.ingredients = ingredients;
        this.setState(state);
    };

    removeIngredient = (name) => {
        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;
        if (ingredient.count > 0) {
            ingredient.count -= 1;
        }
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;

        this.setState(state);
    };

    getTotal = () => {
        let ingredients = {...this.state.ingredients};
        let sum = 0;
        Object.keys(ingredients).map(item => {
            sum += ingredients[item].total
        })
        return sum;
    };


    render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                <BurgerForm getTotal={this.getTotal}>
                    {availableIngredients.map(item => <IngredientControl name={item.name}
                     onAddIngredient={() => this.addIngredient(item.name)}
                     onRemoveIngredient={() => this.removeIngredient(item.name)}/>)}
                </BurgerForm>
            </div>
        );
    }
}

export default App;


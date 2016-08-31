var React = require('react');
var MealPlannerActions = require('../actions/MealPlannerActions');

// Flux meal view
var Ingredient = React.createClass({

    // Update servings
    updateServings: function(event) {
        MealPlannerActions.updateServings(this.props.ingredient.sku, parseFloat(event.target.value));
    },

    // Render meal view
    render: function() {
        var ingredient = this.props.ingredient;

        return (
            <li className="col s4" key={ingredient.name}>
                <h4>{ingredient.name}</h4>
                <input type="value" defaultValue={ingredient.servings} onChange={this.updateServings} />
                <p>{ingredient.calories * ingredient.servings} cal</p>
                <p>{ingredient.carbs * ingredient.servings} carbs</p>
                <p>{ingredient.protein * ingredient.servings} protein</p>
                <p>{ingredient.fat * ingredient.servings} fat</p>
            </li>

        )
    }
});

module.exports = Ingredient;

var React = require('react');
var MealPlannerActions = require('../actions/MealPlannerActions');

// Flux meal view
var Meal = React.createClass({

    // Render meal view
    render: function() {
        var ingredients = this.props.meal.ingredients;
        ingredients.map(function(ingredient){
                console.log(ingredient);

        });
        return (
            <div className="meal">
                <h1>{this.props.meal.name}</h1>
                <p>{this.props.meal.description}</p>
                <ul>
                    {ingredients.map(function(ingredient){
                        return (
                            <li key={ingredient.name}>
                                <h1>{ingredient.name}</h1>
                                <p>{ingredient.calories} cal</p>
                                <p>{ingredient.carbs} carbs</p>
                                <p>{ingredient.protein} protein</p>
                                <p>{ingredient.fat} fats</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
});

module.exports = Meal;

var React = require('react');
var MealPlannerActions = require('../actions/MealPlannerActions');
var Ingredient = require('./Ingredient.react');
var MacroTotals = require('./MacroTotals.react');

// Flux meal view
var Meal = React.createClass({


    // Render meal view
    render: function() {
        var meal = this.props.meal;
        var ingredients = meal.ingredients;
        var self = this;

        return (
            <div className="meal center-align card-panel cyan lighten-4 blue-grey-text text-darken-2">
            <div className="col s12">
                <h4 className="">{meal.name}</h4>
                <p>{meal.description}</p>
                <ul className="row">
                    {ingredients.map(function(ingredient){
                        return (
                            <Ingredient key={ingredient.name} ingredient={ingredient} />
                        )
                    })}
                </ul>
                </div>
                <MacroTotals meal={meal} />
            </div>
        )
    }
});

module.exports = Meal;

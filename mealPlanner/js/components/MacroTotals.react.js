var React = require('react');
var MealPlannerActions = require('../actions/MealPlannerActions');
var _ = require('underscore');

var MacroTotals = React.createClass({
    render: function() {
        var ingredients = this.props.meal.ingredients;

        function getTotal(type) {
            return ingredients
                        .map(function(ingredient) { return ingredient[type] * ingredient.servings; })
                        .reduce(function(p, c) { return p + c; });
        }

        var totalCals = getTotal('calories'), totalCarbs = getTotal('carbs');
        var totalProtein = getTotal('protein'), totalFat = getTotal('fat');

        return(
            <div>
                Totals: Calories = {totalCals} Carbs = {totalCarbs} Protein = {totalProtein} Fat = {totalFat}
            </div>
        )
    }
});

module.exports = MacroTotals;

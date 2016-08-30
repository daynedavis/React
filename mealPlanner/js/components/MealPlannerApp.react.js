var React = require('react');
var MealStore = require('../stores/MealStore');
var Meal = require('./Meal.react');

function getMealPlannerState() {
    return {
        meal: MealStore.getMeal()
    };
}

// Define main Controller View
var MealPlannerApp = React.createClass({

    // Get initial state from stores
    getInitialState: function() {
        return getMealPlannerState();
    },

    // Add change listeners to stores
    componentDidMount: function() {
        MealStore.addChangeListener(this._onChange);
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
        MealStore.removeChangeListener(this._onChange);
    },

    // Render out child components, passing state via props
    render: function() {
        return (
            <div className="meal-planner-app">
                <Meal meal={this.state.meal} />
            </div>
        );
    },

    // Method to setState based upon Store changes
    _onChange: function() {
        this.setState(getMealPlannerState());
    }

});

module.exports = MealPlannerApp;

var MealPlannerActions = require('../actions/MealPlannerActions');

module.exports = {

    // Load mock meal data from localStorage into MealStore via Action
    getMealData: function() {
        var data = JSON.parse(localStorage.getItem('meal'));
        MealPlannerActions.receiveMeal(data);
    }

};

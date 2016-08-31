var AppDispatcher = require('../dispatcher/AppDispatcher');
var MealPlannerConstants = require('../constants/MealPlannerConstants');

// Define actions object
var MealPlannerActions = {

    // Receive initial meal data
    receiveMeal: function(data) {
        AppDispatcher.handleAction({
            actionType: MealPlannerConstants.RECEIVE_DATA,
            data: data
        })
    },

    // Update servings
    updateServings: function(sku, servings) {
        if (!servings) {
            servings = 0;
        }
        AppDispatcher.handleAction({
            actionType: MealPlannerConstants.UPDATE_SERVINGS,
            sku: sku,
            servings: servings
        })
    }

};

module.exports = MealPlannerActions;

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
    }
};

module.exports = MealPlannerActions;

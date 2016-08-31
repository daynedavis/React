var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MealPlannerConstants = require('../constants/MealPlannerConstants');
var _ = require('underscore');

// Define inital data points
var _meal = {};

function loadMealData(data) {
    _meal = data[0];
}

// Update servings
function updateServings(sku, servings) {
    var key = _.findIndex(_meal.ingredients, function(item) {return item.sku == sku});
    _meal.ingredients[key].servings = servings;
}

var MealStore = _.extend({}, EventEmitter.prototype, {

    // Return Meal data
    getMeal: function() {
        return _meal;
    },

    // Emit Change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {

        // Respond to REVEIVE_DATA action
        case MealPlannerConstants.RECEIVE_DATA:
            loadMealData(action.data);
            break;

        // Respond to UPDATE_SERVINGS action
        case MealPlannerConstants.UPDATE_SERVINGS:
            updateServings(action.sku, action.servings);
            break;

        default:
            return true;

    }

    // If action was responded to, emit change event
    MealStore.emitChange();

    return true;

});

module.exports = MealStore;

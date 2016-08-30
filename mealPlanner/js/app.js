window.React = require('react');
var Render = require('react-dom').render;
var MealData = require('./MealData');
var MealAPI = require('./utils/MealAPI');
var MealPlannerApp = require('./components/MealPlannerApp.react');

// Load Mock Meal Data into localStorage
MealData.init();

// Load Mock API Call
MealAPI.getMealData();

// Render MealPlannerApp Controller View
Render(
    <MealPlannerApp />,
    document.getElementById('meal-planner')
);

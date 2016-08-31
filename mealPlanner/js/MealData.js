module.exports = {
    // Load Mock Meal Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('meal', JSON.stringify([
            {
                id: '0011001',
                name: 'Chicken with Rice and Broccoli',
                image: 'chickenRiceBrocolli.png',
                description: 'Staple bodybuilding meal consisting of a protein a starch and a veggie.',
                ingredients: [
                    {
                        sku: '100001',
                        name: 'Chicken',
                        servings: 1,
                        servingSize: '4oz',
                        calories: 200,
                        carbs: 0,
                        protein: 20,
                        fat: 5
                    },
                    {
                        sku: '100002',
                        name: 'Rice',
                        servings: 1,
                        servingSize: '1 cup',
                        calories: 150,
                        carbs: 20,
                        protein: 0,
                        fat: 3
                    },
                    {
                        sku: '100003',
                        name: 'Broccoli',
                        servings: 1,
                        servingSize: '1 cup',
                        calories: 50,
                        carbs: 10,
                        protein: 0,
                        fat: 0
                    }
                ]
            }
        ]));
    }

};

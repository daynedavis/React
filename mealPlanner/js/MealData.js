module.exports = {
    // Load Mock Meal Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('meal', JSON.stringify([
            {
                id: '0011001',
                name: 'Chicken with Rice and Brocolli',
                image: 'chickenRiceBrocolli.png',
                description: 'Staple bodybuilding meal consisting of a protein a starch and a veggie.',
                ingredients: [
                    {
                        'name': 'Chicken',
                        'servingSize': '4oz',
                        'calories': 200,
                        'carbs': 0,
                        'protein': 20,
                        'fat': 5
                    },
                    {
                        'name': 'Rice',
                        'servingSize': '1 cup',
                        'calories': 150,
                        'carbs': 20,
                        'protein': 0,
                        'fat': 3
                    },
                    {
                        'name': 'Brocolli',
                        'servingSize': '1 cup',
                        'calories': 50,
                        'carbs': 10,
                        'protein': 0,
                        'fat': 0
                    }
                ]
            }
        ]));
    }

};

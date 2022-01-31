var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var sushiMenu = {
    dishes: [
        {
            id: 'a1',
            name: 'Maguro Nigiri',
            price: 70,
            description: 'Rice fingers with red tuna tataki with foie gras and a drizzle of teriyaki. 5 pcs',
            category: 'firsts'
        }
    ],
    addDish: function (name, price, description, category) {
        var id = uid();
        this.dishes.push({ id: id, name: name, price: price, description: description, category: category });
    },
    removeDish: function (id) {
        this.dishes = this.dishes.filter(function (dish) { return dish.id !== id; });
    },
    updateDish: function (id, newDish) {
        var index = this.dishes.findIndex(function (dish) { return dish.id === id; });
        if (index >= 0) {
            this.dishes[index] = newDish;
        }
    }
};
sushiMenu.addDish('Tuna Tartare', 66, 'Spicy tuna, tempura flakes, nori sheets, seared avocado, chives and cucumber. Served with spiced soy sauce.', 'firsts');
sushiMenu.removeDish('a1');
console.log(sushiMenu);

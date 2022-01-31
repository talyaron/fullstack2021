const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

    interface Menu {

        dishes: Array<Dish>;

        addDish?(name:string, price:number, description:string, category:string)
        removeDish?(id)
        updateDish(id, newDish)
        renderDishes?(list,domElement)
    }

    interface Dish {

        id: string;
        name: string,
        price: number,
        description: string,
        category: string,

    }

    let sushiMenu: Menu = {

        dishes: [
            {
                id: 'a1',
                name: 'Maguro Nigiri',
                price: 70,
                description: 'Rice fingers with red tuna tataki with foie gras and a drizzle of teriyaki. 5 pcs',
                category: 'firsts'
            }
        ],

        addDish(name, price, description, category){
            let id = uid();
            this.dishes.push({id, name, price, description, category})
        },

        removeDish(id){
            this.dishes = this.dishes.filter(dish => dish.id !== id);
        },

        updateDish(id, newDish) {

            const index = this.dishes.findIndex((dish) => dish.id === id);

            if (index >= 0) {
              this.dishes[index] = newDish;
            }

        },


    }

  
sushiMenu.addDish('Tuna Tartare', 66, 'Spicy tuna, tempura flakes, nori sheets, seared avocado, chives and cucumber. Served with spiced soy sauce.', 'firsts')
sushiMenu.removeDish('a1');


console.log(sushiMenu);

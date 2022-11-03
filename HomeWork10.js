class Sweets {
    constructor(name, amount, weightGram, priceRub) {
        this.name = name;
        this.amount = amount;
        this.weightGram = weightGram;
        this.priceRub = priceRub
    }
    getWeight() {
        return this.weightGram * this.amount;
    }
}
class ChocolateBar extends Sweets {
    constructor(name, amount, weightGram, priceRub, chocolateType, hasNuts, porosity) {
        super(name, amount, weightGram, priceRub);
        this.chocolateType = chocolateType;
        this.hasNuts = hasNuts;
        this.porosity = porosity;
    }
}
class Cookies extends Sweets {
    constructor(name, amount, weightGram, priceRub, dough, additive) {
        super(name, amount, weightGram, priceRub);
        this.dough = dough;
        this.additive = additive
    }
}
class Candies extends Sweets {
    constructor(name, amount, weightGram, priceRub, typeOfCandy, filling, glaze) {
        super(name, amount, weightGram, priceRub);
        this.typeOfCandy = typeOfCandy;
        this.filling = filling;
        this.glaze = glaze;
    }
}

class SweetsFactory {
    createChocolateBar(name) {
        if (name === 'Алёнка') {
            return new ChocolateBar(name, 1, 100, 8, 'milk', false, false)
        }
        if (name === 'Milka') {
            return new ChocolateBar(name, 2, 100, 12, 'white', true, true)
        }
        if (name === 'Nestle') {
            return new ChocolateBar(name, 1, 100, 10, 'dark', true, false)
        }
    }
    createCookies(name) {
        if (name === 'Юбилейное') {
            return new Cookies(name, 3, 300, 6, 'shortbread', 'raisin')
        }
        if (name === 'Ушки') {
            return new Cookies(name, 1, 200, 5, 'puff', 'cinnamon')
        }
        if (name === 'Яшкино') {
            return new Cookies(name, 2, 250, 13, 'biscuit', 'cherry')
        }
    }
    createCandies(name) {
        if (name === 'Capri') {
            return new Candies(name, 15, 3, 15, 'caramel', 'none', false)
        }
        if (name === 'Chupa Chups') {
            return new Candies(name, 6, 6, 20, 'lollipop', 'none', false)
        }
        if (name === 'Tine Eggs') {
            return new Candies(name, 10, 4, 11, 'chocolate', 'almond', true)
        }
        if (name === 'Jelly') {
            return new Candies(name, 2, 150, 13, 'jelly', 'jam', false)
        }
    }
};

class Present {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getWeight() {
        return this.items.map(item => item.getWeight()).reduce((a, b) => a + b)
    }

    getSortFromAtoZ() {
        return this.items.slice().sort((a, b) => a.name > b.name ? 1 : -1)
    }

    filterByPrice(min, max) {
        if (typeof min === "number" && typeof max === "number" && min < max) {
            return this.items.filter(item => item.priceRub >= min && item.priceRub <= max)
        } else {
            return 'Check your inputs'
        }
    }
}

const newYearsPresent = new Present()
const factory = new SweetsFactory();
newYearsPresent.add(factory.createChocolateBar('Алёнка'));
newYearsPresent.add(factory.createChocolateBar('Milka'));
newYearsPresent.add(factory.createChocolateBar('Nestle'));
newYearsPresent.add(factory.createCookies('Юбилейное'));
newYearsPresent.add(factory.createCookies('Ушки'));
newYearsPresent.add(factory.createCookies('Яшкино'));
newYearsPresent.add(factory.createCandies('Capri'));
newYearsPresent.add(factory.createCandies('Chupa Chups'));
newYearsPresent.add(factory.createCandies('Tine Eggs'));
newYearsPresent.add(factory.createCandies('Jelly'));

console.log(newYearsPresent.getWeight());
console.log(newYearsPresent.getSortFromAtoZ());
console.log(newYearsPresent.filterByPrice(7, 11));
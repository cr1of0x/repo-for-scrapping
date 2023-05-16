const FRUIT = "apple";
const FRUITS = ["banana", "orange", "kiwi"];

const fruitAdder = (name, names) => {
    names.push(name);
    console.log('Fruit Added:', name, 'All Fruits:', names);
    return true;
}

fruitAdder(FRUIT, FRUITS);

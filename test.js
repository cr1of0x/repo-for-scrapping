const NAME = "Alex";
const NAMES = ["Max", "Bob", "Tom"];

const nameAdder = (name, names) => {
    names.push(name);
    console.log('Name Added:', name, 'All Names:', names);
    return true;
}

nameAdder(NAME, NAMES);
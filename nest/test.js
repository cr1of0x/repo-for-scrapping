const AGE = 20;
const AGES = [22, 17, 15];

const ageAdder = (name, names) => {
    names.push(name);
    console.log('Age Added:', name, 'All Ages:', names);
    return true;
}

ageAdder(AGE, AGES);
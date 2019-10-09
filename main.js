console.log('Siemanko');
const name='Jakub';
const age=75;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

const header = document.querySelector ('.main__header');
console.log(header.innerHTML);

header.innerHTML = 'Siema JS!'

const about = document.querySelector ('.about__paragraph--js');
about.innerHTML = `Nazywam się ${name} i mam ${age} lat`;

if ('javascript' != 'java') {
    console.log('to prawda!')
}


if (age < 20) {
    console.log('masz mniej niz 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz wiecej niz 20 lat ale mniej niz 30');
} else {
    console.log('jestes 31+');
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
    break;
    case 30:
        console.log('masz równo 30 lat');
    break;
    default:
        console.log(`masz ${age} lat`);
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
    x = x + 3
    console.log(`tradycyjnie ${x}`);
    return x*7
}
console.log(calculate(2));

const calculateFat = x => (x+3)*7;
console.log(calculateFat(2));
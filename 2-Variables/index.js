console.log('Hoisted before assigment: ', hoisted);
var hoisted = 'this got hoisted';
console.log('Hoisted after assigment: ', hoisted);

try {
    console.log(notHoisted1);
} catch (err) {
    console.log('Not hoisted1 with error: ', err.message)
}

let notHoisted1 = 5;
console.log('Not hoisted1 after assigment: ', notHoisted1);

try {
    console.log(notHoisted2)
} catch (err) {
    console.log('Not hoisted2 with error: ', err.message);
}

const notHoisted2 = [1,2,3];

console.log('Not hoisted2 after assigment: ', notHoisted2);

try {
    notHoisted2 = 'new value';
} catch (err) {
    console.log('The hoisted 2 was not able to be changed');
}

notHoisted2.push(2);

console.log('notHoisted2 updated. Now is: ', notHoisted2);
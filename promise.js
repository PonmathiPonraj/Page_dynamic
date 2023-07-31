console.log('person1: shows ticket');
console.log('person2: shows ticket');
const promiseWifeBringingTics = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});
const getPopcorn = promiseWifeBringingTics.then((t) => {
    console.log('wife: i have the tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve('${t} popcorn'));
});
const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve('${t} butter'));
});
const getColdDrinks = getButter.then((t) => {
    console.log(`husband: i got some on popcorn`);
    console.log('wife: Super Dear it will be delicious');
    return new Promise((resolve, reject) => resolve('${t} butter'));
});
getColdDrinks.then((t) => console.log(t));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
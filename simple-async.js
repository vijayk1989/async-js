console.log('Before');
// Do some work
const user = loadUser(1);
console.log(user);
console.log('After');

function loadUser(id) {
    setTimeout(() => {
        console.log('Loading from database');
        return { userId: id, name: 'Vijaykumar' };
    }, 2000);
}

// JS Timeout example
// setTimeout(() => {
//     console.log('This will happen after 1 sec')
// }, 1000);
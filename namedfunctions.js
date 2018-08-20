console.log("Before");
loadUser(1, displayUser);
console.log("After");

function displayUser(user) {
    getUserAddresses(user.id, displayUserAddress);
}

function displayUserAddress(address) {
    console.log('Adress', address);
    getUserCity(add[0], displayUserCity);
}

function displayUserCity(city) {
    console.log('City', city);
}

function loadUser(id, callback) {
    setTimeout(() => {
        console.log("Loading User...");
        callback({ id: id, name: 'Vijaykumar' });
    }, 2000);
}

function getUserAddresses(userId, callback) {
    setTimeout(() => {
        console.log("Reading User data...");
        callback(['add1', 'add2', 'add3']);
    }, 2000);
}

function getUserCity(userAdd, callback) {
    setTimeout(() => {
        console.log("Reading user city...");
        callback('city1');
    }, 2000);
}
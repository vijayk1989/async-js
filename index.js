console.log("Before");
loadUser(1, function (user) {
    console.log('User', user);
    getUserAddresses(user.id, function (add) {
        console.log('Address\'s', add);
        getUserCity(add[0], function(city) {
            console.log('City', city);       
        });
    });
});
console.log("After");

function loadUser(id, callback) {
    setTimeout(() => {
        console.log("Loading User...");
        callback({ id: id, name: 'Vijaykumar' });
    }, 200);
}

function getUserAddresses(userId, callback) {
    setTimeout(() => {
        console.log("Reading User data...");
        callback(['add1', 'add2', 'add3']);
    }, 200);
}

function getUserCity(userAdd, callback) {
    setTimeout(() => {
        console.log("Reading user city...");
        callback('city1');
    }, 200);
}
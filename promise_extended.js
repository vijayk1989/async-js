// console.log("Before");
// // loadUser(1, function (user) {
// //     console.log('User', user);
// //     getUserAddresses(user.id, function (add) {
// //         console.log('Address\'s', add);
// //         getUserCity(add[0], function (city) {
// //             console.log('City', city);
// //         });
// //     });
// // });
// loadUser(1)
// .then((user) => {
//     console.log("User", user);
//     getUserAddresses(user.id);
// })
// .then((add) => {
//     console.log("Address", add);
//     getUserCity(add);
// })
// .then((city) => {
//     console.log("City", city);
// })
// .catch(err => console.log('error', err.message))
// console.log("After");

// function loadUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Loading User...");
//             resolve({ id: id, name: 'Vijaykumar' });
//         }, 2000);
//     });
// }

// function getUserAddresses(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Reading User data...");
//             resolve(['add1', 'add2', 'add3']);
//         }, 2000);
//     });
// }

// function getUserCity(userAdd) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Reading user city...");
//             resolve('city1');
//         }, 2000);
//     });
// }


console.log('Before');
getUser(1)
.then((user) => getRepositories(user.gitHubUsername))
.then((repos) => getCommits(repos[0]))
.then((commits) => console.log('commits', commits))
.catch(err => console.log('Error', err.message));
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}
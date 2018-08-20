const p1 = new Promise((resolve, reject) => {    
    setTimeout(() => {
        reject(new Error('message'));
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));

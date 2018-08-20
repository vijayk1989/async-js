const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // reject(new Error('Something went wrong...'));
        resolve('Yay promises are super awesome...');
    }, 2000);
});

p.then(function(result) {
    console.log('Result', result);
}).catch(function(err) {
    console.log('Error', err.message);
});
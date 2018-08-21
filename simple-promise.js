const p = new Promise((resolve, reject) => {
    // Do some async work
    const val = 102;
    setTimeout(() => {
        //Resolve it
        if (val > 105) {
            resolve({ id: 1, name: 'Vijaykumar' });
        } else {
            //Reject
            reject(new Error('Something went wrong'));
        }
        
    }, 2000);
});

// Result is the value in resolve
p
.then((result) => console.log(result))
.catch((err) => console.log(err.message));


console.log("Before");
// Consuming a callback function
loadUser(1, function(user) {
    console.log(user);
});
console.log("After");

//Making a callback pattern function
function loadUser(id, callback) {
    // Async work
    setTimeout(() => {
        console.log("Loading from database");
        callback({ userId: id, name: "Vijaykumar" });
    }, 2000);
}

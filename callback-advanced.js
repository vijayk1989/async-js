console.log("Before");
// Consuming a callback function
loadUser(1, function (user) {
    console.log('User', user);
    // User {id: 1, name: 'Vijaykumar'}
    getRepos(user.gitHubUserName, function(repos) {
        console.log('Repos', repos);
        getCommits(repos[0], function(commits) {
            console.log('Commits', commits);
        });
    });
});

console.log("After");

//Making a callback pattern function
function loadUser(id, callback) {
    // Async work
    setTimeout(() => {
        console.log("Loading from database...");
        callback({ userId: id, gitHubUserName: "Vijaykumar" });
    }, 2000);
}

//Making a callback pattern function
function getRepos(gitHubUserName, callback) {
    // Async work
    setTimeout(() => {
        console.log("Loading from user...");
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

//Making a callback pattern function
function getCommits(repo, callback) {
    // Async work
    setTimeout(() => {
        console.log("Loading from repo...");
        callback(['commit1', 'commit2']);
    }, 2000);
}

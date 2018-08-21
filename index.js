console.log('Before');
function getUser(id) {
    setTimeout(() => {
        console.log('Getting user from database')
    }, 2000);
}
console.log('After');

function getUser(id) {
    setTimeout(() => {
        console.log('Getting user from database')
    }, 2000);
}

// console.log('Before');
// getUser(1, function(user){
//     console.log('User', user);
//     getRepos(user.gitHubUserName, function(repos) {
//         console.log('Repos', repos)
//         getCommits(repos[0], function(commit) {
//             console.log(commit);
//         })
//     })
// });
// console.log('After');

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Getting user from database...');
//         callback({id: id, gitHubUserName: 'Vijaykumar'});
//     }, 2000);
// }

// function getRepos(gitHubUserName, callback) {
//     setTimeout(() => {
//         console.log('Getting repos for user...');
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         console.log('Getting commits...');
//         callback(['commit1', 'commit2'])
//     }, 2000);
// }
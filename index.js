console.log('before');

 /* getUser(1, function (user){
    getRepositories(user.gitHubUsername, (repos)=>{
        getCommits(repos[0], (commits) =>{
          console.log(commits);
        });
    });
 });
 */

//const p = getUser(1);
//p.then(user => console.log(user));

// appling the Promise function  techanique
 /* getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits:', commits))
    .catch(err =>console.log('Error', err.message)); 
 */
    // Async and Await approach 
    async function displayCommmits(){
    try{
        const user = await getUser(1);
        const reops = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch( err){
        console.log('Error', err.message);

    }
    }
    displayCommmits();
 console.log('after');

 // appling the Promise function  techanique
function getUser(id){
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log('Readding a user from a database.....');
        resolve({ id: id , gitHubUsername: 'Data'});
         }, 2000);
    });       
}



function getRepositories(username){
    return  new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            console.log('Calling GitHup API.....');
            resolve(['repo1','repo2','repo3']);
        },2000)
    });  
}

function getCommits(repo){
    return  new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            console.log('Calling GitHup API.....');
            resolve(['commit']);
        },2000)

    });

}
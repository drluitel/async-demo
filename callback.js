console.log('before');

 getUser(1, function (user){
     console.log('User:' , user);
   
     getRepositories(user.gitHubUsername, (repos)=>{
        console.log('repos: ', repos);
       });
 });


 // get the repositories
 


console.log('after');

function getUser(id, callback){

    setTimeout(()=>{
        console.log('Readding a user from a database.....');
        callback({ id: id , gitHubUsername: 'Data'});
        }, 2000);
        
    
}


function getRepositories(username, callback){
    setTimeout( ()=>{
        console.log('Calling GitHup API.....');
        callback(['repo1','repo2','repo3']);
    },2000)
    
}

// * Type 1 Promise => 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise 1');
        resolve()
    },1000)
}).then(function(){
    console.log('Promise resolved');
})


// * Type 2 Promise => 
const promiseTwo = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({ username:"Shyam", email:"shyam@gmail.com" })
    }, 1000)
}).then((user) => {
    console.log(user);
})


// * Type 3 Promise => 
const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({ username:"Shyam", email:"shyam@gmail.com" })
        } else {
            reject('ERROR : Something went wrong')
        }
    },1000)
})

promiseThree.then((user) => {
    console.log(user);
    return user.username 
}).
then( (username) => {
    console.log(username);
}).
catch(function(error){
    console.log(error);
}).
finally( () => console.log(' The Promise is either Resolved and Rejected ') )


// * Type 4 Promise => 
const promiseFour = new Promise( (resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({ username:"Shyam", password:'1234' })
        } else {
            reject('ERROR : Something went wrong')
        }
    }, 1000)
});

async function cansumePromiseFour() {
    try { 
        const response = await promiseFour
        console.log(response);
    } catch (error) {
         console.log(error);
    }
}
cansumePromiseFour()


//*  
async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/Shyam-Katariya');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error : ', error);
    }
}
// getAllUsers()

//*

fetch('https://api.github.com/users/Shyam-Katariya').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch( (error) => console.log('Error :',error))

for (let i = 0; i <= 9; i++) {
    if(i == 5){
        //console.log("DEtected 5");
        continue
    }
    //console.log(i);
}

/*
 * ["", "", ""] 
 * [{}, {}, {}]
*/
//TODO -> for of in Array

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
}

const greeting = "hello world!"
for (const greet of greeting) {
    //console.log(`Hiii ${greet}`);
}

//TODO -> for of in Map

const map = new Map();

map.set('IN', "Indis")
map.set('USA', "United State")
map.set('USA', "United State")

// console.log(map);
for (const [key, value] of map) {
    //console.log(`${key} :- ${value}`);
}
//TODO -> for In

const myGames = {
    'game1' : 'NFS',
    'game2' : 'Call Of Duty',
    'game3' : 'FIFA'
}

for (const key in myGames) {
    // console.log(`${key} name for ${myGames[key]}`);
}

const myNum = [1, 2, 3, 4]

/** 
    const myTotal = myNum.reduce( function(acc, curValue){
        console.log(` acc : ${acc} & Current Value : ${curValue}`);
        return acc + curValue
    }, 3)
*/

const myTotal = myNum.reduce( (acc, curValue) => (acc + curValue), 0)
console.log(myTotal);


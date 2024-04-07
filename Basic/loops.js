/* 

    * forEach ->  it dont return vlaue

    * filter -> it return value

    TODO ||  callback Fuction :
    fuction (item) {}
*/

const coding = ["js", "ruby", "java", "python", "ruby"];

// coding.forEach( fuction (value){
//     console.log(value);
// } )

coding.forEach( (item) => { 
//    console.log(item);
 } )

coding.forEach( (item, index, arr) => { 
//    console.log(item, arr, index); 
} )

const myCoding = [
    {
        name : "JavaScript",
        filename : "js"
    },
    {
        name : "Java",
        filename : "java"
    },
    {
        name : "Python",
        filename : "py"
    },
    {
        name : "Ruby",
        filename : "rb"
    }
]

myCoding.forEach( (item) => {console.log(item.filename);})

// *filter

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = []

const mynewNum = num.filter( (num) => num > 4)
// const newNum = num.filter( (num) => { return num > 5 })
console.log(mynewNum);

num.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum);

let arr = [[1,2,3],[4,5,6],[7,8,9]];

let arr_addition=[];
let arr_multiplication=[];

let new_arr = [];

for (let i = 0; i < arr.length; i++) {
    
    var temp = arr[i];
    let temp_value = 1;
    for(let j = 0; j < temp.length; j++){
        temp_value = Number(temp_value) * Number(temp[j]);
    }
    arr_multiplication.push(temp_value);
    
    let temp_addition = 0;
    for (let k = 0; k < arr.length; k++) {
        temp_addition = arr[k][i] + temp_addition;
    }
    arr_addition.push(temp_addition);
    
    let temp_new = 1;
    
    for (let i = 0; i < arr_addition.length; i++) {
        temp_new = arr_addition[i] * arr_multiplication[i]; 
    }
    new_arr.push(temp_new);
    let finalSum = 0;
    
    new_arr.forEach( num => {
        finalSum += num;
    });
    console.log(`Total Sum : ${finalSum}`);
}
console.log(`arr_multiplication : ${arr_multiplication}`);
console.log(`arr_addition : ${arr_addition}`);
console.log(`new_arr : ${new_arr}`);

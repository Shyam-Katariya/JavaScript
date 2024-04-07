 
 const myarr = new Array(1,2,3,4,5);
    console.log("ORIGINAL -> ", myarr);
// Slice ->
const arr1 = myarr.slice(1,3);
    console.log("Slice array -> ",arr1);
    console.log(myarr);

// Splice -> IT removes value from array and manuplate the original array
const arr2 = myarr.splice(1,3);
    console.log("Splice array -> ",arr2);
    console.log(myarr);
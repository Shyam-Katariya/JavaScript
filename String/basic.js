
const LastName = "Katariya";
const name = new String('Shyam');

console.log(`My Name is ${name} ${LastName}`);
console.log(name.length);

const Quote = "God is Greate, He takes care of everyone";

// Split -> it is used to divide a String from certain keyword
console.log(Quote.split(", "));

// Slice ->  it extracts a part of the string based on the given stating-index and ending-index and returns a new string.
console.log(Quote.slice(0,13));

//substring() ->  it is only show string that is written inside the start index to the end index.
console.log(Quote.substring(14,33));

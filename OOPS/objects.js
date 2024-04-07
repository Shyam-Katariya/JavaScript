
function createUser(username, score) {
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score : ${this.score}`);
}

const chai = createUser('chai', 50);
const coffe = createUser('coffe', 50);

console.log(chai);
function setUserName(username) {
    this.username = username
}
function createUser(username, password, email){
    setUserName.call(this, username)
    this.email = email;
    this.password = password; 
}

const King = new createUser('Shyam', '1234', 'King@gmail.com')
console.log(King); 
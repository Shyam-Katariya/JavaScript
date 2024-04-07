class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password 
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}
const King = new User('Shyam', 'King@gmail.com', '123')
console.log(King.encryptPassword());
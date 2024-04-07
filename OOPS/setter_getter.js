class User {
    constructor(password, email){
        this.email = email;
        this.password = password; 
    }
    get password(){
        return `${this._password} : Shyam`
    }
    set password(value){
        this._password = value 
    } 
}

const King = new User('abc', 'King@gmail.com')
console.log(King.password); 

const user = {
    name:'Shyam',
    loginCount: 7,
    isLoggenIn: true,
    getUserDetail: function(){
        console.log('Database loggen In !');
        console.log(this);
    }
}
console.log(user.name);
console.log(user.getUserDetail());
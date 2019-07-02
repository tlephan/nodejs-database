const User = require('../src/postgresql/user')
const user = new User()

/*
let data = {
    id: '3',
    username: 'admin',
    password: '123456',
    fullName: 'Adminstrator',
    email: 'admin@gmail.com'
}
user.insert(data).then((result) => {
    console.log(result)
})
*/

/*
user.findAll().then((result) => {
    console.log(result)
})
*/

user.findOne(1).then((result) => {
    console.log(result)
})
const User = require('../src/repository/user')
const user = new User()

user.findAll().then((result) => {
    console.log(result)
})
const User = require('../src/mssql/user');
const user = new User();

user.findAll().then((result) => {
    console.log(result);
})
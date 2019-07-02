# nodejs-database
Sample application working with database in Nodejs

Code sample to access database:
* MSSQL uses [mssql](https://www.npmjs.com/package/mssql)
* PostgreSQL uses [pg](https://www.npmjs.com/package/pg)

### Source Description

All connection configurations is in `./src/config`.

Sample code to use MS SQL is in `./src/mssql`.

Sample code to use PostgreSQL is in `./src/postgresql`.

### Test

Source test is in `./test`. Run test by:
```
node .\test\userMssqlTest.js
```
const config = require('../config/mssql.json')
const sql = require('mssql')

const User = class {

    async insert(data) {
        try {
            const pool = await new sql.ConnectionPool(config).connect();
            const request = pool.request()
            let result = await request
                .input('username', sql.NVarChar, data.username)
                .input('password', sql.NVarChar, data.password)
                .input('fullName', sql.NVarChar, data.fullName)
                .input('email', sql.NVarChar, data.email)
                .query('INSERT INTO [dbo].[User]([Username],[Password],[FullName],[Email])'
                    + ' VALUES(@username, @password, @fullName, @email)')
            if (result !== null) {
                return result.rowsAffected // 1
            }
            return 0
        } catch (err) {
           console.error(err)
        }
    }

    async findAll() {
        try {
            const pool = await new sql.ConnectionPool(config).connect();
            const request = pool.request()
            let result = await request
                .query('SELECT [Username],[Password],[FullName],[Email] FROM [dbo].[User]')
            if (result !== null) {
                if (result.rowsAffected[0] > 0) {
                    return result.recordset
                }
            }
            return null
        } catch (err) {
           console.error(err)
        }
    }

    async findOne(id) {
        try {
            const pool = await new sql.ConnectionPool(config).connect();
            const request = pool.request()
            let result = await request
                .input('id', sql.Int, id)
                .query('SELECT [Username],[Password],[FullName],[Email] FROM [dbo].[User] WHERE [Id] = @id')
            if (result !== null) {
                if (result.rowsAffected[0] > 0) {
                    return result.recordset[0]
                }
            }
            return null
        } catch (err) {
           console.error(err)
        }
    }

}

module.exports = User
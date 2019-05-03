const config = require('../config/mssql.json')
const sql = require('mssql')
const queries = require('./sql/userQuery')

const User = class {

    async insert(data) {
        const pool = new sql.ConnectionPool(config)
        try {
            await pool.connect();
            const request = pool.request()
            let result = await request
                .input('username', sql.NVarChar, data.username)
                .input('password', sql.NVarChar, data.password)
                .input('fullName', sql.NVarChar, data.fullName)
                .input('email', sql.NVarChar, data.email)
                .query(queries.insert)
            if (result !== null) {
                return result.rowsAffected // 1
            }
            return 0
        } catch (err) {
           console.error(err)
        } finally {
            pool.close() // closing connection after request is finished
        }
    }

    async findAll() {
        const pool = new sql.ConnectionPool(config)
        try {
            await pool.connect();
            const request = pool.request()
            let result = await request.query(queries.findAll)
            if (result !== null) {
                if (result.rowsAffected[0] > 0) {
                    return result.recordset
                }
            }
            return null
        } catch (err) {
           console.error(err)
        } finally {
            pool.close() // closing connection after request is finished
        }
    }

    async findOne(id) {
        const pool = new sql.ConnectionPool(config)
        try {
            await pool.connect();
            const request = pool.request()
            let result = await request
                .input('id', sql.Int, id)
                .query(queries.findOne)
            if (result !== null) {
                if (result.rowsAffected[0] > 0) {
                    return result.recordset[0]
                }
            }
            return null
        } catch (err) {
           console.error(err)
        } finally {
            pool.close() // closing connection after request is finished
        }
    }

}

module.exports = User
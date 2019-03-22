const config = require('../../config/pg.json')
const { Pool } = require('pg')

const pool = new Pool(config)

const User = class {

    async insert(data) {
        const client = await pool.connect()
        try {
            const values = [
                data.id === undefined? '' : data.id,
                data.username === undefined? '' : data.username,
                data.password === undefined? '' : data.password,
                data.fullName === undefined? '' : data.fullName,
                data.email === undefined? '' : data.email
            ]
            const result = await pool
                .query('INSERT INTO public."user"(id, username, password, full_name, email)'
                    + 'VALUES ($1, $2, $3, $4, $5);', values)
            if (result !== null) {
                return result.rowCount
            }
            return 0
        } catch (err) {
            console.error(err)
        } finally {
            client.release()
        }
    }

    async findAll() {
        const client = await pool.connect()
        try {
            const result = await pool
                .query('SELECT * FROM public."user"')
            if (result !== null) {
                if (result.rowCount > 0) {
                    return result.rows
                }
            }
            return null
        } catch (err) {
            console.error(err)
        } finally {
            client.release()
        }
    }

    async findOne(id) {
        const client = await pool.connect()
        try {
            const result = await pool
                .query('SELECT * FROM public."user" WHERE id = $1', [id])
            if (result !== null) {
                if (result.rowCount > 0) {
                    return result.rows[0]
                }
            }
            return null
        } catch (err) {
            console.error(err)
        } finally {
            client.release()
        }
    }
}

module.exports = User
module.exports = {
    /*
    insert: 'INSERT INTO public."user"(id, username, password, full_name, email) \
         VALUES ($1, $2, $3, $4, $5)',
         */

    insert: `INSERT INTO public."user"(id, username, password, full_name, email)
         VALUES ($1, $2, $3, $4, $5)`,

    findAll: `SELECT * FROM public."user"`,

    findOne: `SELECT * FROM public."user" WHERE id = $1`,
}
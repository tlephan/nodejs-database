module.exports = { 
    /*
    insert: 'INSERT INTO [dbo].[User]([Username],[Password],[FullName],[Email]) \
         VALUES(@username, @password, @fullName, @email)',
         */

    insert: `INSERT INTO [dbo].[User]([Username],[Password],[FullName],[Email])
         VALUES(@username, @password, @fullName, @email)`,

    findAll: `SELECT [Username],[Password],[FullName],[Email] FROM [dbo].[User]`,

    findOne: `SELECT [Username],[Password],[FullName],[Email] FROM [dbo].[User] WHERE [Id] = @id`,
}
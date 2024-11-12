module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || "songsinfo",
        user: process.env.DB_USER || "songsinfo",
        password: process.env.DB_PASS || "songsinfo",
        options: {
            dialect: process.env.DIALECT || "sqlite",
            host: process.env.HOST || "localhost",
            storage: "./songsinfo.sqlite"
        }
    }
};
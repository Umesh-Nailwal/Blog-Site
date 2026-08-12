const Database = require("better-sqlite3");

const db = new Database("blog.db");


db.pragma("foreign_keys = ON");
db.pragma("journal_mode = WAL");
// Create tables
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        avatar TEXT DEFAULT NULL,
        banner TEXT DEFAULT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        summary TEXT NOT NULL,
        image TEXT NOT NULL,
        content TEXT NOT NULL,
        author_id INTEGER NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (author_id)
            REFERENCES users(id)
            ON DELETE CASCADE
    );
`);

module.exports = db;


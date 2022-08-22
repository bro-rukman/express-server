const Pool = require("pg").Pool;

export const PostgreSQLConnectionQuality = () => {
  return new Pool({
    host: "10.54.18.54",
    database: "quality",
    user: "nesa_fajar_x",
    password: "nesa_fajar_x!123",
    port: 5432,
  });
};

export const PostgreSQLConnectionNesa = () => {
    return new Pool({
        host: "10.54.18.217",
        database: "nesa",
        user: "postgres",
        password: "P@ssw0rdnesa",
        port: 5432,
    });
};

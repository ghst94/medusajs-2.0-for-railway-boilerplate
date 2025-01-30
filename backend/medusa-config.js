module.exports = {
    projectConfig: {
      database_url: process.env.DATABASE_URL || "postgres://localhost:5432/medusa",
      redis_url: process.env.REDIS_URL || "redis://localhost:6379",
      store_cors: process.env.STORE_CORS || "http://localhost:8000",
      admin_cors: process.env.ADMIN_CORS || "http://localhost:7000",
    },
    plugins: [],
  };
  
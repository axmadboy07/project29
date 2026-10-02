# Project29 - Event & Ticket Booking REST API

A scalable Node.js & Express REST API built with PostgreSQL, Sequelize ORM, Joi validation, and Swagger OpenAPI documentation based on an ER diagram with 29 database tables.

## 🚀 Features

- **29 Database Models**: Complete relational mapping with foreign keys, Sequelize associations (`belongsTo`, `hasMany`), and hooks.
- **CRUD & Search**: Comprehensive controllers providing Create, Read All, Read by ID (with nested associations), Update, Delete, and Search (`Op.iLike`) for all entities.
- **Data Validation**: Robust request payload validation using Joi schemas.
- **Swagger Documentation**: Interactive OpenAPI 3.0 documentation available at `/api-docs`.
- **Password Security**: Bcrypt hashing integration with Sequelize `beforeSave` hooks.

## 📁 Project Structure

```text
├── config/
│   └── database.js          # Sequelize connection settings
├── controller/              # 29 Controllers (CRUD & search handlers)
├── models/                  # 29 Sequelize models + models/index.js
├── routes/                  # 29 Express routes with Swagger JSDoc
├── swagger/
│   └── swagger.js           # Swagger-jsdoc & Swagger-ui setup
├── validation/              # 29 Joi validation schemas
├── .env.example             # Example environment variables
├── .gitignore               # Ignored files (node_modules, .env)
├── app.js                   # Express application entrypoint
└── package.json             # Project dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/axmadboy07/project29.git
   cd project29
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=4444
   DB_NAME=project29
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Access Swagger Documentation:**
   Open [http://localhost:4444/api-docs](http://localhost:4444/api-docs) in your browser.

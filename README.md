#   Quiz API

Backend REST API for a quiz application built with **Node.js**, **Express**, **Sequelize**, and **TypeScript**.



## Tech Stack

- **Node.js**
- **Express.js** 
- **TypeScript** 
- **Sequelize** 
- **PostgreSQL**
- **MVC** 

##  📁Project Structure

```
src/
├── config/        # DB config
├── controllers/   # Request handlers
├── services/      # Business logic
├── routes/        # API routes
├── models/        # Sequelize models
├── middlewares/   # Error handling
├── exeptions/     # Custom API errors
├── utils/         # Helpers (catchError)
├── seed.ts        # DB seeding script
├── setup.ts       # DB setup / initialization
├── app.ts         # Express app config
└── index.ts       # Server entry point
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
DB_HOST=localhost
DB_PORT=2121
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=quiz_db
PORT=3000
```

### 4. Setup database

```bash
npm run seed
```

This will:
- Connect to the database
- Drop existing tables
- Create new schema
- Insert sample quiz data

### 5. Run the project

```bash
npm run dev
```

---

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/quizzes` | Get all quizzes |
| `GET` | `/quizzes/:id` | Get quiz by ID |
| `POST` | `/quizzes` | Create a new quiz |
| `DELETE` | `/quizzes/:id` | Delete quiz by ID |

### Example — Create quiz

```json
POST /quizzes

{
  "title": "JavaScript Basics",
  "description": "Test your JS knowledge",
  "questions": [
    {
      "text": "What is JavaScript?",
      "type": "single",
      "options": [
        { "text": "A programming language", "isCorrect": true },
        { "text": "A database", "isCorrect": false }
      ]
    }
  ]
}
```


#   Quiz FRONT END

## Tech Stack

- **React** — UI library
- **TypeScript** — static typing
- **TanStack Query** — server state management
- **Axios** — HTTP client
- **Tailwind CSS** — utility-first styling
- **Zod** — schema validation
- **React Hook Form** — form management
- **Motion** — animations
- **Flowbite** — UI components

##  📁Project Structure

```
src/
├── main.tsx           # Entry point
├── store.tsx          # React Query client setup
├── config/            # App configuration (Router, axios)
├── style/             # Base styles and global CSS
├── pages/             # Route-level page components
├── layouts/           # Reusable layout sections (Header, Footer)
├── components/        # Shared UI components
└── features/
    └── quiz/
        ├── hooks/        # TanStack Query hooks
        ├── services/     # Axios API calls
        └── validation/   # Zod schemas
```


## Getting Started

### 1. Clone the repository

```bash
git clone 
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:3000
```

### 4. Run the project

```bash
npm run dev
```



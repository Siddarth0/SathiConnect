# SathiConnect

<div align="center">

### Connect. Share. Grow Together.

A full-stack MERN social platform where developers can create profiles, share posts, like/comment, and manage professional experience and education.

![Node](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=000)
![Redux](https://img.shields.io/badge/Redux-5.x-764ABC?logo=redux&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

</div>

---

## ✨ Highlights

- 🔐 JWT-based authentication and protected routes
- 👤 Developer profile creation and updates
- 💼 Add/remove experience and education entries
- 📝 Create posts, like/unlike posts, and comment system
- 🌐 REST API with Express + MongoDB (Mongoose)
- ⚛️ React + Redux frontend with async actions via thunk

---

## 🧱 Tech Stack

### Backend

- Node.js
- Express 5
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- Input validation (`express-validator`)
- Password hashing (`bcryptjs`)

### Frontend

- React 19
- React Router 7
- Redux 5 + `redux-thunk`
- Axios

---

## 📁 Project Structure

```text
SathiConnect/
├── client/                # React frontend
│   └── src/
├── config/                # DB and app config
├── middleware/            # Auth middleware
├── models/                # Mongoose models
├── routes/api/            # API route modules
├── server.js              # Express app entrypoint
└── package.json
```

---

## 🚀 Getting Started

### 1) Clone and install dependencies

```bash
git clone https://github.com/Siddarth0/SathiConnect.git
cd SathiConnect
npm install
cd client
npm install
cd ..
```

### 2) Configure environment

Create/update `config/default.json`:

```json
{
  "mongoURI": "<your_mongodb_connection_string>",
  "jwtSecret": "<your_super_secret_jwt_key>",
  "githubClientId": "<your_github_client_id>",
  "githubSecret": "<your_github_client_secret>"
}
```

> Security note: never commit real credentials or secrets to Git.

### 3) Run in development

```bash
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

---

## 📜 Available Scripts

From project root:

- `npm run dev` — run server + client concurrently
- `npm run server` — run backend with nodemon
- `npm run client` — run React app
- `npm start` — run backend in production mode

From `client/`:

- `npm start` — start React dev server
- `npm run build` — create production build

---

## 🔌 API Overview

### Auth & Users

- `POST /api/users` — register user
- `POST /api/auth` — login user and get JWT
- `GET /api/auth` — load authenticated user (protected)

### Profile

- `GET /api/profile` — get all profiles
- `GET /api/profile/me` — get current user profile (protected)
- `POST /api/profile` — create/update profile (protected)
- `GET /api/profile/user/:user_id` — get profile by user ID
- `PUT /api/profile/experience` — add experience (protected)
- `DELETE /api/profile/experience/:exp_id` — remove experience (protected)
- `PUT /api/profile/education` — add education (protected)
- `DELETE /api/profile/education/:edu_id` — remove education (protected)
- `DELETE /api/profile` — delete user/profile (protected)

### Posts

- `POST /api/posts` — create post (protected)
- `GET /api/posts` — get all posts (protected)
- `GET /api/posts/:id` — get post by ID (protected)
- `DELETE /api/posts/:id` — delete own post (protected)
- `PUT /api/posts/like/:id` — like post (protected)
- `PUT /api/posts/unlike/:id` — unlike post (protected)
- `POST /api/posts/comment/:id` — add comment (protected)
- `DELETE /api/posts/comment/:id/:comment_id` — delete own comment (protected)

Protected routes require header:

```http
x-auth-token: <jwt_token>
```

---

## 🛡️ Authentication Flow (JWT)

1. User registers/logs in.
2. Server returns signed JWT.
3. Client stores token and sends it in `x-auth-token` header.
4. Auth middleware verifies token and grants access to protected endpoints.

---

## 📦 Deployment Notes (Single Server)

This project supports single-server deployment where one Node/Express app serves both API and frontend.

### Build + Run

```bash
npm run build
npm start
```

### What this does

- Builds React app to `client/build`
- Express serves static files from `client/build`
- All non-API routes return React `index.html`
- API routes continue under `/api/*`

### Required production environment variables

- `NODE_ENV=production`
- `mongoURI`
- `jwtSecret`
- `githubClientId`
- `githubSecret`

### Example host setup (Render/Railway)

- Build command: `npm run build`
- Start command: `npm start`

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

MIT © Siddartha Kunwar

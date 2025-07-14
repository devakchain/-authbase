# AuthBase – MERN Authentication System

A minimal full-stack authentication system built with **MongoDB**, **Express**, **React**, and **Node.js**.  
Includes user registration, login, protected routes, session handling via HTTP-only cookies, and role-based state via React Context.

---

## Features

- Secure registration & login with hashed passwords (bcryptjs)
- JWT authentication via HTTP-only cookies
- React Context for global auth state
- Protected routes (`/profile`) via middleware
- Error handling with user-friendly feedback
- Basic and clean UI, ready for extension

---

## Tech Stack

- **Frontend**: React, Axios, Vite
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: bcryptjs, jsonwebtoken
- **Session Handling**: Cookies (`withCredentials: true`)
- **State Management**: React Context API

---

## Folder Structure

```plaintext
.
├── client/
│   ├── pages/           # Login, Register, Profile
│   ├── components/      # Navbar
│   └── styles/          # CSS files
│
├── backend/
│   ├── controllers/     # authController.js
│   ├── middleware/      # authMiddleware.js
│   ├── models/          # User model (Mongoose)
│   └── routes/          # authRoutes.js
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/AuthBase.git
cd AuthBase
```

### 2. Install dependencies

```bash
# For backend
cd backend
npm install

# For frontend
cd ../client
npm install
```

### 3. Setup environment variables

Create a `.env` file inside `backend/` with the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret
```

### 4. Run the app

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## Notes

- Authentication is managed using **HTTP-only cookies** for better security
- JWT tokens are verified using backend middleware
- Passwords are **hashed with bcryptjs** before storing
- The frontend uses **React Context** for global auth state
- Error messages are displayed directly in the UI

---

## Future Enhancements

- Add user roles (admin/user)
- Reset password via email + token
- Profile image upload with Multer
- Better validation (React Hook Form / Zod)
- Full production deployment (Netlify + Render)
- Unit & Integration testing (Jest, React Testing Library)

---

## 📜 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).

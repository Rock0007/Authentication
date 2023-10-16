# MERN Stack Authentication App

This repository contains the code for a MERN (MongoDB, Express.js, React.js, Node.js) stack application that handles user registration and login functionality.

## Features
- **User Registration:** Users can register with their name, email, mobile number, and password. Passwords are securely hashed before storing in the database.
- **Email Validation:** The application validates the email address using regular expressions.
- **Mobile Number Validation:** Mobile numbers are validated to ensure they consist of 10 digits.
- **Password Strength:** Passwords must be at least 6 characters long.
- **Password Confirmation:** Users are required to confirm their password during registration.
- **User Authentication:** Registered users can log in using their email and password.
- **Token-based Authentication:** User sessions are managed using JSON Web Tokens (JWT) for secure authentication.
- **Protected Routes:** Certain routes are protected and can only be accessed by authenticated users.
- **Dashboard:** Authenticated users are redirected to a dashboard where they are greeted by their name.

## Technologies Used
- **Frontend:** React.js, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (mongoose ORM)
- **Authentication:** JSON Web Tokens (JWT)
- **State Management:** React Context API
- **Toast Notifications:** react-hot-toast
- **Routing:** React Router

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd mern-authentication-app
   ```

2. **Install Dependencies:**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   PORT = 8000
   ORIGIN = http://localhost:3000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

   Create a `.env` file in the `frontend` directory and add the following variables:
   ```env
   REACT_APP_BASE_URL=http://localhost:8000
   ```

4. **Run the Application:**
   ```bash
   # Run the backend server (from the backend directory)
   npm start

   # Run the frontend app (from the frontend directory)
   npm start
   ```

5. **Access the Application:**
   The application can be accessed at `http://localhost:3000`.

## API Endpoints

- **POST `/api/register`:** Register a new user. Requires `name`, `email`, `mobile`, `password`, and `confirmPassword` in the request body.

- **POST `/api/login`:** Login with an existing user. Requires `email` and `password` in the request body.

- **GET `/api/user`:** Get user details for the authenticated user.

## Folder Structure

- **`/server`:** Contains backend code (Node.js, Express.js, MongoDB models).
- **`/client`:** Contains frontend code (React.js components, styles).

## Author
- A S Kapil
- askapil07gmail.com

Feel free to customize this README file further according to your project's specific requirements.

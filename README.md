
##MERN Stack Authentication App
This repository contains the code for a MERN (MongoDB, Express.js, React.js, Node.js) stack application that handles user registration and login functionality.

##Features
###User Registration:
Users can register with their name, email, mobile number, and password. Passwords are securely hashed before storing in the database.
###Email Validation:
The application validates the email address using regular expressions.
###Mobile Number Validation:
Mobile numbers are validated to ensure they consist of 10 digits.
###Password Strength:
Passwords must be at least 6 characters long.
###Password Confirmation:
Users are required to confirm their password during registration.
###User Authentication:
Registered users can log in using their email and password.
###Token-based Authentication:
User sessions are managed using JSON Web Tokens (JWT) for secure authentication.
###Protected Routes:
Certain routes are protected and can only be accessed by authenticated users.
###Dashboard: 
Authenticated users are redirected to a dashboard where they are greeted by their name.
#Technologies Used
Frontend: React.js, Axios, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (mongoose ORM)
Authentication: JSON Web Tokens (JWT)
State Management: React Context API
Toast Notifications: react-hot-toast
Routing: React Router

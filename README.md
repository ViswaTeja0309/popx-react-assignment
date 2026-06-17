# PopX React Application

A responsive React-based authentication interface developed as part of a frontend assignment. This project implements a user registration flow, login authentication, and profile management using React concepts and browser local storage.

## Project Overview

PopX is a mobile-focused user interface that allows users to create an account, log in using their credentials, and view their profile details. The application is designed to closely follow the provided UI design while maintaining a clean React structure and responsive behavior.

## Features

- Responsive mobile-first design
- User registration form
- Login authentication system
- Local storage based user data management
- Dynamic profile page
- React Router navigation
- Form handling using React state management
- Clean component and CSS organization

## Pages Included

## Landing Page

- Introduction screen for users
- Navigation options for creating an account or logging in

## Signup Page

- User registration form
- Collects user information:
  - Full name
  - Phone number
  - Email address
  - Password
  - Company name
  - Agency selection
- Stores user details in browser local storage

## Login Page

- User authentication using registered credentials
- Validates email and password
- Displays error message for invalid credentials
- Redirects users to the profile page after successful login

## Profile Page

- Displays user account information
- Shows profile image with camera icon
- Displays username and email
- Includes account settings layout

## Technologies Used

- React.js
- JavaScript (ES6+)
- React Router DOM
- HTML5
- CSS3
- Local Storage API
- Vite

## Project Structure

```src
|
├── pages
| ├── Landing.jsx
| ├── Login.jsx
| ├── Signup.jsx
| └── Profile.jsx
|
├── styles
| ├── Landing.css
| ├── Login.css
| ├── Signup.css
| └── Profile.css
|
├── assets
| └── profile_image.jpg
|
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```


## Installation and Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project directory:

cd popx-app

Install the required dependencies:

npm install

Start the development server:

npm run dev

The application will run locally at:

http://localhost:5173

Authentication Flow

The application follows a simple client-side authentication flow:

User creates an account through the Signup page.
User information is stored in browser local storage.
User enters email and password on the Login page.
Application validates the entered credentials.

After successful authentication, the user is redirected to the Profile page.

Profile information is dynamically displayed from stored user data.

Responsive Design

The application follows a mobile-first design approach.

Features include:

Mobile application style layout
Responsive width handling
Consistent spacing and typography
Adaptive design for different screen sizes

Deployment

The application is deployed using Vercel.

Live Demo:

https://popx-react-assignment-khaki.vercel.app

Author

Viswa Teja

Frontend Developer


After adding this:

```bash
git add README.md
git commit -m "Completed README documentation"
git push
# Mini Message Board — README

# Overview

Mini Message Board is a simple Node.js + Express web application that allows users to:

- View existing messages

- Create new messages

- Open a detailed view of each message

- The project uses Express, EJS templates, and basic routing to demonstrate server‑side rendering, form handling, and modular route structure.

# Features

- Home page listing all messages

- Message detail page for each individual message

- Form page to submit new messages

- EJS templating with partials (header, footer, navbar)

- Static assets served from /public

- Modular routing using Express Router

- In‑memory message storage (no database required)
 
# Technologies Used

- Node.js

- Express.js

- EJS (Embedded JavaScript Templates)

- CSS (custom styling)

# Installation

Clone the repository:


- git clone

# Install dependencies:

- npm install

Start the server:

- node app.js
or (if using nodemon):

- nodemon app.js

# Open the app in your browser:
http://localhost:3000

# Routes
GET /
Renders the home page with all messages.

GET /message/:id
Displays a detailed view of a specific message.

GET /new
Renders the form to create a new message.

POST /new
Handles form submission and adds a new message to the in‑memory array.

# How It Works
Messages are stored in a simple JavaScript array:

const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() }
];

When a user submits the form, a new message object is pushed into this array and displayed on the home page.

# Styling

All styling is located in public/style.css.
The layout uses:

- Flexbox

- Custom colors

- Hover/active button states

- Responsive structure
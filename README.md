# Advice-Trade
Hello! This is a simple Node.js + Express application that fetches random advice from the Advice Slip API and displays it using EJS templates. It also includes a small registration form that sends an email through EmailJS using the code inside header.ejs. In here, you can trade with me pieces of advice so we can both gain thoughtful new insights!

**Features**
  Fetches random advice from https://api.adviceslip.com/advice
  Displays advice inside an animated card
  Registration form sends an email using EmailJS
  Uses EJS for templating
  Serves static files from the public folder
  Tech Stack
  Node.js
  Express
  EJS
  Axios
  EmailJS
  CSS (animations and glow effects)

**How to Run**
  npm install
  node index.js

**Open in a browser:**
http://localhost:3000

**Project Structure**
index.js
/views
  index.ejs
  register.ejs
  /partials
    header.ejs
/public
  /styles
  /images

**APIs / Services Used**
Advice Slip API — https://api.adviceslip.com/advice used to generate random advice
EmailJS API — https://www.emailjs.com/ used in header.ejs to send form emails

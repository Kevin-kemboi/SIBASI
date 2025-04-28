Sibasi Ltd Web Application
A modern, responsive web app with a sleek login system, interactive To-Do list, and dynamic articles page. Features a premium glassmorphism UI, smooth animations, drag-and-drop tasks, and local storage persistence.
Features
Login Page: Animated form with email/password validation, password toggle, and success toasts.
Dashboard (To-Do List): Add, edit, delete, and reorder tasks with categories and confetti on completion.
Articles Page: Filterable, responsive cards with real content and lazy-loaded images.
General: Responsive sidebar, Poppins/Inter fonts, micro-interactions, and ARIA accessibility.
Technologies
HTML5, CSS3, JavaScript (ES6)
Font Awesome, Confetti.js
Optional: Vite, Sass
File Structure

Sibasi-project/
├── assets/
│   ├── images/ (optional: article images)
├── pages/
│   ├── login.html
│   ├── dashboard.html
│   ├── articles.html
├── styles/
│   ├── main.css
├── scripts/
│   ├── login.js
│   ├── todo.js
│   ├── articles.js
├── index.html
├── README.md
Setup
Clone/Download:
bash

git clone https://github.com/your-username/sibasi-project.git
cd ibasi-project
Install Dependencies (optional):
bash

npm install vite @fortawesome/fontawesome-free canvas-confetti
npm install -g sass
Compile SCSS (if using):
bash

sass styles/main.scss styles/main.css
Run Server:
Live Server (VS Code): Open index.html with Live Server.
Vite: npm run dev (open http://localhost:5173).
Local: Open index.html (limited functionality).
Usage
Login: Enter valid email and password (>8 chars) to access the dashboard.
To-Do List: Add, edit, complete, or reorder tasks; saved in localStorage.
Articles: Filter by category; view responsive cards.
Navigation: Use the sidebar (collapsible on mobile).
Troubleshooting
"MIME type 'text/html' for main.css":
Ensure styles/main.css exists.
Compile SCSS: sass styles/main.scss styles/main.css.
Start server from ibasi-project/.
"CSP violation (enable_copy.js)":
Disable browser extensions (e.g., copy-paste tools).
Test in incognito mode.
"Image 404 errors":
Add images to assets/images/ or use Unsplash URLs in articles.html.
Contributing
Fork, create a branch, make changes, and submit a pull request. Follow coding style and test thoroughly.
License
MIT License. See LICENSE.


**Sibasi Ltd Web Application**

A modern, responsive web app featuring a sleek login system, interactive To‑Do list, and dynamic articles page. The project showcases a premium glassmorphism UI, smooth animations, drag‑and‑drop tasks, and local storage persistence.

---

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [File Structure](#file-structure)
4. [Installation & Setup](#installation--setup)
5. [Usage](#usage)
6. [Troubleshooting](#troubleshooting)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- **Login Page**
  - Animated form with email/password validation
  - Password visibility toggle
  - Success toasts on authentication
- **Dashboard (To‑Do List)**
  - Add, edit, delete, and reorder tasks via drag‑and‑drop
  - Category labeling for tasks
  - Confetti animation on task completion
  - Persistent storage with `localStorage`
- **Articles Page**
  - Responsive card layout with real content
  - Category filters for quick discovery
  - Lazy‑loaded images for performance
- **General UX/UI**
  - Responsive sidebar (collapsible on mobile)
  - Glassmorphism design elements
  - Micro‑interactions and smooth transitions
  - Accessibility via ARIA attributes
  - Custom fonts: Poppins and Inter

---

## Technologies

- **Markup & Styling:** HTML5, CSS3, Sass (SCSS)
- **Scripting:** JavaScript (ES6)
- **UI & Icons:** Font Awesome
- **Animations:** canvas‑confetti
- **Build Tools (optional):** Vite

---

## File Structure

```
sibasi-project/
├── assets/
│   └── images/        # Article images or placeholders
├── pages/
│   ├── login.html
│   ├── dashboard.html
│   └── articles.html
├── styles/
│   └── main.css       # Compiled CSS (from SCSS)
├── scripts/
│   ├── login.js
│   ├── todo.js
│   └── articles.js
├── index.html         # Entry point for Vite or static serve
├── README.md          # Project documentation
└── LICENSE            # MIT License
```

---

## Installation & Setup

> **Prerequisites:** Node.js (v14+), npm (v6+)

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sibasi-project.git
   cd sibasi-project
   ```

2. **Install dependencies** (if using Vite & additional packages)
   ```bash
   npm install vite @fortawesome/fontawesome-free canvas-confetti
   npm install -g sass       # if you plan to use the Sass CLI
   ```

3. **Compile SCSS** (if using Sass)
   ```bash
   sass styles/main.scss styles/main.css
   ```

4. **Run the development server**

   - **Live Server (VS Code)**: Open `index.html` with Live Server extension.
   - **Vite**:
     ```bash
     npm run dev
     # then visit http://localhost:5173
     ```
   - **Local (static)**: Open `index.html` in your browser (limited functionality).

---

## Usage

1. **Login**
   - Navigate to the **Login Page** and enter a valid email and a password (min. 8 characters).
   - On success, you will be redirected to the dashboard.

2. **Dashboard (To‑Do List)**
   - **Add a task:** Fill in a title and select a category.
   - **Edit/Delete:** Use the pencil or trash icons on each task card.
   - **Reorder:** Drag and drop tasks to reprioritize.
   - **Complete:** Click the checkbox to mark complete and trigger confetti.

3. **Articles Page**
   - Use the category filter dropdown to sort articles.
   - Scroll to load images lazily.

4. **Navigation**
   - Use the sidebar links to switch between pages.
   - On mobile, collapse or expand the sidebar via the hamburger menu.

---

## Troubleshooting

- **"MIME type 'text/html' for main.css"**
  - Ensure `styles/main.css` exists after compiling SCSS.
  - Re-run: `sass styles/main.scss styles/main.css`.

- **CSP violation (`enable_copy.js`)**
  - Disable browser extensions that inject scripts.
  - Test in Incognito/Private mode.

- **Image 404 errors**
  - Add missing images into `assets/images/`.
  - Or update image URLs to valid sources (e.g., Unsplash).

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to your branch: `git push origin feature/YourFeature`
5. Open a Pull Request and describe your changes.

Please follow the existing coding style and test your changes thoroughly.

---

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

*Crafted with ❤️ by Sibasi Ltd*


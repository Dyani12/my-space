# 🧠 MySpace – Personal Productivity Dashboard

MySpace is a personal web dashboard designed to help myself stay organized, productive, and focused.  
It provides a clean, minimal interface to manage my tasks, track habits, run study timers, jot down notes, and save useful links — all in one place.

---

## ✨ Features

### ✅ Tasks Page
- **To-Do List**: Add, complete, remove, and reorder tasks
- **Calendar View**: Weekly/Monthly view with date-specific deadlines and expandable notes

### 📊 Habit Tracker Page
- Track **Good** and **Bad** habits separately
- Mark daily progress as success/fail
- Visualize progress via graphs (weekly/monthly)

### ⏱️ Study Timer Page
- **Stopwatch Mode**: Run until stopped
- **Countdown Mode**: Set a target time and get alerted when it ends

### ✏️ Quick Save Page
- **Quick Notes**: Capture short, temporary thoughts or ideas
- **Quick Links**: Save and organize URLs (e.g. YouTube, X), mark them as done or remove


## 🧩 Tech Stack

| Layer       | Tech               |
|-------------|--------------------|
| Frontend    | React              |
| Styling     | TailwindCSS        |
| Build Tool  | Vite               |
| Storage     | Browser LocalStorage (initially) |

> The architecture is designed to scale. All logic will be centralized via **custom hooks** to allow easy migration to cloud storage or user auth in the future.

---

## 🖥️ UI/UX Philosophy

- Clean, minimalist, and modern interface
- **Bento Grid Layouts** for component separation
- Responsive interactions for hovers, clicks, and UI feedback
- Sidebar navigation with icons that expand on hover


---

## 📦 Installation & Usage

```bash
# Clone the repo
git clone https://github.com/Dyani12/my-space.git
cd my-space

# Install dependencies
npm install

# Start the dev server
npm run dev

# Todo App with Redux and Weather Integration

This is a **full-featured** Todo App built with **React, Redux Toolkit, and Tailwind CSS**, featuring user authentication, task management, and a live weather widget.

## 🚀 Features
- **User Authentication** (Login/Logout with Redux state management)
- **Task Management** (Add, Delete, Toggle Completion)
- **Task Prioritization** (High, Medium, Low)
- **Persistent State** using `localStorage`
- **Live Weather Widget** (Fetches weather data for Delhi)
- **Responsive UI** (Mobile and Desktop friendly)

## 🛠️ Tech Stack
- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **State Management**: Redux Toolkit
- **API**: OpenWeatherMap (for weather data)

## 📦 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/AakashxD/quad.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory and add your OpenWeather API key:
     ```env
     VITE_API_KEY=your_api_key_here
     ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 🖥️ Usage
1. **Login/Register** to access your personalized task list.
2. **Add tasks**, set their priority (Low, Medium, High).
3. **Mark tasks as completed** by clicking on the circle icon.
4. **Delete tasks** using the trash icon.
5. **View live weather** at the bottom of the app.

## 📂 Project Structure
```
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 Auth
 ┃ ┃ ┗ 📜 LoginForm.jsx
 ┃ ┣ 📂 Todo
 ┃ ┃ ┣ 📜 TaskInput.jsx
 ┃ ┃ ┣ 📜 TaskList.jsx
 ┃ ┃ ┗ 📜 TodoApp.jsx
 ┃ ┗ 📜 WeatherWidget.jsx
 ┣ 📂 store
 ┃ ┣ 📂 slices
 ┃ ┃ ┣ 📜 authSlice.js
 ┃ ┃ ┣ 📜 todoSlice.js
 ┣ 📜 App.jsx
 ┣ 📜 main.jsx
 ┗ 📜 index.css
```

## 🚀 Deployment
- To build for production, run:
  ```bash
  npm run build
  ```
- Deploy the `dist/` folder to any static hosting service like **Vercel, Netlify, or Firebase Hosting**.

## 🎯 Future Enhancements
- **User Registration** with backend authentication.
- **Drag and Drop Tasks** for better task management.
- **Dynamic Weather Location** (Allow users to select their city).



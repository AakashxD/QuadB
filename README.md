# Todo App with Redux and Weather Integration
# Deployed url https://quad-b-ochre.vercel.app/
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
   git clone https://github.com/AakashxD/QuadB.git
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


## 🚀 Deployment

- Deployed URL: https://quad-b-ochre.vercel.app/

- To build for production, run:
  ```bash
  npm run build
  ```


## 🎯 Future Enhancements
- **Dynamic Weather Location** (Allow users to select their city).



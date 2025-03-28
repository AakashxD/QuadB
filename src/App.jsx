import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { fetchWeather } from './store/slices/todoSlice';
import { restoreAuth } from './store/slices/authSlice';
import { restoreTasks } from './store/slices/todoSlice';
import LoginForm from './components/Auth/LoginForm';
import TodoApp from './components/Todo/TodoApp';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { weather, loading, error } = useSelector((state) => state.todo);

  // Fetch tasks and auth state on mount
  useEffect(() => {
    dispatch(restoreAuth());
    dispatch(restoreTasks());
    dispatch(fetchWeather()); // Fetch weather on mount
  }, [dispatch]);

  // Determine weather icon based on temperature
  const getWeatherIcon = () => {
    if (!weather) return <Cloud className="w-6 h-6 text-gray-400" />;
    if (weather.temperature > 25) return <Sun className="w-6 h-6 text-yellow-500" />;
    if (weather.temperature < 15) return <CloudRain className="w-6 h-6 text-blue-500" />;
    return <Cloud className="w-6 h-6 text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Weather Widget */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-4 flex items-center space-x-2">
          {loading ? (
            <div className="animate-pulse">Loading weather...</div>
          ) : error ? (
            <div className="text-red-500">Error loading weather</div>
          ) : weather && (
            <>
              {getWeatherIcon()}
              <span className="text-gray-700">{weather.temperature}°C</span>
              <span className="text-gray-500">{weather.description}</span>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {isAuthenticated ? <TodoApp /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
}

export default App;

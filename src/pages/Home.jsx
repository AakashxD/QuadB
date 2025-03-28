import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { fetchWeather } from '../store/slices/todoSlice';
import LoginForm from '../components/Auth/LoginForm';
import TodoApp from '../components/Todo/TodoApp';

const Home = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const { weather, loading, error } = useSelector((state) => state.todo);

    useEffect(() => {
        dispatch(fetchWeather()); 
    }, [dispatch]);

    const getWeatherIcon = () => {
        if (!weather) return <Cloud className="w-6 h-6 text-gray-400" />;
        if (weather.temperature > 25) return <Sun className="w-6 h-6 text-yellow-500" />;
        if (weather.temperature < 15) return <CloudRain className="w-6 h-6 text-blue-500" />;
        return <Cloud className="w-6 h-6 text-gray-500" />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center px-4 py-8">

            <div className="w-full max-w-4xl">
                {isAuthenticated ? <TodoApp /> : <LoginForm />}
            </div>

           
            {isAuthenticated && (
                <div className="mt-6 bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 w-50 justify-center ">
                    {loading ? (
                        <div className="animate-pulse">Loading weather...</div>
                    ) : error ? (
                        <div className="text-red-500">Error loading weather</div>
                    ) : weather && (
                        <>
                            {getWeatherIcon()}
                            <span className="text-gray-700 font-semibold">{weather.temperature}°C</span>
                            <span className="text-gray-500">{weather.description}</span>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from 'lucide-react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { logout as authLogout } from '../../store/slices/authSlice';
import { logout as todoLogout } from '../../store/slices/todoSlice';

const TodoApp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(authLogout()); 
    dispatch(todoLogout());
  }

  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-8">

      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Welcome, {user?.username}!
          </h1>
          <p className="text-gray-600 mt-1">Manage your tasks efficiently</p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors w-full sm:w-auto"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default TodoApp;

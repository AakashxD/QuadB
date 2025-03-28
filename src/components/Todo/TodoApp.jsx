import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from 'lucide-react';
import { logout } from '../../store/slices/authSlice';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TodoApp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user?.username}!
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your tasks efficiently
          </p>
        </div>
        <button
          onClick={() => dispatch(logout())}
          className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>

      {/* Todo Components */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default TodoApp;
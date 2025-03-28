import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlusCircle } from 'lucide-react';
import { addTask } from '../../store/slices/todoSlice';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        id: Date.now().toString(),
        title: title.trim(),
        priority,
        completed: false,
        createdAt: Date.now(),
      };
      dispatch(addTask(newTask));
      setTitle('');
      setPriority('medium');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-4 px-2 sm:px-4"
    >
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        <button
          type="submit"
          className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
};

export default TaskInput;

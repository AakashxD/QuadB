import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { deleteTask, toggleTask } from '../../store/slices/todoSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return (priorityOrder[b.priority] - priorityOrder[a.priority]) || (b.createdAt - a.createdAt);
  });

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 text-sm sm:text-base">
        No tasks yet. Add some tasks to get started!
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-4 px-2 sm:px-4">
      {sortedTasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg transition-all shadow-sm ${
            task.completed ? 'opacity-75' : ''
          }`}
        >
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => dispatch(toggleTask(task.id))}
              className="focus:outline-none"
            >
              {task.completed ? (
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              ) : (
                <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              )}
            </button>
            <span
              className={`text-sm sm:text-lg ${
                task.completed ? 'line-through text-gray-400' : 'text-gray-700'
              }`}
            >
              {task.title}
            </span>
            <span
              className={`hidden sm:inline-block text-xs sm:text-sm font-medium ${getPriorityColor(task.priority)}`}
            >
              {task.priority}
            </span>
          </div>

          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="p-2 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

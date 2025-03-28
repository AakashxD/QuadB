import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  weather: null,
  loading: false,
  error: null,
};
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async () => {
    const API_KEY = import.meta.env.VITE_API_KEY; 
    const CITY = "Delhi";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(response);
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather");
      }
      return {
        temperature: data.main.temp,
        description: data.weather[0].description,
      };
    } catch (error) {
      throw new Error("Error fetching weather: " + error.message);
    }
  }
);
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    restoreTasks: (state) => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch weather';
        state.loading = false;
      });
  },
});

export const { addTask, deleteTask, toggleTask, restoreTasks } = todoSlice.actions;
export default todoSlice.reducer;

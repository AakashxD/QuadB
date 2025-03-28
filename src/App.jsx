import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from './components/Auth/LoginForm';
import TodoApp from './components/Todo/TodoApp';
import Home from './pages/Home';

function AppRoutes() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        {isAuthenticated ? (
          <Route path="/todos" element={<Home />} />
        ) : (
          <Route path="/todos" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  );
}

export default AppRoutes;

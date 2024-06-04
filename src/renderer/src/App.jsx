import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthenticatedPage from './pages/AuthenticatedPage'; // Componente para a rota autenticada
import ProtectedRoute from './components/ProtectedRoute';

function App() {


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

            <Route path="/authenticated" element={
            <ProtectedRoute>  
                 <AuthenticatedPage />
            </ProtectedRoute>} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
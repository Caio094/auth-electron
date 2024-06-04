import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Adicionado para redirecionamento

function AuthenticatedPage() {
  const nav = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirecionar para a página de login após o logout
  nav("/")
  };

  return (
    <div>
      <h2>Você está autenticado!</h2>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default AuthenticatedPage;

import { Link } from 'react-router-dom';

function Header({ isLoggedIn }) {
  if(!isLoggedIn){

    return (
      <div>
        <Link to="/register">Registrar</Link>
        <Link to="/">Login</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/authenticated">Página Autenticada</Link>
    </div>
  );
}

export default Header;
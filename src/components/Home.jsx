import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Bienvenido</h2>
      <p>Selecciona una opción:</p>
      <button onClick={() => navigate('/login')}>Ir al Login</button>
      <button onClick={() => navigate('/register')}>Ir al Registro</button>
    </div>
  );
}

export default Home;

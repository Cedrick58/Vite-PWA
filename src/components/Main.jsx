import React from 'react';
import '../App.css';

function Main() {
  return (
    <div className="page-container">
      <h2 className="page-title">Bienvenido</h2>
      <h2 className="page-title">Login</h2>      <button
        className="button"
        onClick={() => alert('Imposible acceder')}
      >
        Click
      </button>
    </div>
  );
}


export default Main;

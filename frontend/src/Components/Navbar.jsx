import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
        <Link
          to={ '/services' }
        >
          Todos os Serviços
        </Link>
    </header>
  );
}

export default NavBar;

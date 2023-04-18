import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <Link
        to={ '/services' }
      >
        Todos os Serviços
      </Link>
      /
      <Link
        to={ '/' }
      >
        Castrar um Serviço
      </Link>
    </header>
  );
}

export default NavBar;

import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <Link
        to={ '/' }
      >
        Castrar um Serviço
      </Link>
    </header>
  );
}

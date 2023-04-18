import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

export default function NavBar() {
  return (
    <header>
      <Link
        to={'/'}
        className='link'
      >
        Castrar um Novo Serviço
      </Link>
    </header>
  );
}

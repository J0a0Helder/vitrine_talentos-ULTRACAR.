import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { requestPost } from '../services/request';
import MyContext from '../context/MyContext';
import NavBar from '../Components/Navbar';

export default function HomePage() {
  const {
    getEmployees, getClients, getProducts,
    employeesList, clientsLists, productsList
  } = useContext(MyContext);
  
  const [saleInfo, setSaleInfo] = useState({colaboradorId: '1', clienteId: '1', total: '0'});
  const navigate = useNavigate();

  const startService = async (event) => {
    event.preventDefault();
    try {
      await requestPost('/service', { ...saleInfo });
      navigate(`/service/orders`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = useCallback(
    ({ target }) => {
      const auxValues = { ...saleInfo };
      auxValues[target.name] = target.value;
      setSaleInfo(auxValues);
    },
    [saleInfo, setSaleInfo],
  );

  useEffect(() => {
    getClients();
    getEmployees();
    getProducts()
  }, [getClients, getEmployees, getProducts]);

  return (
    <>
      <NavBar />
      <form>
        <label>
          <h4>P. colaboradora Responsável:</h4>
          <select
            name="colaboradorId"
            onChange={handleChange}
            defaultValue={1}
          >
            { employeesList.map((emp, index) => (
              <option
                key={ index }
                name={ emp.nome }
                value={ emp.id }
              >
                {emp.nome}
              </option>
            ))}
          </select>
        </label>
        <label>
          <h4>Cliente:</h4>
          <select
            name="clienteId"
            onChange={ handleChange }
          >
            { clientsLists.map((client, index) => (
              <option
                key={ index }
                name={ client.nome }
                value={ client.id }
              >
                {client.nome}
              </option>
            ))}
          </select>
        </label>
        <label>
          <h4>Produto inicial:</h4>
          <select
            name="total"
            onChange={handleChange}
            defaultValue={'Apenas Mão de Obra'}
          >
            { productsList.map((prod, index) => (
              <option
                key={ index }
                name={ prod.nome }
                value={ prod.preco }
              >
                {prod.nome}
              </option>
            ))}
          </select>
        </label>
        <h2>TOTAL PARCIAL: {`R$${saleInfo.total}`}</h2>
        <button
            type="button"
            className="button"
            onClick={ startService }
          >
            Iniciar Atendimento
          </button>
      </form>
    </>
  )
}
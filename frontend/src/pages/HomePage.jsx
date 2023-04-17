import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { requestPost } from '../services/request';
import MyContext from '../context/MyContext';

export default function HomePage() {
  const {
    getEmployees, getClients,
    employeesList, clientsLists,
  } = useContext(MyContext);

  const navigate = useNavigate();

  const [saleInfo, setSaleInfo] = useState([]);

  // console.log(formsInfo);

  const startService = async (event) => {
    event.preventDefault();
    try {
      const { id } = await requestPost('/service', { saleInfo });
      navigate(`/service/orders/${id}`);
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
  }, [getClients, getEmployees]);

  return (
    <form>
      <label>
        <h4>P. colaboradora Responsável:</h4>
        <select
          name="colaboradorId"
          onChange={ handleChange }
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
      <button
          type="button"
          className="button"
          onClick={ startService }
        >
          Iniciar Atendimento
        </button>
    </form>
  )
}
import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { requestGet, requestPost } from '../services/request';
import MyContext from '../context/MyContext';
import NavBar from '../Components/Navbar';

export default function FinishedSale() {
  const {
    getEmployees, getClients,
    clientsLists, employeesList
  } = useContext(MyContext);
  
  const [saleInfo, setSaleInfo] = useState({ colaboradorId: '1', clienteId: '1', total: '50' });
  const { clienteId } = saleInfo
  const [clientInfo, setClientInfo] = useState({});
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = useCallback(
    ({ target }) => {
      const auxValues = { ...saleInfo };
      auxValues[target.name] = target.value;
      setSaleInfo(auxValues);
    },
    [saleInfo, setSaleInfo],
  );

  const startService = async (event) => {
    event.preventDefault();
    try {
      const { id } = await requestPost('/service', { ...saleInfo });
      navigate(`/services/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getClientInfo = async (event) => {
    event.preventDefault();
    try {
      const client = await requestGet(`/clients/${clienteId}`);
      setClientInfo(client)
      setShowButton(true)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getClients();
    getEmployees();
  }, [getClients, getEmployees]);

  return (
    <>
      <NavBar />
      <form>
      <label>
          <h4>P. colaboradora Responsável:</h4>
          <select
            name="colaboradorId"
            onChange={handleChange}
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
          <h4>Selecione o Cliente:</h4>
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
          onClick={ getClientInfo }
        >
          Visualizar dados do cliente
        </button>
        {
          showButton &&
          (
            <>
              <button
                type="button"
                className="button"
                onClick={ startService }
              >
                Iniciar Atendimento
              </button>
              <h1>{`Carro: ${clientInfo.carro}`}</h1>
              <h2>{`Cor: ${clientInfo.corCarro}`}</h2>
              <h2>{`Telefone: ${clientInfo.telefone}`}</h2>
            </>
          )
        }
        <h3>ou</h3>
        <button
          type="button"
          className="button"
        >
          Cadastrar um novo cliente
        </button>
      </form>
    </>
  )
}
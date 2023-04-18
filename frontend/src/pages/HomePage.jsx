import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { requestGet, requestPost } from '../services/request';
import MyContext from '../context/MyContext';
import '../styles/homePage.css'
import logo from '../images/logo.png'

export default function HomePage() {
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
    <main className='main-home'>
      <section>
        <div className="logo">
          <img src={ logo } alt="logo imagem" width='300px' />
        </div>
        <form className="card-form">
        <label className='text-field'>
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
          <label className='text-field'>
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
            className="btn-dados"
            onClick={ getClientInfo }
          >
            Visualizar dados do cliente
          </button>
          {
            showButton &&
            (
              <>
                <h1>{`Carro: ${clientInfo.carro}`}</h1>
                <h1>{`Cor: ${clientInfo.corCarro}`}</h1>
                <h1>{`Telefone: ${clientInfo.telefone}`}</h1>
                <button
                  type="button"
                  className="btn-dados"
                  onClick={ startService }
                >
                  Iniciar Atendimento
                </button>
              </>
            )
          }
          <h3>ou</h3>
          <button
            type="button"
            className="btn-new"
          >
            Cadastrar um novo cliente
          </button>
        </form>
      </section>
    </main>
  )
}
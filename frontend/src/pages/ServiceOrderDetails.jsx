import React, { useCallback, useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import MyContext from '../context/MyContext';
import { convertTotal } from '../utils/formatValues';
import { useNavigate, useParams } from 'react-router-dom';
import { requestPut } from '../services/request';

export default function ServiceOrderDetails() {
  const { getProducts, productsList } = useContext(MyContext);
  const [serviceInfo, setServiceInfo] = useState({ total: '50' });

  const { total } = serviceInfo

  const navigate = useNavigate();
  const { id } = useParams();

  const finishSale = async (event) => {
    event.preventDefault();
    const finalizadoEm = Date.now();
    const body = {
      finalizadoEm,
      total,
    }
    try {
      await requestPut(`/service/${id}`, body);
      navigate(`/finished/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  
  const handleChange = useCallback(
    ({ target }) => {
      const auxValues = { ...serviceInfo };
      auxValues[target.name] = target.value;
      setServiceInfo(auxValues);
    },
    [serviceInfo, setServiceInfo],
  );

  useEffect(() => {
    getProducts()
  }, [getProducts]);

  return (
    <div>
      <Navbar />
      <form>
        <label>
          <h4>Produto Usado:</h4>
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
        <h2>TOTAL: {convertTotal(serviceInfo.total)}</h2>
        <button
          type='button'
          onClick={ finishSale }
        >
          Finalizar Atendimento
        </button>
      </form>
    </div>
  );
}

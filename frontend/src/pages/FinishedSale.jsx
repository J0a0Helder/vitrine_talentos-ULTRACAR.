import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import { requestGet } from '../services/request';
import NavBar from '../Components/Navbar';
import { convertDate, convertTotal } from '../utils/formatValues';

export default function FinishedSale() {
  const { id } = useParams();

  const [clientInfo, setClientInfo] = useState({});
  const [saleInfo, setSaleInfo] = useState({});
  const [employeeInfo, setEmployeeInfo] = useState({});

  const getSaleInfo = useCallback(async () => {
    try {
      const sale = await requestGet(`/service/${id}`);
      setSaleInfo(sale);
      const { clienteId, colaboradorId } = sale;
      const client = await requestGet(`/clients/${clienteId}`);
      setClientInfo(client);
      const employee = await requestGet(`/employees/${colaboradorId}`);
      setEmployeeInfo(employee);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  useEffect(() => {
    getSaleInfo()
  }, [getSaleInfo]);

  return (
    <>
      <NavBar />
      <h1>Serviço Finalizado:</h1>
      <table className="usersTable">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Carro</th>
            <th>Colaborador</th>
            <th>Inicio</th>
            <th>Termino</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {clientInfo.nome}
            </td>
            <td>
              {clientInfo.carro}
            </td>
            <td>
              {employeeInfo.nome}
            </td>
            <td>
              {convertDate(saleInfo.iniciadoEm)}
            </td>
            <td>
              {convertDate(saleInfo.finalizadoEm)}
            </td>
            <td>
              {convertTotal(saleInfo.total)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
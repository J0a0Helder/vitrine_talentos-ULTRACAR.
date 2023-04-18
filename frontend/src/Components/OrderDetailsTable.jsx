import React, { useCallback, useEffect, useState } from 'react';
import { requestGet } from '../services/request';
import { convertTotal, convertDate, addZerosOnRightSide } from '../utils/formatValues';


function OrderDetailsTable() {
  const [salesList, setSalesList] = useState([]);

  const getSales = useCallback(async () => {
    try {
      const order = await requestGet('/service');
      setSalesList(order);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getSales();
  }, [getSales]);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>número</th>
            <th>colaborador</th>
            <th>cliente</th>
            <th>Valor Unitário</th>
            <th>Iniciado em</th>
          </tr>
        </thead>
        <tbody>
          {
            salesList.map((sale, i) => (
              <tr key={ i }>
                <td>
                  {addZerosOnRightSide(sale.id)}
                </td>
                <td>
                  {sale.colaborador.nome}
                </td>
                <td>
                  {sale.cliente.nome}
                </td>
                <td>
                  {`R$${convertTotal(sale.total)}`}
                </td>
                <td>
                  {convertDate(sale.iniciadoEm)}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetailsTable;

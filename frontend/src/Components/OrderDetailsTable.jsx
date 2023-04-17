import React/* { useCallback, useEffect, useState } */from 'react';
// import { useParams } from 'react-router-dom';
// import { requestGet } from '../services/request';
// import { convertTotal } from '../utils/formatValues';

function OrderDetailsTable() {
  // const { id } = useParams();

  // const getOrder = useCallback(async () => {
  //   try {
  //     const { products, totalPrice } = await requestGet(`/sales/${id}`);
  //     setProductsList(products);
  //     setTotal(totalPrice);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   getOrder();
  // }, [getOrder]);

  return (
    <h1>ok</h1>
    // <div className="container">
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Item</th>
    //         <th>Descrição</th>
    //         <th>Quantidade</th>
    //         <th>Valor Unitário</th>
    //         <th>Sub-total</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {
    //         productsList.map((e, i) => (
    //           <tr key={ i }>
    //             <td
    //               data-testid={
    //                 `${type}_order_details__element-order-table-item-number-${i}`
    //               }
    //             >
    //               {i + 1}
    //             </td>
    //             <td
    //               data-testid={
    //                 `${type}_order_details__element-order-table-name-${i}`
    //               }
    //             >
    //               {e.name}
    //             </td>
    //             <td
    //               data-testid={
    //                 `${type}_order_details__element-order-table-quantity-${i}`
    //               }
    //             >
    //               {e.SalesProducts.quantity}
    //               x
    //             </td>
    //             <td
    //               data-testid={
    //                 `${type}_order_details__element-order-table-unit-price-${i}`
    //               }
    //             >
    //               {`R$${convertTotal(e.price)}`}
    //             </td>
    //             <td
    //               data-testid={
    //                 `${type}_order_details__element-order-table-sub-total-${i}`
    //               }
    //             >
    //               {`R$${convertTotal((e.price * e.SalesProducts.quantity))}`}
    //             </td>
    //           </tr>
    //         ))
    //       }
    //     </tbody>
    //   </table>
    //   <h2
    //     className="total-price"
    //     data-testid={
    //       `${type}_order_details__element-order-total-price`
    //     }
    //   >
    //     TOTAL: R$
    //     {convertTotal(total)}
    //   </h2>
    // </div>
  );
}

export default OrderDetailsTable;

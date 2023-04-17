import React /* { useCallback, useEffect } */ from 'react';
import { useParams } from 'react-router-dom';
// import { requestGet } from '../services/request';
// import { addZerosOnRightSide, convertDate } from '../utils/formatValues';

function OrderDetailsHeader() {
  const { id } = useParams();

  // const getOrder = useCallback(async () => {
  //   try {
  //     const order = await requestGet(`/${type}/orders/${id}`);
  //     setOrder(order);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, [id, type]);

  // useEffect(() => {
  //   getOrder();
  // }, [getOrder]);

  // const { saleDate, status, seller } = orderList;

  return (
    <h1>ok</h1>
    // <div className="container-header-order-details">
    //   <div
    //     data-testid={ `${type}_order_details__element-order-details-label-order-id` }
    //   >
    //     <h2>{ `PEDIDO: ${addZerosOnRightSide(orderList.id)}` }</h2>
    //   </div>
    //   {
    //     type === 'customer'
    //     && (
    //       <div
    //         data-testid={
    //           `${type}_order_details__element-order-details-label-seller-name`
    //         }
    //       >
    //         <span className="text-header">{ `P. Vend: ${seller.name}` }</span>
    //       </div>
    //     )
    //   }
    //   <div
    //     data-testid={ `${type}_order_details__element-order-details-label-order-date` }
    //   >
    //     <h2>
    //       { `${convertDate(saleDate)}` }
    //     </h2>
    //   </div>
    //   <div>
    //     <h2
    //       data-testid={
    //         `${type}_order_details__element-order-details-label-delivery-status`
    //       }
    //     >
    //       { status }
    //     </h2>
    //   </div>
    //   <div
    //     className="btn-status"
    //     data-testid={ `${type}_order_details__button-delivery-check` }
    //   >
    //     <StatusButton
    //       getOrder={ getOrder }
    //       currentStatus={ status }
    //     />
    //   </div>
    // </div>
  );
}

export default OrderDetailsHeader;

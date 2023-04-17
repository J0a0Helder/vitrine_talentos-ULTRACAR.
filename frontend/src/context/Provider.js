import React, { useCallback, useMemo, useState } from 'react';
import { requestGet } from '../services/request';
import MyContext from './MyContext';

function Provider({ children }) {
  const [productsList, setProductsList] = useState([{}]);
  const [clientsLists, setClientsLists] = useState([]);
  const [employeesList, setEmployeesList] = useState([]);
  const [formsInfo, setFormsInfo] = useState();

  const handleChange = useCallback(
    ({ target }) => {
      const auxValues = { ...formsInfo };
      auxValues[target.name] = target.value;
      setFormsInfo(auxValues);
    },
    [formsInfo],
  );

  // --------- requests ----------- //
  const getProducts = useCallback(async () => {
    try {
      const productsList = await requestGet('/products');
      setProductsList(productsList);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const getEmployees = useCallback(async () => {
    try {
      const employees = await requestGet('/users');
      setEmployeesList(employees);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const getClients = useCallback(async () => {
    try {
      const clients = await requestGet('/clients');
      setClientsLists(clients);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      handleChange,
      setFormsInfo,
      getProducts,
      formsInfo,
      getEmployees,
      getClients,
      productsList,
      clientsLists,
      employeesList
    }),
    [
      handleChange,
      getProducts,
      formsInfo,
      getEmployees,
      getClients,
      productsList,
      clientsLists,
      employeesList
    ],
  );

  return (
    <MyContext.Provider value={ contextValue }>{children}</MyContext.Provider>
  );
}

export default Provider;

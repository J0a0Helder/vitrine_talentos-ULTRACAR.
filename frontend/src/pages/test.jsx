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
<h2>TOTAL PARCIAL: {convertTotal(saleInfo.total)}</h2>

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
import React from "react";

const CrudTableRow = ({ row, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = row;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(row)}>Editar</button>
          <button onClick={() => deleteData(id)}>Borrar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;

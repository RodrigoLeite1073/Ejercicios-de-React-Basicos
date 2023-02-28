import React from "react";

const CrudTableRow = ({ row }) => {
  return (
    <>
      <tr>
        <td>{row.name}</td>
        <td>{row.constellation}</td>
        <td>
          <button>Editar</button>
          <button>Borrar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;

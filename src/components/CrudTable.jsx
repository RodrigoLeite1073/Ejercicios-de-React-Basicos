import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <>
      <h3>Tabla de Contenido</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colspan="3">Sin Datos Para Mostrar</td>
            </tr>
          ) : (
            data.map(e => <CrudTableRow key={e.id} row={e} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;

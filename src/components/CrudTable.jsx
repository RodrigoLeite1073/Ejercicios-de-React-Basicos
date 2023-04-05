import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de Contenidos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((e) => (
              <CrudTableRow
                key={e.id}
                row={e}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin Datos Para Mostrar</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;

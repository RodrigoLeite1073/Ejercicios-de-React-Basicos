import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const INITIAL_DB = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(INITIAL_DB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = data => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = data => {
    let newData = db.map(el => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = id => {
    const canDelete = window.confirm(
      "Esta seguro de borrar este post, esta accion no puede ser deshecha."
    );
    if (!canDelete) {
      return;
    }
    const newData = db.filter(el => el.id !== id);
    setDb(newData);
  };

  return (
    <div>

      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;

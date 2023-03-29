import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:3000/santos";
  useEffect(() => {
    api.get(url).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb(res);
      } else {
        setDb([]);
      }
    });
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    const canDelete = window.confirm(
      "Esta seguro de borrar este post, esta accion no puede ser deshecha."
    );
    if (!canDelete) {
      return;
    }
    const newData = db.filter((el) => el.id !== id);
    setDb(newData);
  };

  return (
    <div>
      <h2>CRUD Api</h2>
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

export default CrudApi;

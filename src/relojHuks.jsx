import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  useEffect(() => {
    console.log("montado");
    return () => console.log("desmontado");
  }, []);
  return <h3>{hora}</h3>;
}

export default function RelojHuks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (isVisible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
  }, [isVisible]);

  return (
    <>
      <h2>Reloj con Huks</h2>
      {isVisible && <Reloj hora={hora} />}
      <button onClick={() => setIsVisible(true)}>Iniciar</button>
      <button onClick={() => setIsVisible(false)}>Detener</button>
    </>
  );
}

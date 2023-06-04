import React, { useState,useEffect } from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioNoticias from './components/FormularioNoticias';

function App() {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
      consultarApi();
    }, []);

  const consultarApi = async () => {
      try {
          const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_239768cda23b718e6b5dd3915e53ef06844da&q=pizza");
          const dato = await respuesta.json();
          setNoticias(dato.results)
      } catch (error) {
          console.log(error);
      }
  }


  return (
    <>
<FormularioNoticias noticias={noticias}></FormularioNoticias>
    </>
  )
}

export default App

import React, { useState,useEffect } from "react";
import {  Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = ({noticias}) => {
    const [select , setSelect] = useState('');
   const arrayNoticias= [...noticias]
    const noticiasFiltradas = arrayNoticias.filter((noticia) =>{
        if(select==noticia.category){       
            return JSON.stringify(noticia)
        }
      
        
    } )
    
    
  return (
    <div className="container border border-black mt-5">
      <h1 className="text-center my-3">Noticias</h1>
      <hr className="mb-3" />
      <Form >
        <Row>
          <Form.Group className="d-flex p-5"  >
            <Form.Label className="col-sm-5 col-lg-2">Busque por Categoria:</Form.Label>
            
            <select  onChange={(e) =>{
                return setSelect(e.target.value)}}
                    value={select}  className="w-100">
                  <option >opcion</option>
                  <option >business</option>
                  <option>politics</option>
                  <option>top</option>
            <option>entertainment</option>
            <option>environment</option>
            <option>food</option>
            <option>health</option>
         
            <option>science</option>
            <option>sports</option>
            <option>technology</option>

            <option>tourism</option>
            <option>world</option>
                </select>
          </Form.Group>
          
        </Row>
      </Form>
      <hr />
      <ListaNoticias noticiasFiltradas={noticiasFiltradas}></ListaNoticias>
      
   
    </div>
  );
};

export default FormularioNoticias;

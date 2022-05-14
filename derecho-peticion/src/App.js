import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { GetInstructivo1, GetInstructivo2, GetInstructivo3 } from './instructivo64';


function App() {

  const [estado, setestado] = useState('LLENANDO');

  const [ciudad, setCiudad] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [dirigido, setDirigido] = useState('');
  const [nombre, setNombre] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [aaaa, setAaaa] = useState('');
  const [cedula, setCedula] = useState('');
  const [cedulaDe, setCedulaDe] = useState('');

  const [asunto, setAsunto] = useState('');
  const [acercaCiudadano, setAcercaCiudadano] = useState('');
  const [hechos, setHechos] = useState('');
  const [peticiones, setPeticiones] = useState('');

  const instructivo1b64 = GetInstructivo1();
  const instructivo2b64 = GetInstructivo2();
  const instructivo3b64 = GetInstructivo3();


  const OnChangeGenerarDocumento = () => {

    setestado('GENERANDO');

  }

  const OnChangeVolver = () => {

    setestado('LLENANDO');

  }

  useEffect(() => {

    // setCiudad("Cali");
    // setDepartamento("Valle del Cauca");
    // setDirigido("Ciudadano");
    // setNombre("Juan Perez");
    // setDia("01");
    // setMes("01");
    // setAaaa("2020");
    // setCedula("123456789");
    // setCedulaDe("123456789");
    // setAsunto("Derecho de peticion de interes médico.");
    // setAcercaCiudadano("Acerca de la ciudadana");
    // setHechos("1 . is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
    // setPeticiones("2. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");




  }, [])



  const GetDocumento = () => {



    return (
      <div className="documento">
        <div>{ciudad},{departamento + " "}{dia + " de " + mes + " de " + aaaa} </div>


        <div style={{ marginTop: '60px' }} >Señores:</div>
        <b>{dirigido}</b>
        <div style={{ marginTop: '60px' }} >Asunto:{asunto}</div>
        <div style={{ marginTop: '10px' }} >
          Yo <b>{nombre}</b>, identificado/a con la cedula de ciudadanía No. {cedula} de {cedulaDe} , {acercaCiudadano} , teniendo en cuenta los mencionados
          acontiniacion hechos y peticiones a conitnuacion relaciono la informacion de esta solicitud:</div>
        <div style={{ marginTop: '60px', textAlign: "center" }} ><b>HECHOS</b></div>
        <div style={{ marginTop: '10px' }} >
          {hechos}</div>

        <div style={{ marginTop: '20px', textAlign: "center" }} ><b>PETICIONES</b></div>
        <div style={{ marginTop: '10px' }} >
          {peticiones}</div>

        <div style={{ marginTop: '100px' }}>
          <button type="button" className="btn btn-primary" onClick={OnChangeVolver}>Volver</button>
        </div>
      </div>

    )

  }

  const GetTextoEjemplo = (texto, ejemplo) => {

    return (
      <div className="m5">
        <p>
          <b>{texto} </b>
        </p>
        <p>
          Ejemplo: {ejemplo}
        </p>
      </div>

    )
  }

  const GetTextoInput = (valor, onChange, css) => {

    return (
      <div className="m5">
        <input class={"input " + css} type="text" value={valor} onChange={e => onChange(e.target.value)} />
      </div>
    )
  }

  const GetTextoAreaInput = (valor, onChange, css) => {

    return (
      <div className="m5">
        <textarea class={"tarea " + css} rows="10" cols="50" value={valor} onChange={e => onChange(e.target.value)} />
      </div>
    )
  }

  return (
    <div>

      {(estado === 'LLENANDO' &&
        <div className="App">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="textdata">
              <div >
                <p>
                  Hola Generemos tu derecho de petición
                </p>
              </div>
              <div>
                <p>
                  Iniciemos con datos básicos
                </p>
                <a href="https://static.docsity.com/documents_first_pages/2020/03/15/11c986c9a4eeb2737d8a8623b4e48767.png" target="_blank">Click para ver ejemplo de https://www.docsity.com/</a>
              </div>
            </div>

          </div>
          <div>
            <div className="tcolum" >
              <div>
                {GetTextoEjemplo("Escribe tu Ciudad", "Bogotá")}
                {GetTextoInput(ciudad, setCiudad)}
              </div>
              <div>
                {GetTextoEjemplo("Escribe tu Departamento", "Cundinamarca")}
                {GetTextoInput(departamento, setDepartamento)}
              </div>
              <div>
                {GetTextoEjemplo("Escribe aquí a quien va dirigido el derecho de petición", "Secretaria Municipal de Educación")}
                {GetTextoInput(dirigido, setDirigido)}
              </div>
            </div>


            <div className="tcolum" >
              <div>
                {GetTextoEjemplo("Escribe aquí tu nombre completo", "LUIS FRANCISO ALBERTO MARTINEZ")}
                {GetTextoInput(nombre, setNombre)}
              </div>
              <div>
                {GetTextoEjemplo("Escribe el dia", "01")}
                {GetTextoInput(dia, setDia, "i-s")}
              </div>
              <div>
                {GetTextoEjemplo("Escribe el mes", "01")}
                {GetTextoInput(mes, setMes, "i-m")}
              </div>
              <div>
                {GetTextoEjemplo("Escribe el año", "2020")}
                {GetTextoInput(aaaa, setAaaa, "i-m")}
              </div>
            </div>

            <div>
              {GetTextoEjemplo("Escribe aquí tu asunto", "Derecho de petición de interes médico, viaticos, etc.")}
              {GetTextoAreaInput(asunto, setAsunto)}

            </div>


            <div>
              {GetTextoEjemplo("Escribe aquí tu cedula", "10203040")}
              {GetTextoInput(cedula, setCedula)}
            </div>

            <div>
              {GetTextoEjemplo("Escribe aquí ciudad expedicion cedula", "Aguachica")}
              {GetTextoInput(cedulaDe, setCedulaDe)}

            </div>

            <div>
              {GetTextoEjemplo("Escribe aquí mas acerca de usted ejemplo", "Residente de Barrio los cocos, en representación de la ciudadana ejerciendo el derecho del articulo 2 de la constitucion  ")}
              {GetTextoAreaInput(acercaCiudadano, setAcercaCiudadano)}
            </div>
            <div>
              {GetTextoEjemplo("Escribe aquí los hechos", " 1. No disponibilidad  de recursos para representar a la academia.")}
              {GetTextoAreaInput(hechos, setHechos)}

            </div>
            <div>
              {GetTextoEjemplo("Escribe aquí las peticiones", "1. Se solicita ayuda economica para el transporte hacia la ciudad de valledupar.")}
              {GetTextoAreaInput(peticiones, setPeticiones)}

            </div>

            <div>
              <button type="button" className="btn btn-primary" onClick={OnChangeGenerarDocumento}>Imprimir</button>
            </div>

            <div>
              <p>
                Como imprimir
              </p>
              <img src={instructivo1b64} ></img>
              <img src={instructivo2b64} ></img>
              <p>
                Como modificar algo
              </p>
              <img src={instructivo3b64} ></img>



            </div>


          </div>
        </div>
      )}

      {(estado === 'GENERANDO' &&
        GetDocumento()
      )}
    </div>
  );



}

export default App;

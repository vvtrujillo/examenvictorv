import './App.css';
import { Container } from 'reactstrap';
import Main from './Componentes/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Componentes/registro/login';
import Registro from './Componentes/registro/registro';
import { useEffect, useState } from 'react';

function App() {

  const navigate = useNavigate(); 

  const [usuario, setUsuario] = useState();

  useEffect(() => {
    if(!usuario) {
      if(sessionStorage.getItem('USUARIO')){
        setUsuario(JSON.parse(sessionStorage.getItem('USUARIO')));
      }else {
        navigate('/login');
      }
    } else {
      sessionStorage.setItem('USUARIO', JSON.stringify(usuario));
    }
  }, [])


  useEffect(() => {
    if(!usuario) {
      if(sessionStorage.getItem('USUARIO')){
        setUsuario(JSON.parse(sessionStorage.getItem('USUARIO')));
      }else {
        navigate('/login');
      }
    } else {
      sessionStorage.setItem('USUARIO', JSON.stringify(usuario));
    }
  }, [])

  return (
    <Container>
      <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/*" element={<Main />}></Route>
        </Routes>
    </Container>
  );
}

export default App;

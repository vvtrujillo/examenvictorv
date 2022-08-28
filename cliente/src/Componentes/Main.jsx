import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';


const Main = () => {

    const navigate = useNavigate();

    const salir = (e) => {
        sessionStorage.removeItem('USUARIO');
        navigate('/login');
    }

    return (
        <React.Fragment>
            <Container>
            <Col xs={12} md={6} lg={3}><Button className='btn btn-danger' onClick={salir}>Salir</Button></Col>
                <h1>Examen</h1>
            </Container>
        </React.Fragment>
    )
}

export default Main;
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from "react-router-dom";


const dataInicial = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Registro = () => {

    const [formulario, setFormulario] = useState(dataInicial);

    const actualizarFormulario = ({target: {name, value}}) => {
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const enviar = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/usuario', formulario)
            .then(respuesta => {
                if(!respuesta.data.error) {
                    Swal.fire('Registro', "El usuario se ha registrado exitósamente", "success");
                    setFormulario(dataInicial);
                } else {
                    Swal.fire('Registro', "Ha ocurrido un error al regitrar el usuario", "error");
                }
            })
    }

    return (
        <React.Fragment>
            <Form onSubmit={enviar}>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text"
                           name="nombre"
                           required
                           value={formulario.nombre}
                           onChange={actualizarFormulario}
                           placeholder='Nombre...'/>
                </FormGroup>
                <FormGroup>
                    <Label>Apellido</Label>
                    <Input type="text"
                           name="apellido"
                           required
                           value={formulario.apellido}
                           onChange={actualizarFormulario}
                           placeholder='Apellido...'/>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email"
                           name="email"
                           required
                           value={formulario.email}
                           onChange={actualizarFormulario}
                           placeholder='Email...'/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password"
                           name="password"
                           minLength={6}
                           value={formulario.password}
                           onChange={actualizarFormulario}
                           placeholder='Password...'/>
                </FormGroup>
                <FormGroup>
                    <Label>Confirmar Password</Label>
                    <Input type="password"
                           name="confirmPassword"
                           minLength={6}
                           value={formulario.confirmPassword}
                           onChange={actualizarFormulario}
                           placeholder='Confirmar Password...'/>
                </FormGroup>
                <Button type="submit" color='primary'>Guardar</Button>

            </Form>
            <Link to={'/login'}>Ingresar</Link>

        </React.Fragment>
    )
}

export default Registro;
import axios from "axios";
import React, { useEffect } from "react";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const signupAPI = "http://tesourodireto.online/api/signup"

const Login = () => {
    const navigate = useNavigate();
    const submitLoginForm = (event) => {
        event.preventDefault();
        const formElement = document.querySelector('#loginForm');
        const formData = new FormData(formElement);
        const formDataJSON = Object.fromEntries(formData);
        const btnPointer = document.querySelector('#login-btn');
        btnPointer.innerHTML = 'Carregando...';
        btnPointer.setAttribute('disabled', true);
        console.log(formDataJSON);
        axios.post(signupAPI, formDataJSON).then((response) => {
            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');
            const data = response.data;
            if (data.result.error == undefined) {
                navigate('/login');
            } else {
                alert("Dados de cadastro inválidos.");
            }
        }).catch((error) => {
            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');
            alert("Oops! Some error occured.");
        });
    }
    useEffect(() => {
        document.title = 'Tesouro Direto - Cadastro';
      }, []);
    return (
        <React.Fragment>
            <Container className="my-5">
                <h2 className="fw-normal mb-5">Cadastro</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form id="loginForm" onSubmit={submitLoginForm}>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-username'}>Email</FormLabel>
                                <input type={'text'} className="form-control" id={'login-username'} name="email" required />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-password'}>Password</FormLabel>
                                <input type={'password'} className="form-control" id={'login-password'} name="pass" required />
                            </FormGroup>
                            <Button type="submit" className="btn-success mt-2" id="login-btn">Cadastrar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
export default Login;
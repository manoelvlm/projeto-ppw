import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const loginAPI = "http://tesourodireto.online/api/login"

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const showLoginError = () => setShow(true);
  
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
        axios.post(loginAPI, formDataJSON).then((response) => {
            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');
            const data = response.data;
            if (data.result.error == undefined) {
                const token = data.result.token;
                localStorage.clear();
                localStorage.setItem('user-token', token);
                navigate('/');
            } else {
                showLoginError();
            }
        }).catch((error) => {
            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');
            showLoginError();
        });
    }

    useEffect(() => {
        document.title = 'Tesouro Direto - Login';
      }, []);

    const signup = (event) => {
        event.preventDefault();
        navigate('/signup');
    }
    return (
        <React.Fragment>
            <Container className="my-5">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Erro ao logar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Login e/ou senha inválido(s)! Tente novamente.</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                </Modal.Footer>
            </Modal>
                <h2 className="fw-normal mb-5">Login</h2>
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
                            <Button type="submit" className="btn-success mt-2" id="login-btn">Login</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Button onClick={signup} variant="link" id="login-btn">Cadastre-se</Button>
                </Row>
            </Container>
        </React.Fragment>
    );
}
export default Login;
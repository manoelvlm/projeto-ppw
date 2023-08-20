import axios from "axios";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from "primereact/inputtext";
import { Slider } from 'primereact/slider';
import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

function Questions() {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }
    const goToMap = () => {
        navigate('/maps');
    }
    const padding = {
        marginRight: '10px',
    };

    const SERVERIP = 'tesourodireto.online';
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [loading4, setLoading4] = useState(false);
    const [loading5, setLoading5] = useState(false);
    const [loading6, setLoading6] = useState(false);
    const [loading7, setLoading7] = useState(false);
    const [loading8, setLoading8] = useState(false);
    const [loading9, setLoading9] = useState(false);

    const [response, setResponse] = useState(null);
    const [response2, setResponse2] = useState(null);
    const [response3, setResponse3] = useState(null);
    const [response4, setResponse4] = useState(null);
    const [response5, setResponse5] = useState(null);
    const [response6, setResponse6] = useState(null);
    const [response7, setResponse7] = useState(null);
    const [response8, setResponse8] = useState(null);
    const [response9, setResponse9] = useState(null);

    const columns = [
        { field: 'city', header: 'Cidade' },
        { field: 'city_count', header: 'Quantidade' },
    ];
    const columns2 = [
        { field: 'age', header: 'Idade' },
        { field: 'total', header: 'Quantidade' },
    ];
    const columns3 = [
        { field: 'carreer', header: 'Profissão' },
        { field: 'carrer_count', header: 'Quantidade' },
    ];
    const columns4 = [
        { field: 'account_status', header: 'Status' },
        { field: 'total', header: 'Quantidade' },
    ];
    const columns5 = [
        { field: 'state', header: 'Profissão' },
        { field: 'state_count', header: 'Quantidade' },
    ];
    const columns6 = [
        { field: 'civil_state', header: 'Estado Civil' },
        { field: 'had_activity', header: 'Teve Atividade' },
        { field: 'had_not_activity', header: 'Não teve Atividade' }
    ];
    const columns7 = [
        { field: 'age', header: 'Idade' },
        { field: 'genre', header: 'Gênero' },
        { field: 'total', header: 'Quantidade' },
    ];
    const columns8 = [
        { field: 'year', header: 'Ano' },
        { field: 'total_by_year', header: 'Quantidade' },
    ];
    const columns9 = [
        { field: 'carreer', header: 'Profissão' },
        { field: 'had_activity', header: 'Teve Atividade' },
        { field: 'had_not_activity', header: 'Não teve Atividade' }
    ];


    const [stateValue, setStateValue] = useState("");
    const [ageValue, setAgeValue] = useState(18);
    const [value, setValue] = useState("");
    const [age, setAge] = useState("");
    const [idade, setIdade] = useState("");
    const [ageUF, setAgeUF] = useState("");
    const [uf, setuf] = useState("");

    const cardInfoStyle = {
        backgroundColor: '#B6C9E3',
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '10px',
    };

    const makeRequest = async (url) => {
        const res = await axios.post(url, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('user-token')}` }
            })
        return res;
    }


    useEffect(() => {
        document.title = 'Tesouro Direto';
      }, []);


    const age_distribution = async () => {
        setLoading(true)

        console.log(age);
        try {
            const res = makeRequest(`https://${SERVERIP}/api/age-distribution?age_min=${age[0]}&age_max=${age[1]}`);
            setResponse(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const top_3_most_common_jobs = async () => {
        setLoading2(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/top-n-common-jobs`);
            setResponse2(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse2("Erro ao buscar dados");
        } finally {
            setLoading2(false);
        }
    };

    const active_inactive_investidors_view = async () => {
        setLoading3(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/active-inactive-investidors`);
            setResponse3(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse3("Erro ao buscar dados");
        } finally {
            setLoading3(false);
        }
    };

    const state_most_investidors_lives = async () => {
        setLoading4(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/state-most-investidors`);
            setResponse4(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse4("Erro ao buscar dados");
        } finally {
            setLoading4(false);
        }
    };

    const city_most_investidors_lives = async () => {
        setLoading5(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/city-most-investidors?state=${uf}`);

            setResponse5(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse5("Erro ao buscar dados");
        } finally {
            setLoading5(false);
        }
    };

    const civil_status_investidors_activity = async () => {
        setLoading6(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/civil-status-year-activity`);
            setResponse6(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse6("Erro ao buscar dados");
        } finally {
            setLoading6(false);
        }
    };

    const investidors_genre = async () => {
        setLoading7(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/investidors-genre?age=${ageUF}`);
            setResponse7(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse7("Erro ao buscar dados");
        } finally {
            setLoading7(false);
        }
    };


    const accession_date_trend = async () => {
        setLoading8(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/accession-date-trend`);
            setResponse8(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse8("Erro ao buscar dados");
        } finally {
            setLoading8(false);
        }
    };

    const most_common_jobs_year_activities = async () => {
        setLoading9(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/most-common-jobs-year-activities`);
            setResponse(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading9(false);
        }
    };

    const investidor_activity_year_carreer = async () => {
        setLoading9(true);

        try {
            const res = makeRequest(`https://${SERVERIP}/api/investidor-activity-year-carreer`);
            setResponse9(res.data.result);
        } catch (error) {
            console.error(error);
            setResponse9("Erro ao buscar dados");
        } finally {
            setLoading9(false);
        }
    };

    return (
        <div>
            <React.Fragment>
                <Navbar bg="dark" expand="lg" className="navbar-dark">
                    <Container>
                        <Navbar.Brand>Tesouro Direto</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link>
                                    <Button className="btn-warning" onClick={logout} style={padding}>Logout</Button>
                                    <Button className="btn-warning" onClick={goToMap}style={padding}>Ver mapa de acessos</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
            <div className="info-card">
                <Card title="Sobre o dataset" style={cardInfoStyle}>
                    <p>
                        Usando como base o dataset escolhido, “Investidores do Tesouro Direto” foi criado <br></br>
                        um modelo de dados para aproveitamento e obtenção de informações estruturadas.<br></br> Com
                        um dataset em formato csv, tendo como cabeçalho os seguintes dados:
                    </p>
                    <ul>
                        <li>Código do Investidor,</li>
                        <li>Data de Adesão,</li>
                        <li>Estado Civil,</li>
                        <li>Gênero,</li>
                        <li>Profissão,</li>
                        <li>Idade,</li>
                        <li>UF(unidade federativa) do Investidor,</li>
                        <li>Cidade dos Investidor,</li>
                        <li>Situação da Conta e</li>
                        <li>Operou 12 meses.</li>
                    </ul>
                </Card>
            </div>
            <div>
                <Accordion multiple activeIndex={[value]}>

                    <AccordionTab header="Qual é a distribuição de idade entre os investidores cadastrados no programa Tesouro Direto?">
                        <div className="card flex small">
                            <InputText value={age} onChange={(e) => setAge(e.target.value)} />
                            <Slider value={age} onChange={(e) => setAge(e.value)} range />
                            <br />
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={age_distribution} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                <DataTable value={response} tableStyle={{ minWidth: '50rem' }}>
                                    {columns2.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable>
                            </Card>
                        </div>
                    </AccordionTab>


                    <AccordionTab header={"Quais são as três profissões mais comum entre os investidores?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading2} onClick={top_3_most_common_jobs} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                <DataTable value={response2} tableStyle={{ minWidth: '50rem' }}>
                                    {columns3.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable>
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a proporção de investidores ativos e inativos?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading3} onClick={active_inactive_investidors_view} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                <DataTable value={response3} tableStyle={{ minWidth: '50rem' }}>
                                    {columns4.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable>
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é o estado com o maior número de investidores registrados?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading4} onClick={state_most_investidors_lives} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                <DataTable value={response4} tableStyle={{ minWidth: '50rem' }}>
                                    {columns5.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable>
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Quais são as três cidades com os maiores números de investidores registrados por estado?"}>
                        <div className="card">
                            <InputText value={uf} onChange={(e) => setuf(e.target.value)} />
                            <Button label="Enviar" icon="pi pi-check" loading={loading5} onClick={() => city_most_investidors_lives(uf)} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                <div className="card">
                                    <DataTable value={response5} tableStyle={{ minWidth: '50rem' }}>
                                        {columns.map((col, i) => (
                                            <Column key={col.field} field={col.field} header={col.header} />
                                        ))}
                                    </DataTable>
                                </div>
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a relação entre estado civil e a atividade dos investidores no último ano?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading6} onClick={civil_status_investidors_activity} />
                        </div>
                        <div className="response">
                            <DataTable value={response6} tableStyle={{ minWidth: '50rem' }}>
                                {columns6.map((col, i) => (
                                    <Column key={col.field} field={col.field} header={col.header} />
                                ))}
                            </DataTable>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a proporção de gêneros entre os investidores por idade?"}>
                        <div className="card">
                            <InputText value={ageUF} onChange={(e) => setAgeUF(e.target.value)} />
                            <Button label="Enviar" icon="pi pi-check" loading={loading7} onClick={() => investidors_genre(ageUF)} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                <DataTable value={response7} tableStyle={{ minWidth: '50rem' }}>
                                    {columns7.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable>
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a tendência de adesão ao Tesouro Direto ao longo do tempo (anual)?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading8} onClick={accession_date_trend} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                <DataTable value={response8} tableStyle={{ minWidth: '50rem' }}>
                                    {columns8.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable>
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Existe alguma correlação entre a profissão do investidor e sua atividade no último ano?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading9} onClick={investidor_activity_year_carreer} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                <DataTable value={response9} tableStyle={{ minWidth: '50rem' }}>
                                    {columns9.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable>
                            </Card>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
}

export default Questions;


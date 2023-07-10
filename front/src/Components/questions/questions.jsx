import axios from "axios";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Slider } from 'primereact/slider';
import React, { useState } from "react";

function Questions() {

    const SERVERIP = '44.203.77.25';
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



    const [stateValue, setStateValue] = useState("");
    const [ageValue, setAgeValue] = useState(18);
    const [value, setValue] = useState("");
    const [age, setAge] = useState("");
    const [idade, setIdade] = useState("");

    const cardInfoStyle = {
        backgroundColor: '#B6C9E3',
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '10px',
    };


    const age_distribution = async () => {
        setLoading(true)

        console.log(age);
        try {
            const res = await axios.get(`http://${SERVERIP}:8000/api/age-distribution?age_min=${age[0]}&age_max=${age[1]}`);
            setResponse(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/top-n-common-jobs/`);
                setResponse2(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/active-inactive-investidors/`);
            setResponse3(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/state-most-investidors/`);
                setResponse4(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/city-most-investidors/`);
            setResponse5(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/civil-status-year-activity/`);
                setResponse6(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/investidors-genre/`);
            setResponse7(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/accession-date-trend/`);
                setResponse8(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/most-common-jobs-year-activities/`);
            setResponse(res.data);
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
            const res = await axios.get(`http://${SERVERIP}:8000/api/investidor-activity-year-carreer/`);
                setResponse9(res.data);
        } catch (error) {
            console.error(error);
            setResponse9("Erro ao buscar dados");
        } finally {
            setLoading9(false);
        }
    };

    return (
        <div>
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
                        <div className="age_distribution_view">
                            <InputText value={age} onChange={(e) => setAge(e.target.value)} />
                            <Slider value={age} onChange={(e) => setAge(e.value)} range />
                            <br />
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={age_distribution} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
                                    <p key={index}>Idade: {item.age}, Total: {item.total}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>


                    <AccordionTab header={"Quais são as três profissões mais comum entre os investidores?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading2} onClick={top_3_most_common_jobs} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response2 && response2.result.map((item, index) => (
                                    <p key={index}>Carreira: {item.carreer}, Total: {item.carrer_count}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a proporção de investidores ativos e inativos?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading3} onClick={active_inactive_investidors_view} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response3 && response3.result.map((item, index) => (
                                    <p key={index}>Status: {item.account_status}, Total: {item.total}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é o estado com o maior número de investidores registrados?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading4} onClick={state_most_investidors_lives} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response4 && response4.result.map((item, index) => (
                                    <p key={index}>Estado: {item.state}, Total: {item.state_count}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Quais são as três cidades com os maiores números de investidores registrados por estado?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading5} onClick={city_most_investidors_lives} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response5 && response5.result.map((item, index) => (
                                    <p key={index}>Cidade: {item.city}, Total: {item.city_count}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a relação entre estado civil e a atividade dos investidores no último ano?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading6} onClick={civil_status_investidors_activity} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response6 && response6.result.map((item, index) => (
                                    <p key={index}>Estado civil: {item.civil_state}, Teve atividade: {item.had_activity}, Não teve atividade: {item.had_not_activity}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a proporção de gêneros entre os investidores por idade?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading7} onClick={() => investidors_genre(idade)} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response7 && response7.result.map((item, index) => (
                                    <p key={index}>Gênero: {item.genre}, Total: {item.total}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a tendência de adesão ao Tesouro Direto ao longo do tempo (anual)?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading8} onClick={accession_date_trend} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response8 && response8.result.map((item, index) => (
                                    <p key={index}>Ano: {item.year}, Total: {item.total_by_year}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Existe alguma correlação entre a profissão do investidor e sua atividade no último ano?"}>
                        <div className="slider-input">
                            <Button label="Enviar" icon="pi pi-check" loading={loading9} onClick={investidor_activity_year_carreer} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response9 && response9.result.map((item, index) => (
                                    <p key={index}>Profissão: {item.carreer}, Teve atividade: {item.had_activity}, Não teve atividade: {item.had_not_activity}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
}

export default Questions;


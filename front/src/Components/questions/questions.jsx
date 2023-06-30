import axios from "axios";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Slider } from 'primereact/slider';
import React, { useState } from "react";

function Questions() {
    const [loading, setLoading] = useState(false);
    const [stateValue, setStateValue] = useState("");
    const [ageValue, setAgeValue] = useState(18);
    const [value, setValue] = useState("");
    const [age, setAge] = useState("");
    const [idade, setIdade] = useState("");
    const [response, setResponse] = useState(null);

    const age_distribution = async () => {
        setLoading(true);

        console.log(age);
        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/age-distribution?age_min=${age[0]}&age_max=${age[1]}`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const top_3_most_common_jobs = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/top-n-common-jobs/`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const active_inactive_investidors_view = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/active-inactive-investidors/`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const state_most_investidors_lives = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/state-most-investidors/`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const city_most_investidors_lives = async (state) => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/city-most-investidors/?state=${state}`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const civil_status_investidors_activity = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/civil-status-year-activity/`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const investidors_genre = async (age) => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/investidors-genre/?age=${idade}`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };


    const accession_date_trend = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/accession-date-trend/`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const most_common_jobs_year_activities = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/most-common-jobs-year-activities/`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    const investidor_activity_year_carreer = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`http://44.202.57.21:8000/api/investidor-activity-year-carreer/`);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse("Erro ao buscar dados");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
                <Card title="Sobre o dataset">
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
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={top_3_most_common_jobs} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
                                    <p key={index}>Carreira: {item.carreer}, Total: {item.carrer_count}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a proporção de investidores ativos e inativos?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={active_inactive_investidors_view} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
                                    <p key={index}>Status: {item.account_status}, Total: {item.total}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é o estado com o maior número de investidores registrados?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={state_most_investidors_lives} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
                                    <p key={index}>Estado: {item.state}, Total: {item.state_count}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Quais são as três cidades com os maiores números de investidores registrados por estado?"}>
                        <div className="slider-input">
                            <InputText value={stateValue} onChange={(e) => setStateValue(e.target.value)} />
                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={() => city_most_investidors_lives(stateValue)} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
                                    <p key={index}>Cidade: {item.city}, Total: {item.city_count}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a relação entre estado civil e a atividade dos investidores no último ano?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={civil_status_investidors_activity} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
                                    <p key={index}>Estado civil: {item.civil_state}, Teve atividade: {item.had_activity}, Não teve atividade: {item.had_not_activity}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a proporção de gêneros entre os investidores por idade?"}>
                        <div className="slider-input">
                            <InputText value={idade} onChange={(e) => setIdade(e.target.value)} />
                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={() => investidors_genre(idade)} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
                                    <p key={index}>Gênero: {item.genre}, Total: {item.total}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Qual é a tendência de adesão ao Tesouro Direto ao longo do tempo (anual)?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={accession_date_trend} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
                                    <p key={index}>Ano: {item.year}, Total: {item.total_by_year}</p>
                                ))}
                            </Card>
                        </div>
                    </AccordionTab>

                    <AccordionTab header={"Existe alguma correlação entre a profissão do investidor e sua atividade no último ano?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={investidor_activity_year_carreer} />
                        </div>
                        <div className="response">
                            <Card title="Response">
                                {response && response.result.map((item, index) => (
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


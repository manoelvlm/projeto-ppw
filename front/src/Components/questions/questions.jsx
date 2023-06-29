import axios from "axios";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Slider } from 'primereact/slider';
import React, { useState } from "react";

function Questions() {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState([18, 20]);
    const [response, setResponse] = useState(null);

    const load = async () => {
        setLoading(true);
        
        try {
            const res = await axios.get(`http://54.226.6.205:8000/api/age-distribution?age_min=${value[0]}&age_max=${value[1]}`);
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
                    <AccordionTab header={"Qual é a distribuição de idade entre os investidores cadastrados no programa Tesouro Direto?"}>
                        <div className="age_distribution_view">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                            <Slider value={value} onChange={(e) => setValue(e.value)} range />
                            <br></br>
                            <Button label="Enviar" icon="pi pi-check" loading={loading} onClick={load} />
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

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a proporção de investidores ativos e inativos?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é o estado com o maior número de investidores registrados?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a cidade com o maior número de investidores registrados?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a relação entre estado civil e a atividade dos investidores no último ano?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a proporção de gêneros entre os investidores?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a tendência de adesão ao Tesouro Direto ao longo do tempo (anual)?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Existe alguma correlação entre a profissão do investidor e sua atividade no último ano?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                    <AccordionTab header={"Qual é a profissão mais comum entre os investidores ativos no último ano?"}>
                        <div className="slider-input">
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="response">
                            <Card title="Response">
                                <p>respostas vão aqui</p>
                            </Card>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
}

export default Questions;


import React, { useState, useEffect } from 'react';

import { Container,Flex } from "./style";
import { Button, Form } from 'semantic-ui-react'
import {update} from '../../services/foodService'
import { useHistory } from 'react-router';

import Header from '../../components/header'

function Update() {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [time, setTime] = useState('');
    const [portions, setPortions] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [id, setID] = useState(null);

    let history = useHistory();
    
    useEffect(() => {
        setID(localStorage.getItem('_id'))
        setName(localStorage.getItem('Nome'));
        setImg(localStorage.getItem('Imagem'));
        setPortions(localStorage.getItem('Porção'));
        setTime(localStorage.getItem('Tempo'));
        setIngredients(localStorage.getItem('Ingredientes'));
        setSteps(localStorage.getItem('Modo de preparo'))
    }, []);

    const updateAPIData  = () => {
        update(id,{
            name,
            img,
            time,
            portions,
            ingredients,
            steps
        }).then(() => {
            history.push('/')
        });
    }

    return (
        <Flex>
        <Header/>
        <Container>
            <Form>
                <h3>Detalhes da receita</h3>
                <Form.Field>
                    <label>Nome da receita</label>
                    <input 
                    value={name}
                    placeholder='Ex: macarronada' 
                    onChange={(e) => setName(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Imagem da receita</label>
                    <input 
                    value={img}
                    placeholder='coloque o link da foto da receita' 
                    onChange={(e) => setImg(e.target.value)} />
                </Form.Field>
                <div className="row">
                    <Form.Field id="input1">
                        <label>Tempo</label>
                        <input 
                        value={time}
                        placeholder='tempo de preparo' 
                        onChange={(e) => setTime(e.target.value)}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Porção</label>
                        <input 
                        value={portions}
                        placeholder='quantidade que rende' 
                        onChange={(e) => setPortions(e.target.value)}/>
                    </Form.Field>
                </div>
                <h3>Modo de preparo</h3>
                <Form.Field>
                    <label>Ingredientes</label>
                    <input 
                    value={ingredients}
                    placeholder='Coloque aqui todos os ingredientes' 
                    onChange={(e) => setIngredients(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>Modo de Preparo</label>
                    <input 
                    value={steps}
                    placeholder='Descreva como faze essa receita' 
                    onChange={(e) => setSteps(e.target.value)}/>
                </Form.Field>
                <div id="buttons">
                    <Button onClick={() => history.push('/')} >Voltar</Button>
                    <Button onClick={updateAPIData } type='submit'>Enviar</Button>
                </div>

            </Form>
        </Container>
        </Flex>
    );
  }
  
  export default Update;
  
import React, { useState } from 'react';

import { Container, Flex } from "./style";
import { Button, Form } from 'semantic-ui-react'
import {create} from '../../services/foodService'
import { useHistory } from 'react-router';
import Header from '../../components/header'

function Register() {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [time, setTime] = useState('');
    const [portions, setPortions] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');

    let history = useHistory();

    const postData = () => {
        create({
            name,
            img,
            time,
            portions,
            ingredients,
            steps
        }).then(() => {
            history.push('/');
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
                    placeholder='Ex: macarronada' 
                    onChange={(e) => setName(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Imagem da receita</label>
                    <input 
                    placeholder='coloque o link da foto da receita' 
                    onChange={(e) => setImg(e.target.value)} />
                </Form.Field>

                <div class="row">
                    <Form.Field id="input1">
                        <label>Tempo</label>
                        <input placeholder='tempo de preparo' 
                        onChange={(e) => setTime(e.target.value)}/>
                    </Form.Field>

                    <Form.Field id="input2">
                        <label>Porção</label>
                        <input 
                        placeholder='quantidade que rende' 
                        onChange={(e) => setPortions(e.target.value)}/>
                    </Form.Field>
                </div>

                <h3>Modo de preparo</h3>

                <Form.Field>
                    <label>Ingredientes</label>
                    <input 
                    placeholder='Coloque aqui todos os ingredientes' 
                    onChange={(e) => setIngredients(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>Modo de Preparo</label>
                    <input 
                    placeholder='Descreva como faze essa receita' 
                    onChange={(e) => setSteps(e.target.value)}/>
                </Form.Field>

                <div id="buttons">
                    <Button onClick={() => history.push('/')} >Voltar</Button>
                    <Button onClick={postData} type='submit'>Enviar</Button>
                </div>

            </Form>
        </Container>
        </Flex>
    );
  }
  
  export default Register;
  
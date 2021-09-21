import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Container, Flex} from './style';
import { Button } from 'semantic-ui-react'
import Header from "../../components/header"


function Details() {

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [time, setTime] = useState('');
  const [portions, setPortions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('Nome'));
    setImg(localStorage.getItem('Imagem'));
    setPortions(localStorage.getItem('Porção'));
    setTime(localStorage.getItem('Tempo'));
    setIngredients(localStorage.getItem('Ingredientes').split(','));
    setSteps(localStorage.getItem('Modo de preparo'));
  }, []);

  let history = useHistory();

    return (
      <Flex>
      <Header/>
      <Container>
        <div className="details">
          <div id="image">
            <img src={img} alt="imagem da comida" />
          </div>
          <div id="info">
            <h3>Receita</h3>
            <p>{name}</p>

            <div id="temp">
              <div id="horas">
                <h3>Tempo de preparo</h3>
                <p>{time} h</p>
              </div>

              <div>
                <h3>Quantidade de porções</h3>
                <p>{portions} porções</p>
              </div>
            </div>

            <div className="steps">

            <div id="ingred">
              <h3>Ingredientes necessários</h3>
              {console.log(ingredients)}
              {ingredients? ingredients.map((text)=>( 
                <p>{text}</p>
              )): <p> não existe ingredients </p>}
            </div>
            
              <div id="info">
                <div id="preps">
                <h3>Forma de Preparo</h3>
                  <p>{steps}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button id="button" onClick={() => history.push('/')}>Voltar</Button>


        

      </Container>
      </Flex>

    );
  }
  
  export default Details;
  
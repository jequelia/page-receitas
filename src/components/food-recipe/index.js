import React, { useState, useEffect } from "react";
import { Container, Description } from "./style";
import { RiArrowRightSLine} from 'react-icons/ri';
import {MdModeEdit, MdDelete} from 'react-icons/md'
import {getAll} from '../../services/foodService'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import {delet} from '../../services/foodService'

function FoodRecipe() {

    const [foods, setFood] = useState([]);

    useEffect( () => {getData()}, []);

    const setData = (data) => {
        let { _id, name, img, portions, time, ingredients, steps } = data;
        localStorage.setItem('_id', _id);
        localStorage.setItem('Nome', name);
        localStorage.setItem('Imagem', img);
        localStorage.setItem('Porção', portions);
        localStorage.setItem('Tempo', time)
        localStorage.setItem('Ingredientes', ingredients)
        localStorage.setItem('Modo de preparo', steps)

     }

     const getData = () => {
        getAll().then((response) => {setFood(response.data)});
    }
     const onDelete = (id) => {
        delet(id).then(() =>{ getData()});
    }

    return (
        <>
        {foods.map((food) =>(
            <Container >
                <Description>
                    <div class="flex">
                        <img src={food.img} alt="foto da receita"></img>
                        <p>{food.name}</p>
                        <Link to='/details'>
                            < RiArrowRightSLine  onClick={() => setData(food)} />
                        </Link>
                    </div>
                    <div class="icons">
                        <Link to='/update'>
                            <MdModeEdit onClick={() => setData(food)}/>
                        </Link>
                        <MdDelete id="delete" onClick={() => onDelete(food._id)}/>
                    </div>
                </Description>
            </Container>
        ))}
        </>
    );
  }
  
  export default FoodRecipe;
  
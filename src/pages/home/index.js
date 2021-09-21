import FoodRecipe from "../../components/food-recipe";
import { Container } from "./style";
import Header from "../../components/header"
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router';

function Home() {
  let history = useHistory();

    return (
      <>
      <Header/>
      <Container>
        <div class="cel">
          <h1>Todas as receitas</h1>
          <Button id="button" onClick={() => history.push('/register')}>Adicionar</Button>
        </div>
        <FoodRecipe/>      
      </Container>
      </>
    );
  }
  
  export default Home;
  
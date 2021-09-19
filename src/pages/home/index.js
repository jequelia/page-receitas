import FoodRecipe from "../../components/food-recipe";
import { Container } from "./style";
import Header from "../../components/header"

function Home() {
    return (
      <>
      <Header/>
      <Container>
        <h1>Todas as receitas</h1>
        <FoodRecipe/>      
      </Container>
      </>
    );
  }
  
  export default Home;
  
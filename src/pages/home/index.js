import FoodRecipe from "../../components/food-recipe";
import { Container } from "./style";
import Header from "../../components/header"
import { useHistory } from 'react-router';
import {MdLibraryAdd} from 'react-icons/md';


function Home() {
  let history = useHistory();
    return (
      <>
      <Header/>
      <Container>
        <div class="cel">
          <div class="add">
            <h1>Todas as receitas</h1>
            <MdLibraryAdd onClick={() => history.push('/register')} />
          </div>
        </div>
        <FoodRecipe/>      
      </Container>
      </>
    );
  }
  
  export default Home;
  
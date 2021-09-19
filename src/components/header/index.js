import { Container, Issues } from "./style";

function Header() {

    return (
        <Container >
            <Issues>
                <a  href="/">
                    <div>
                        <p>Receitas</p>
                    </div>
                </a>
            </Issues>

            <Issues>
                <a  href="/register">
                    <div>
                        <p>Adicionar receita</p>
                    </div>
                </a>
            </Issues>

           
        </Container>
    );
  }
  
  export default Header;
  
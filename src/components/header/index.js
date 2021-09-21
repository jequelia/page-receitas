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
                <a  href="/videos">
                    <div>
                        <p>Vídeos</p>
                    </div>
                </a>
            </Issues>

           
        </Container>
    );
  }
  
  export default Header;
  
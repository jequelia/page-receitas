import Routes from "./routes";
import {BrowserRouter} from 'react-router-dom';
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
  );
}

export default App;

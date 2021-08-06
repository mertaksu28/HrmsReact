import { Container } from 'semantic-ui-react';
import './App.css';
import DashBoard from './layouts/DashBoard';
import Navi from './layouts/Navi';
import {Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <Navi/>
     <Container> 
       <DashBoard/>
     </Container> 
    </div>
  );
}

export default App;

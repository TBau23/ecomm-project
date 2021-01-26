import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom'

const Hats = (props) => (

  <div>
    <h2>Hats</h2>
    

  </div>
)

function App() {
  // switch statement causes routing to match with first route that has any sort of match
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/hats' component={Hats} />
      </Switch>

      
      

    </div>
  );
}

export default App;

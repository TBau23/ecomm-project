import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import { Switch, Route } from 'react-router-dom'



function App() {
  // switch statement causes routing to match with first route that has any sort of match
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage} />
      </Switch>

      
      

    </div>
  );
}

export default App;

import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import LoginRegisterPage from './pages/loginPage/loginRegisterPage';


function App() {
  // switch statement prevents rendering of multiple components that match path
  // can avoid switch effect with, say, a header, by putting it outside of switch
  return (
    <div className="App">
      
      <Header />
      <Switch> 
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={LoginRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import LoginRegisterPage from './pages/loginPage/loginRegisterPage';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  // switch statement prevents rendering of multiple components that match path
  // can avoid switch effect with, say, a header, by putting it outside of switch
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,

    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }


  render() {
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
  };
}

export default App;

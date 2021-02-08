import './App.css';
import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import LoginRegisterPage from './pages/loginPage/loginRegisterPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  // switch statement prevents rendering of multiple components that match path
  // can avoid switch effect with, say, a header, by putting it outside of switch
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,

    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // this is an open subscription - any changes to who is signed in/ signed out will call this
      // since it is open subscription, we also need to unsubscribe at some point to avoid memory leaks in our application
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
        
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // how does this work?
  }


  render() {
    return (
      <div className="App">
        
        <Header currentUser={this.state.currentUser}/>
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

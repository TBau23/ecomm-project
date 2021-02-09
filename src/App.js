import './App.css';
import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import LoginRegisterPage from './pages/loginPage/loginRegisterPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {
  // switch statement prevents rendering of multiple components that match path
  // can avoid switch effect with, say, a header, by putting it outside of switch

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // this is an open subscription - any changes to who is signed in/ signed out will call this
      // since it is open subscription, we also need to unsubscribe at some point to avoid memory leaks in our application
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => { // snapshot modifies the userAuth object into our database user object
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
        
      } 

      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // how does this work?
  }


  render() {
    return (
      <div className="App">
        
        <Header />
        <Switch> 
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/> ) : (<LoginRegisterPage />)} />
          {/*  above line demonstrates how redirect component works - once you're logged in, no need to have user access the login
          register page*/}
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = (state ) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// the App only ever set the current user just to pass it to the header, didn't actually use it 
export default connect(mapStateToProps, mapDispatchToProps)(App);

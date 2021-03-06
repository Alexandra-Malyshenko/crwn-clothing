import React from 'react';
import {Switch, Route } from "react-router-dom";

import './App.css';
import './pages/homepage/homepage.style.scss';

import HomePage from "./pages/homepage/homapage.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={SignInSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;

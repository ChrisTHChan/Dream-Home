import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { theme } from './themes/theme';
import './App.css';

import Home from './pages/Home';
import SignUp from './pages/SignUp.js';
import Profile from './pages/Profile.js';

import PostPage from './pages/Post/PostPage';
import { getToken } from './actions/userActions';
import Login from './components/Dialog/Login/Login';
import Content from './pages/Content/Content.js';

class App extends Component {
    constructor (props) {
        super(props);
        this.props.getToken();
    }

    render () {
        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/posts/:id' component={PostPage}/>
                        <Route path='/:username/profile' component={Profile} />
                        <Route exact path='/signup' component={SignUp} />
                        <Route exact path='/:username/content' component={Content} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(
        {
            getToken
        },
        dispatch
    );
}

export default connect(null, mapDispatchToProps)(App);

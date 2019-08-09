import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { theme } from './themes/theme';

import LogIn from './pages/Login';
import SignUp from './pages/SignUp.js';
import Profile from './pages/Profile.js';

import PostDialog from './components/Dialog/PostDialog/PostDialog';
import BoardDialog from './components/Dialog/BoardDialog/BoardDialog';
import InterestQuizDialog from './components/Dialog/InterestQuizDialog/QuizDialog';
import './App.css';

function App () {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LogIn} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
                <Route exact path='/profile/:username/interest-quiz' component={InterestQuizDialog} />
                <Route path='/profile/:username' component={Profile} />
                <Route path='/profile/:username/post/create' component={PostDialog} />
                <Route path='/profile/:username/board/create' component={BoardDialog} />
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;

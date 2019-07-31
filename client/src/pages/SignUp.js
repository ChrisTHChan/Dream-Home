import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {Paper, TextField} from "@material-ui/core";
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    container: {
        display: 'grid',
        justifyItems: 'center',
        zIndex: '0',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '15px',
        justifyItems: 'center',
    },
    card: {
        height: '55vh',
        width: '18vw',
        background: 'yellow',
    },
    signin: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '1',
        position: 'fixed',
        left: '0px',
        top: '0px',
        height: '100vh',
        width: '100vw',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: 'white',
        width: '35vw',
        height: '90vh',
        borderRadius: '15px',
        textAlign: 'center',
    },
    inputContainer: {
        height: '13vh',
        minWidth: '22vw',
        padding: '0',
        margin: '0',
    },
    input: {
        width: '22vw',
        marginTop: '10px',
        '& label': {
            fontWeight: 'bold',
            color: 'black',
        }
    },
    welcome: {
        marginBottom: '0',
    },
    signupbutton: {
        border: '1px solid lightgrey',
        backgroundColor: 'white',
        padding: '10px 50px 10px 50px',
        margin: '0 auto',
        display: 'block',
        marginTop: '20px',
        borderRadius: '50px',
        fontWeight: 'bold',
        display: 'block',
        '&:hover': {
            backgroundColor: 'lightblue',
            color: 'white',
            cursor: 'pointer',
        }
    },
    signupbuttonlink: {
        textDecoration: 'none',
    },
    footer: {
        borderTop: '1px solid lightgrey',
        paddingTop: '20px',
        marginTop: '35px',
        fontSize: '14px',
    },
    login: {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            color: 'blue',
            cursor: 'pointer',
        }
    }
})

const SignUp = () => {
    const style = useStyles()
    return (
        <div>
            <div className={style.container}>
                <div className={style.grid}>
                    <Paper className={style.card}>
                    </Paper>
                    <Paper className={style.card}>
                    </Paper>
                    <Paper className={style.card}>
                    </Paper>
                    <Paper className={style.card}>
                    </Paper>
                    <Paper className={style.card}>
                    </Paper>
                    <Paper className={style.card}>
                    </Paper>
                    <Paper className={style.card}>
                    </Paper>
                    <Paper className={style.card}>
                    </Paper>
                </div>
            </div>
            <div className={style.signin}>
                <div className={style.modal}>
                    <h1 className={style.welcome}>Welcome!</h1>
                    <div className={style.inputContainer}>
                        <TextField label='Username' className={style.input}/>
                    </div>
                    <div className={style.inputContainer}>
                        <TextField label='E-mail' className={style.input}/>
                    </div>
                    <div className={style.inputContainer}>
                        <TextField label='Password' type='password' className={style.input}/>
                    </div>
                    <div className={style.inputContainer}>
                        <TextField label='Confirm Password' type='password' className={style.input}/>
                    </div>
                    <Link to='/profile' className={style.signupbuttonlink}><button className={style.signupbutton}>Sign Up!</button></Link>
                    <p className={style.footer}>Already a Member? <Link to='/' className={style.login}>Log In!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
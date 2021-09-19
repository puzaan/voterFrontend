import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Action/AdminLoginAction'
import { useHistory } from "react-router-dom";

import Loder from '../../component/Loder';
import Alerts from '../../component/Alert';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        // margin: theme.spacing(0.5),
        //backgroundColor: theme.palette.secondary.main,
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const WhiteTextTypography = withStyles({
    root: {
        color: "#FF0000"
    }
})(Typography);

export default function AdminSingin({ history, location }) {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const adminLogin = useSelector((state) => state.adminLogin)
    const { loding, error, adminInfo } = adminLogin;
    const redirect = location.search ? location.search.split("=")[1] : "/dashboard";
    useEffect(() => {
        if (adminInfo) {
            history.push(redirect)
        }
        console.log(adminInfo)
    }, [adminInfo, redirect, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        console.log('login')

    }
    return (
        <Container component="main" maxWidth="xs">
            <Grid item xs={12}>

            </Grid>
            {/* <CssBaseline /> */}
            <div className={classes.paper}>
                <Avatar className={classes.avatar} alt="Bemy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/3/39/CPN-UML.svg">

                </Avatar>
                <Typography component="h1" variant="h5">
                    volunteer Management
                </Typography>
                <WhiteTextTypography subtitle1='h2' variant="h6">
                    Booth Data Collection
                </WhiteTextTypography>
                
                <form className={classes.form} noValidate onSubmit={submitHandler}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='no'
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='no'
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    {error && <Alerts severity="error"> {error}</Alerts>}
                    {loding && <Loder />}
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        align="center"
                    >
                        Register new Account?{' '}
                        <Link to="/register" style={{ paddingLeft: 13, textDecoration: 'none' }}>Register</Link>
                    </Typography>
                </form>
            </div>
        </Container>
    );
}

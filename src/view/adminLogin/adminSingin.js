import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { CardContent, Grid, useMediaQuery } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Action/AdminLoginAction";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import Loder from "../../component/Loder";
import Alerts from "../../component/Alert";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: '20px'
    },
    avatar: {
        // margin: theme.spacing(0.5),
        //backgroundColor: theme.palette.secondary.main,
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#EC3434",
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#EC3434"
        }
    },
    image: {
        maxWidth: 345,
    },
    media: {
        height: 500,
        width:500,
        //paddingTop: '56.25%', // 16:9
    },
    color: {
        color: "#EC3434",
    }

}));

const WhiteTextTypography = withStyles({
    root: {
        color: "#EC3434",
    },
})(Typography);

export default function AdminSingin({ history, location }) {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"), {
        defaultMatches: true,
    });
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const adminLogin = useSelector((state) => state.adminLogin);
    const { loding, error, adminInfo } = adminLogin;
    const redirect = location.search
        ? location.search.split("=")[1]
        : "/dashboard";
    useEffect(() => {
        if (adminInfo) {
            history.push(redirect);
        }
        console.log(adminInfo);
    }, [adminInfo, redirect, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        console.log("login");
    };
    return (
        // <Container component="main" maxWidth="xs">

        <div>
            <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} md={4}>
                    <div className={classes.paper}>
                        <Card>
                            <CardMedia
                                className={classes.media}
                                image="data:image/jpeg;base64,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"
                                title="Paella dish"
                            />
                            
                        </Card>
                        
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.paper}>
                    <Avatar
                        className={classes.avatar}
                        alt="Bemy Sharp"
                        src="https://upload.wikimedia.org/wikipedia/commons/3/39/CPN-UML.svg"
                    ></Avatar>
                    <Typography className={classes.color} component="h1" variant="h5">
                        volunteer Management
                    </Typography>
                    <WhiteTextTypography subtitle1="h2" variant="h6">
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
                            autoComplete="no"
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
                            autoComplete="no"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                                color="primary"
                                className={classes.submit}
                                disableElevation
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
                            Register new Account?{" "}
                            <Link
                                to="/"
                                    style={{ paddingLeft: 13, textDecoration: "none", color: '#EC3434'}}
                            >
                                Register
                            </Link>
                        </Typography>
                    </form>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.paper}>
                        <Card>
                            <CardMedia
                                className={classes.media}
                                image="https://www.spotlightnepal.com/media/images/pm__oli.2e16d0ba.fill-650x500.jpg"
                                title="Paella dish"
                            />

                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
        // </Container>
    );
}

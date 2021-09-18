import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import { Link } from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import Stack from '@mui/material/Stack';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';

import Loder from '../../../../component/Loder';
import Alerts from '../../../../component/Alert';
import {registerAction} from '../../../../Action/UserLoginAction'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  address: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
  },
  phone: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 10,
      maximum: 10
    },
  },
};

const Form = () => {
  const classes = useStyles();
 
  

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const dispatch = useDispatch()
  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, RegisterData } = userRegister
  const history = useHistory();
  React.useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
    // if (RegisterData) {
    //   history.push('/')
    // }
  }, [formState.values, history]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formState.isValid) {
      dispatch(
        registerAction(formState.values.firstName, sex, date, formState.values.password, formState.values.phone, formState.values.address, formState.values.email)
      )
      history.push('/')
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  
  const [sex, setSex] = React.useState('female');

  const handleChanges = (event) => {
    setSex(event.target.value);
  };


  const [date, setdate] = React.useState(new Date());

  const dateChange = (newdate) => {
    setdate(newdate);

  };
  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="Full Name"
              label="Full Name *"
              variant="outlined"
              size="medium"
              name="firstName"
              fullWidth
              helperText={
                hasError('firstName') ? formState.errors.firstName[0] : null
              }
              error={hasError('firstName')}
              onChange={handleChange}
              type="firstName"
              value={formState.values.firstName || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Address"
              label="Address*"
              variant="outlined"
              size="medium"
              name="address"
              fullWidth
              helperText={
                hasError('address') ? formState.errors.address[0] : null
              }
              error={hasError('address')}
              onChange={handleChange}
              type="address"
              value={formState.values.address || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={sex} onChange={handleChanges} row={true}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack>

                <MobileDatePicker
                 
                  label="DOB"
                  inputFormat="MM/dd/yyyy"
                  value={date}
                  onChange={dateChange}
                  renderInput={(params) => <TextField {...params} />}
                />

              </Stack>
            </LocalizationProvider>

          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Contact No"
              label="Contact No *"
              variant="outlined"
              size="medium"
              name="phone"
              fullWidth
              helperText={hasError('phone') ? formState.errors.phone[0] : null}
              error={hasError('phone')}
              onChange={handleChange}
              type="Number"
              value={formState.values.phone || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Password"
              label="Password *"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null
              }
              error={hasError('password')}
              onChange={handleChange}
              type="password"
              value={formState.values.password || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Already have an account?{' '}
              <Link to="/" style={{ paddingLeft: 13, textDecoration: 'none' }}>Sign In</Link>
              {/* <LearnMoreLink title="Sign in" href="/signin-simple" /> */}
            </Typography>
          </Grid>
        </Grid>
        {error && <Alerts severity="error"> {error}</Alerts>}
      </form>
    
    </div>
  );
};

export default Form;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, Grid, Button, TextField, FormGroup,
  Checkbox, } from '@material-ui/core';
import validate from 'validate.js';
import { Link } from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import Alerts from '../../../../component/Alert';
import { addPlaceAction } from '../../../../Action/addPlaceAction'
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import Select from '@mui/material/Select';
import { provisons, districts } from './datas'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const boothValue = [
  {
    id: '1',
    courseName: 'Booth 1',
  },
  {
    id: '2',
    courseName: 'Booth 2',
  },
  {
    id: '3',
    courseName: 'Booth 3',
  },
  {
    id: '4',
    courseName: 'Booth 4',
  },
  
];
const schema = {
  fedConstituency: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 300,
    },
  },
  district: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  provConstituency: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  localBody: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  ward: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 2
    },
  },
  booth: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 180
    },
  },
};

const Form = (props) => {
  const classes = useStyles();
 //console.log(match.params.id)
  
  const { data } = props
  console.log(data)
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const dispatch = useDispatch()
  const pdispatch = useDispatch()
  const addPlace = useSelector(state => state.addPlace);
  const { loading, error, placeInfo} = addPlace
  const history = useHistory();
  React.useEffect(() => {
    // pdispatch(addPlaceAction(match.params.id))
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
        addPlaceAction(data, provision, district, formState.values.fedConstituency, formState.values.provConstituency, formState.values.localBody, formState.values.ward,booth )
      )
      history.push('/userlist')
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

  
  const [provision, setProvision] = React.useState('Arun');
  const [booth, setbooth] = React.useState([]);
  console.log(booth)
  const handleChanges = (event) => {
    setProvision(event.target.value);
  };
  const [district, setDistrict] = React.useState('Bhojpur District');

  const districtChange = (event) => {
    setDistrict(event.target.value);
  };
  

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">province </FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={provision} onChange={handleChanges} row={true}>
                <FormControlLabel value='Arun' control={<Radio />} label='Arun' />

                {provisons.map((data) => (
                  <FormControlLabel disabled value={data.name} control={<Radio />} label={data.name} />

                ))}
              </RadioGroup>
            </FormControl>

          </Grid>


          <Grid item xs={12} md= {12}>


            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">District</InputLabel>
              <Select
                native
                value={district}
                onChange={districtChange}
                label="District"
                autoWidth="true"
                inputProps={{
                  name: 'District',
                  id: 'outlined-age-native-simple',
                }}
              >
                
                {districts.map((data) => (
                  <option value={data.name}>{data.name} </option>

                ))}
              </Select>
            </FormControl>




            {/* <FormControl fullWidth = 'true' >
              <InputLabel id="demo-simple-select-autowidth-label">District</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={district}
                onChange={districtChange}
              >
                {districts.map((data) => (
                  <MenuItem value={data.name}>{data.name}</MenuItem>

                ))}
              </Select>
            </FormControl> */}
            </Grid>
          
          <Grid item xs={12}>
            <TextField
              placeholder="ProvConstituency"
              label="provConstituency*"
              variant="outlined"
              size="medium"
              name="provConstituency"
              fullWidth
              helperText={
                hasError('provConstituency') ? formState.errors.provConstituency[0] : null
              }
              error={hasError('provConstituency')}
              onChange={handleChange}
              type="provConstituency"
              value={formState.values.provConstituency || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="fedConstituency"
              label="fedConstituency *"
              variant="outlined"
              size="medium"
              name="fedConstituency"
              fullWidth
              helperText={hasError('fedConstituency') ? formState.errors.fedConstituency[0] : null}
              error={hasError('fedConstituency')}
              onChange={handleChange}
              type="fedConstituency"
              value={formState.values.fedConstituency || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="localBody"
              label="localBody *"
              variant="outlined"
              size="medium"
              name="localBody"
              fullWidth
              helperText={
                hasError('localBody') ? formState.errors.localBody[0] : null
              }
              error={hasError('localBody')}
              onChange={handleChange}
              type="localBody"
              value={formState.values.localBody || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="ward No"
              label="ward No *"
              variant="outlined"
              size="medium"
              name="ward"
              fullWidth
              helperText={hasError('ward') ? formState.errors.ward[0] : null}
              error={hasError('ward')}
              onChange={handleChange}
              type="Number"
              value={formState.values.ward || ''}
            />
          </Grid>
          
          {/* <Grid item xs={12}>
            <TextField
              placeholder="Booth"
              label="Booth *"
              variant="outlined"
              size="medium"
              name="booth"
              fullWidth
              helperText={
                hasError('booth') ? formState.errors.booth[0] : null
              }
              error={hasError('booth')}
              onChange={handleChange}
              type="booth"
              value={formState.values.booth || ''}
            />
          </Grid> */}
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography variant="body1">
                All booth
              </Typography>
              <FormGroup>
                {boothValue.map(form => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={form.courseName}
                          size='small'
                          onClick={() => {
                            const index = booth.findIndex(
                              item => item === form.courseName,
                            );
                            if (~index) {
                              setbooth([
                                ...booth.slice(0, index),
                                ...booth.slice(index + 1),
                              ]);
                            } else {
                              setbooth([...booth, form.courseName]);
                            }
                          }}
                        />
                      }
                      label={form.courseName}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md ={6}>
            <Link to="/userlist" style={{ paddingLeft: 13, textDecoration: 'none' }}><Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Go Back
            </Button></Link>
            
          </Grid>
        </Grid>
        {error && <Alerts severity="error"> {error}</Alerts>}
      </form>
    
    </div>
  );
};

export default Form;

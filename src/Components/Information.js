/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import Dashboard from './Dashboard';
import {
  Grid,
  CssBaseline,
  makeStyles,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab'
import info from '../Images/20943447.jpg'
import MuiPhoneNumber from 'material-ui-phone-number';
import {informationValidate} from '../Validation/Validation'
import {
  countriesArray,
  citiesArray,
  visaOptions,
} from '../Data/static-data'
import 'react-phone-input-2/lib/material.css'

const useStyles = makeStyles((theme) => ({
  svg:{
    maxWidth:"50vh"  
  },
  root: {
    height: "100vh",
    color:"Gray",
  },
  paper: {
    margin: theme.spacing(3,3),
    padding:theme.spacing(1),
  },
  upload:{
    display:"flex",
    alignItems:"center",
    flexDirection: "column",
    padding:theme.spacing(3),
    margin:theme.spacing(1)
  },
  paper2: {
    margin: theme.spacing(6,1),
    padding:theme.spacing(1),
  },
}));

function Information(props) {
  const classes=useStyles();
  const countryList=[];
  const citiesList=[];
  const visa=[];
  const initialValues={
    country:'',
    city:'',
    Visa:'',
    date:'',
    mobile:'',
    notice:0,
    currentlyEmployed:false,
    DriverLicense:false,
  }

  const [inputs, setinputs] = useState(initialValues)
  const [errors,setErrors]=useState({});

  const handleCountryChange=(event,value)=>{
    event.persist();
    setinputs(inputs => ({...inputs, country: value}));
  };

  const handleCityChange=(event,value)=>{
    event.persist();
    setinputs(inputs => ({...inputs, city: value}));
  };

  const handleVisaChange=(event,value)=>{
    event.persist();
    setinputs(inputs => ({...inputs, Visa: value}));
  };

  const handleInputChange=(event)=>{
    event.persist();
    setinputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const handleChecked=(event)=>{
    event.persist();
    // console.log(event)
    setinputs(inputs => ({...inputs, [event.target.name]: event.target.checked}));
  };

  const handleMobileChange=(value)=>{
    setinputs(inputs => ({...inputs, mobile:value}));
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const validationErrors = informationValidate(inputs);
		const noErrors = Object.keys(validationErrors).length === 0;
    console.log(validationErrors,noErrors)
		setErrors(validationErrors);
		if(noErrors){
			console.log("Authenticated",inputs);
			localStorage.setItem("InformationDetails",JSON.stringify(inputs))
      console.log(props.history)
      props.history.push("/career");
		}else{
			console.log("errors try again",validationErrors);
		}
    console.log(inputs);
  }
  useEffect(() => {
    countriesArray.map((data)=>(
      countryList.push(data.name)
    ));	
    // console.log(countryList)
	},[countryList])

  useEffect(() => {
    citiesArray.map((data)=>(
      citiesList.push(data.name)  
    ));
    // console.log(citiesList)
  }, [citiesList])

  useEffect(() => {
    visaOptions.map((data)=>(
      visa.push(data.name)  
    ));
    // console.log(citiesList)
  }, [visa])

  const logo=()=>{
    return(
      <React.Fragment>
        <Grid
          container
          direction="column"
          className={classes.paper2}
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Grid container direction="row" spacing={1}>
              <Grid item><Button variant="outlined" color="primary" href="/cv">1</Button></Grid>
              <Grid item><Button variant="contained" color="primary">2</Button></Grid>
              <Grid item><Button variant="outlined" color="primary" href="/career">3</Button></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>Personal Information</Typography>
          </Grid>
          <Grid item xs={false} md={6} sm={3}>
            <img className={classes.svg} src={info} alt="info-banner"/>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };
  const informationForm=()=>{
    return(
      <React.Fragment>
        <Grid container direction="rows" alignItems="center" spacing={4}>
          <Grid item xs md={6}>
            <Autocomplete
              id="combo-box-demo"
              options={countryList}
              onChange={(e,v)=>handleCountryChange(e,v)}
              renderInput={(params) => <TextField {...params} 
                value={inputs.country} 
                required 
                label="Country of Residence" 
                variant="outlined" 
                {...(errors.country && {error:true,helperText:errors.country})}
              />}
            />
          </Grid>
          <Grid item xs md={6}>
          <Autocomplete
              id="combo-box-demo"
              options={citiesList}
              onChange={(e,v)=>handleCityChange(e,v,"select-option")}
              renderInput={(params) => <TextField {...params} value={inputs.city} required label="City of Residence" variant="outlined" 
              {...(errors.city && {error:true,helperText:errors.city})}
              />}
            />
          </Grid>
          <Grid item xs md={6}>
          <Autocomplete
              id="combo-box-demo"
              options={visa}
              onChange={(e,v)=>handleVisaChange(e,v,"select-option")}
              renderInput={(params) => <TextField {...params} value={inputs.Visa} required label="Visa Status" variant="outlined" 
              {...(errors.visa && {error:true,helperText:errors.visa})}
              />}
            />
          </Grid>
          <Grid item xs md={6}>
            <TextField
              label="Earliest Joining Date"
              type="date"
              variant="outlined"
              name="date"
              fullWidth
              required
              value={inputs.date}
              {...(errors.date && {error:true,helperText:errors.date})}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputs.currentlyEmployed}
                  onChange={handleChecked}
                  name="currentlyEmployed"
                  color="primary"
                />
              }
              label="Currently Employed"
            />
          </Grid>
          <Grid item xs md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputs.DriverLicense}
                  onChange={handleChecked}
                  name="DriverLicense"
                  color="primary"
                />
              }
              label="EU Driver's License"
            />
          </Grid>
          <Grid item xs md={6}>
            <MuiPhoneNumber 
              defaultCountry={'us'} 
              label="Mobile Number"
              variant="outlined"
              name="mobile"
              value={inputs.mobile}
              required
              {...(errors.mobile && {error:true,helperText:errors.mobile})}
              onChange={handleMobileChange}
              fullWidth
            />
          </Grid>
          <Grid item xs md={6}>
            <TextField
              variant="outlined"
              label="Notice Period"
              fullWidth
              placeholder="Notice Period (in Months)"
              disabled={!inputs.currentlyEmployed}
              type="number"
              name="notice"
              {...(errors.notice && {error:true,helperText:errors.notice})}
              value={inputs.notice}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs md={6}>
            <Button
              fullWidth
              variant="contained"
              color="info"
              size="large"
              href="/cv">Back</Button>
          </Grid>
          <Grid item xs md={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
              // href="/information"
              >
                Next
              </Button>
          </Grid>
        </Grid>        
      </React.Fragment>
    )
  };

  return (
    <Dashboard>
      <Grid container component="main" className={classes.root}>
        <CssBaseline/>
        <Grid item xs={12} sm={8} md={6}>
          {logo()}
        </Grid>
        <Grid item xs={12} sm={8} md={6} elevation={6}>
          <div className={classes.paper}>{informationForm()}</div>
        </Grid>
      </Grid>
    </Dashboard>
  )
}

export default Information;
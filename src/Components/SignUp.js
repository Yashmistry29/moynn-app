import React from 'react'
import Dashboard from './Dashboard'
import { Link } from "react-router-dom";
import proud from '../Images/Feelingproud.jpg';
import Footer from './Footer';
import {
  TextField,
  CssBaseline,
  Typography,
  Button,
  Grid,
  Switch,
  Checkbox,
  makeStyles,
  FormControlLabel,
} from "@material-ui/core";
import validate from '../Validation/SignupValidation';
import useForm from '../Validation/SignupHooks'

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(0,3),
    padding:theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper2: {
    margin: theme.spacing(6,1),
    padding:theme.spacing(1),
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },
  form: {
    width: "50%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    alignItems: "center",
  },
  svg:{
    maxWidth:"50vh"
  }
}));

function SignUp(props) {
  const classes = useStyles();
  const { inputs, handleCheckedChange, handleInputChange, handleSubmit, errors } = useForm(
    {
      props: props,
      firstname: "",
      lastname:"",
      email: "",
      password: "",
      confirmPassword: "",
      privacyChecked:true,
      jobChecked:true,
    },
    validate
  );
  
  const logo=()=>{
    return(
      <React.Fragment>
        <Grid
          container
          direction="column"
          className={classes.paper2}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body1">The journey to your next job starts here</Typography>
          </Grid>
          <Grid item xs={false} md={6} sm={3}>
            <img className={classes.svg} src={proud} alt="FeelingProud.svg"/>
          </Grid>
          <Grid item>
            <Typography variant="body2">Join our talent pool for free and let our AI find you the perfect job</Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }

  const SignUpForm=()=>{  
    return(
    <React.Fragment>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email Address"
          value={inputs.email}
          onChange={handleInputChange}
          {...(errors.email && {error:true,helperText:errors.email})}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleInputChange}
          {...(errors.password && {error:true,helperText:errors.password})}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          onChange={handleInputChange}
          {...(errors.confirmPassword && {error:true,helperText:errors.confirmPassword})}
        />
        <Grid container alignItems="center" spacing={2}>
          <Grid item md xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstname"
              label="First Name"
              value={inputs.firstname}
              onChange={handleInputChange}
              {...(errors.firstname && {error:true,helperText:errors.firstname})}
            />
          </Grid>
          <Grid item md xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Last Name"
              value={inputs.lastname}
              onChange={handleInputChange}
              {...(errors.lastname && {error:true,helperText:errors.lastname})}
            />
          </Grid>
        </Grid>
        <FormControlLabel 
          control={
            <Switch
              checked={inputs.jobChecked}
              onChange={handleCheckedChange}
              // {...(errors.jobChecked && {error:true,helperText:errors.jobChecked})}
              name="jobChecked"
              color="primary"
            />
          }
          label="Currently Looking For a Job"
        />
        <Grid container alignItems="center" spacing={2} direction="column"> 
          <Grid item xs>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={1}>
                <FormControlLabel 
                  control={
                    <Checkbox
                      checked={inputs.privacyChecked}
                      onChange={handleCheckedChange}
                      name="privacyChecked"
                      color="primary"
                    />
                  }
                />
              </Grid>
              <Grid item xs={11}>
                By submitting the application I confirm I have read and agreed to the <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>.
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Button color="primary" fullWidth variant="contained" type="submit">Next</Button>
          </Grid>
          <Grid item xs>
            Already submitted an application? Check application status <Link>here</Link>. 
          </Grid>
        </Grid>
        </form>
      </React.Fragment>
    );
  };
  return (
    <Dashboard>
      <div>
        <Grid container component="main" className={classes.root}>
          <CssBaseline/>
          <Grid item xs={12} sm={8} md={6}>
            {logo()}
          </Grid>
          <Grid item xs={12} sm={8} md={6} >
            <div className={classes.paper}>{SignUpForm()}</div>
          </Grid>
        </Grid>
        <Footer/>
      </div>
    </Dashboard>
  )
}

export default SignUp

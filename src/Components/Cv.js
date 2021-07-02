import React from 'react'
import Dashboard from './Dashboard';
import Dropzone from 'react-dropzone';
import {
Grid,
CssBaseline,
makeStyles,
Typography,
TextField,
Button,
Fab
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import cvupload from '../Images/3411083.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    color:"Gray",
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '72ch',
    }
  },
  paper: {
    margin: theme.spacing(3,3),
    padding:theme.spacing(1),
    // display: "flex",
    // // background:"black",
    // flexDirection: "column",
    // alignItems: "center",
  },
  container:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'Gray',
    borderStyle: 'dashed',
    backgroundColor: '#fff',
    color: 'Gray',
    cursor:"pointer",
    outline: 'none',
    transition: 'border .24s ease-in-out'
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
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },
  svg:{
    maxWidth:"50vh"
  }
}));

function Cv(props) {
  const classes=useStyles();
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
            <Grid container direction="row" spacing={1}>
              <Grid item><Button variant="contained" color="primary">1</Button></Grid>
              <Grid item><Button variant="outlined" color="primary" href="/information">2</Button></Grid>
              <Grid item><Button variant="outlined" color="primary">3</Button></Grid>
            </Grid>
          </Grid>
          <Grid item xs={false} md={6} sm={3}>
            <img className={classes.svg} src={cvupload} alt="FeelingProud.svg"/>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  };
  const CvForm=()=>{
    return(
      <React.Fragment>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item xs>
            <Grid container direction="row" alignItems="center" spacing={5}>
              <Grid item xs>
                <Dropzone 
                // onDrop={this.onDrop}
                >
                  {({getRootProps, getInputProps}) => (
                    <div className={classes.container}>
                      <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <div className={classes.upload}>
                          <Typography variant="body1">Upload your English CV as pdf file (Max file size 3MB) *</Typography>
                          <CloudUploadIcon/>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </Grid>
              <Grid item xs>
                <Dropzone 
                // onDrop={this.onDrop}
                >
                  {({getRootProps, getInputProps}) => (
                    <div className={classes.container}>
                      <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <div className={classes.upload}>
                          <Typography variant="body1">Upload your German CV as pdf file (Max file size 3MB) *</Typography>
                          <CloudUploadIcon/>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography style={{fontSize:"large"}}>Position applying for</Typography>
          </Grid>
          <Grid item xs>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Desired Positions"
              // value={currency}
              // onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {/* {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))} */}
            </TextField>
          </Grid>
          <Grid item xs={12} alignItems="center">
            <Grid container direction="row" alignItems="center" spacing={5}>
              <Grid item xs={6}>
                <Button variant="contained" color="info" size="large" fullWidth href="/signup">Back</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" size="large" fullWidth href="/information">Next</Button>
              </Grid>
            </Grid>
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
          <div className={classes.paper}>{CvForm()}</div>
        </Grid>
      </Grid>
    </Dashboard>
  )
}

export default Cv

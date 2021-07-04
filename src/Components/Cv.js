import React,{useState,useEffect} from 'react'
import Dashboard from './Dashboard';
import Dropzone from 'react-dropzone';
import {
Grid,
CssBaseline,
makeStyles,
Typography,
Button,
TextField,
} from '@material-ui/core';
import axios from 'axios';
import {Autocomplete} from '@material-ui/lab'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import cvupload from '../Images/3411083.jpg'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    color:"Gray",
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
  },
  select:{
    // display:"flex",
    // alignItems:"strech",
    // flexDirection:"column"
    width:"72"
  }
}));

function Cv(props) {
  const classes=useStyles();
  toast.configure();

  const [AvailableJobList, setAvailableJobList] = useState([]);
  const [ENUpload, setENUpload] = useState({
    name:'',
    url:'',
  });
  const [GEUpload, setGEUpload] = useState({
    name:'',
    url:'',
  });
  const DesiredPosition=[];
  // const [Load, setLoad] = useState(false)

  const handleENDrop=async(files)=>{
    const formData = new FormData();
    formData.append("upload_preset", "pnqxyr4o");
    formData.append("file", files[0]);
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/moyyn/image/upload",
      formData
    );
    const URL = response.data.url;
    const val={
      name:files[0].name,
      url:URL,
    }
    setENUpload(val);
    console.log(ENUpload);
    toast.success(ENUpload.name+"file Uploaded")
  }
  
  const handleGEDrop=async(files)=>{
    const formData = new FormData();
    formData.append("upload_preset", "pnqxyr4o");
    formData.append("file", files[0]);
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/moyyn/image/upload",
      formData
    );
    const URL = response.data.url;
    const val={
      name:files[0].name,
      url:URL,
    }
    setGEUpload(val);
    console.log(GEUpload);
    toast.success(GEUpload.name+"file Uploaded")
  };

  const handleSelect=(event,value)=>{
    DesiredPosition.push(...value);
    console.log(DesiredPosition)
  };

  const handleSubmit=()=>{
    const data={
      ENUpload,
      GEUpload,
      DesiredPosition,
    }
    localStorage.setItem("CvDetails",JSON.stringify(data));
  };

  useEffect(() => {
		fetch('https://backendmoyynapp.moyyn.com/desiredjoblist', {mode:'cors',method: 'POST',headers: { "Content-Type": "application/json" }})
		.then(res => res.json())
		.then(data => {
			if(data.success){
				setAvailableJobList(data.data.reverse());
			}
		}).catch((err)=>console.log(err));
	},[])

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
              <Grid item><Button variant="contained" color="primary">1</Button></Grid>
              <Grid item><Button variant="outlined" color="primary" href="/information">2</Button></Grid>
              <Grid item><Button variant="outlined" color="primary" href="/career">3</Button></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>Upload your CV</Typography>
          </Grid>
          <Grid item xs={false} md={6} sm={3}>
            <img className={classes.svg} src={cvupload} alt="uploadCV Banner"/>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  };
  const CvForm=()=>{
    return(
      <React.Fragment>
        <Grid container direction="column" alignItems="strech" spacing={2}>
          <Grid item xs>
            <Grid container direction="row" alignItems="center" spacing={5}>
              <Grid item xs>
                <Dropzone 
                onDrop={(files)=>handleENDrop(files)}
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
                  onDrop={handleGEDrop}
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
            {/* <div className={classes.select}>
              <Multiselect
                isObject={false}
                onRemove={handleRemove}
                onSelect={handleSelect}
                options={AvailableJobList}
                placeholder="Desired Position"
                id="desiredPosition"
              />
            </div> */}
            <Autocomplete
              multiple
              id="tags-outlined"
              options={AvailableJobList}
              filterSelectedOptions
              onChange={(e,v)=>handleSelect(e,v)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  fullWidth
                  placeholder="Desired Position"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} alignItems="center">
            <Grid container direction="row" alignItems="center" spacing={5}>
              <Grid item xs={6}>
                <Button variant="contained" color="info" size="large" fullWidth href="/signup">Back</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" size="large" fullWidth href="/information" onClick={handleSubmit}>Next</Button>
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

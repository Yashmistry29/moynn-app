import React,{useState} from 'react'
import Dashboard from './Dashboard';
import {
  Grid,
  CssBaseline,
  makeStyles,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  careerLevelOptions,
  industries,
  categoriesAndRoles,
  fallbackSkills,
  Experience,
  languageLevel,
  languages,
} from '../Data/static-data'

import career from '../Images/MyApril4.jpg'
import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  svg:{
    maxWidth:"50vh"  
  },
  root: {
    height: "100vh",
    color:"Gray",
    // '& .MuiTextField-root': {
    //   margin: theme.spacing(1),
    //   width: '72ch',
    // }
  },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 179,
  // },
  // formControl1: {
  //   margin: theme.spacing(1),
  //   minWidth: 275,
  // },
  paper: {
    margin: theme.spacing(3,3),
    padding:theme.spacing(1),
    // display: "flex",
    // // background:"black",
    // flexDirection: "column",
    // alignItems: "center",
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
}));

function Career() {
  const classes=useStyles();
  const initialValues={
    career:'',
    industry:'',
    skills:'',
    experienceList:[],
    languageList:[],
  };

  const [RolesList, setRolesList] = useState([]);
  const [category,setCategory]=useState('');
  const [Role,setRole]=useState('');
  const [experience,setExperience]=useState('');
  const [language,setLanguage]=useState('');
  const [Level,setLevel]=useState('');
  const [inputs, setinputs] = useState(initialValues)
  const Category=Object.keys(categoriesAndRoles);
  
  const handleChange=(event)=>{
    event.persist();
    setinputs(inputs=>({...inputs,[event.target.name]:event.target.value}));
  };
  const handleSkills=(event,value)=>{
    setinputs(inputs=>({...inputs,skills:value}));
  };

  const handleCategory=(event)=>{
    event.persist()
    RolesList.splice(0,RolesList.length);
    setExperience('')
    const categories=event.target.value;
    setRolesList(...RolesList,categoriesAndRoles[categories])
    setCategory(categories);
  }

  const handleRoles=(event)=>{
    event.persist();
    setRole(event.target.value)
  };

  const handleExperience=(event)=>{
    event.persist();
    setExperience(event.target.value)
    const string=category+'--'+Role+'--'+event.target.value;
    console.log(string);
    const list=inputs.experienceList;
    list.push(string);
    setExperience('');
    setRole('')
  };

  const handleLanguage=(event)=>{
    event.persist();
    setLanguage(event.target.value);
  };

  const handleLanguageLevel=(event)=>{
    event.persist();
    setLevel(event.target.value)
    const string=language+'--'+event.target.value;
    console.log(string);
    const list=inputs.languageList;
    list.push(string);
    setLevel('');
  };

  const removeExperienceList=(index)=>{
    inputs.experienceList.splice(index,1);
  }

  const removeLanguageList=(index)=>{
    inputs.LanguageList.splice(index,1);
  }

  const handleSubmit=()=>{
    console.log(inputs);
  }
  
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
              <Grid item><Button variant="outlined" color="primary" href="/information">2</Button></Grid>
              <Grid item><Button variant="contained" color="primary">3</Button></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>Let us know about your skills</Typography>
          </Grid>
          <Grid item xs={false} md={6} sm={3}>
            <img className={classes.svg} src={career} alt="info-banner"/>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };
  const careerForm=()=>{
    return(
      <React.Fragment>
        <Grid container direction="column" alignItems="strech" spacing={2}>
          <Grid item xs>
            <TextField
              id="outlined-select-currency-native"
              select
              fullWidth
              autoFocus
              label="Career Level"
              name="career"
              value={inputs.career}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {careerLevelOptions.map((option) => (
                <option value={option.value}>
                  {option.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs>
            <TextField
              id="outlined-select-currency-native"
              select
              fullWidth
              label="Industries"
              name="industry"
              value={inputs.industry}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {industries.map((option) => (
                <option value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={fallbackSkills}
              filterSelectedOptions
              onChange={(e,v)=>handleSkills(e,v)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  fullWidth
                  placeholder="Skills"
                />
              )}
            />
          </Grid>
          <Grid item xs >
            <Typography>Work Experience (Add your Experience)</Typography>
          </Grid>
          <Grid item xs>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item xs>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  fullWidth
                  label="Category"
                  name="category"
                  value={category}
                  onChange={handleCategory}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  <option value=""> </option>
                  {Category.map((option) => (
                    <option value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs>
              <TextField
                  id="outlined-select-currency-native"
                  select
                  fullWidth
                  label="Roles"
                  name="role"
                  value={Role}
                  onChange={handleRoles}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  <option value=""> </option>
                  {RolesList.map((option) => (
                    <option value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  fullWidth
                  name="experience"
                  label="Experience"
                  value={experience}
                  onChange={handleExperience}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  <option value=""> </option>
                  {Experience.map((option) => (
                    <option value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <List>
              {inputs.experienceList.map((item, i) => {
              return (
                <ListItem key={i} button divider>
                  <ListItemText
                   primary={
                     <React.Fragment>
                       <Typography
                        component="span"
                        variant="subtitle2"
                       >
                        {item}
                       </Typography>
                     </React.Fragment>
                    }
                  />
                  <HighlightOffIcon onClick={() => removeExperienceList(i)} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item xs md={7} >
                <TextField
                  id="outlined-select-currency-native"
                  select
                  fullWidth
                  name="language"
                  label="Languages"
                  value={language}
                  onChange={handleLanguage}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  <option value=""> </option>
                  {languages.map((option) => (
                    <option value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs md={5}>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  fullWidth
                  label="Level"
                  name="Level"
                  value={Level}
                  onChange={handleLanguageLevel}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  <option value=""> </option>
                  {languageLevel.map((option) => (
                    <option value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <List>
              {inputs.languageList.map((item, i) => {
              return (
                <ListItem key={i} button divider>
                  <ListItemText
                   primary={
                     <React.Fragment>
                       <Typography
                        component="span"
                        variant="subtitle2"
                       >
                        {item}
                       </Typography>
                     </React.Fragment>
                    }
                  />
                  <HighlightOffIcon onClick={() => removeLanguageList(i)} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12} alignItems="center">
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item xs={6}>
                <Button variant="contained" color="info" size="large" fullWidth href="/information">Back</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" size="large" fullWidth onClick={handleSubmit}>Submit</Button>
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
        <Grid item xs={12} sm={8} md={4}>
          {logo()}
        </Grid>
        <Grid item xs={12} sm={8} md={8} elevation={6}>
          <div className={classes.paper}>{careerForm()}</div>
        </Grid>
      </Grid>
    </Dashboard>
  )
}

export default Career

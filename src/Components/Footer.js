import React from 'react';
import {
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import SIB from "../Images/SIB Logo.png"
import BER from "../Images/Brtlin Logo.png"
import EUR from "../Images/European Union.jpg"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
  root:{
    color:"Gray",
    background:"white",
    // background-color: #efefef;
    flex: "0 0 50px",/*or just height:50px;*/
    marginTop:"auto",
  },
  image:{
    maxWidth:"18vh"
  },
  title:{
    fontWeight:"bold"
  },
  subtitle:{
    display:"flex",
    alignItems:"center",
  },
  subtitle1:{
    display:"flex",
    alignItems:"center",
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={2}>
        <Grid item >
          <Grid container direction="row" alignItems="flex-start" justify="center">
            <Grid item xs md={4} sm>
              <Grid container direction="column" alignItems="flex-start" spacing={2}>
                <Grid item>
                  <Typography variant="body1" className={classes.title}>Sourcing talents to Germant</Typography>
                </Grid>
                <Grid item >
                  <Typography variant="subtitle" className={classes.subtitle}><LocationOnIcon/>Startup Incubator Berlin, Rohrdamm 88, 13629 Berlin</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle" className={classes.subtitle}><MailIcon/>talent@moyyn.com</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle" className={classes.subtitle}>Moyyn Group is a venture of MyHelpBuddy UG supported by European Union Social Fund and Berlin Senate</Typography>
                </Grid>
                <Grid item>
                  <FacebookIcon/>
                  <LinkedInIcon/>
                </Grid>
                <Grid item>
                  <Typography 
                  // style={{background:"black",color:"white",padding:"10px 30px"}} 
                  variant="body2">©2021 Moyyn. All Rights Reserved</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs md={4} sm>
              <Grid container direction="column" justify="flex-start" alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="body1" className={classes.title}>Links</Typography>
                </Grid>
                <Grid item>
                  <Grid container alignItems="flex-start" direction="column">
                    <Grid item>
                      <Typography variant="subtitle" className={classes.subtitle1}><ArrowRightIcon />Submit your CV</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle" className={classes.subtitle1}><ArrowRightIcon/>Jobs</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle" className={classes.subtitle1}><ArrowRightIcon/>Companies</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle" className={classes.subtitle1}><ArrowRightIcon/>Terms</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle" className={classes.subtitle1}><ArrowRightIcon/>Privacy</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle" className={classes.subtitle1}><ArrowRightIcon/>Imprints</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs md={4} >
              <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                  <Typography variant="body1" className={classes.title}>Supported By</Typography>
                </Grid>
                <Grid item>
                  <img  className={classes.image} alt="SIB" src={SIB}/>
                </Grid>
                <Grid item>
                  <img className={classes.image} alt="BER" src={BER}/>
                </Grid>
                <Grid item>
                  <img className={classes.image} alt="European" src={EUR}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer

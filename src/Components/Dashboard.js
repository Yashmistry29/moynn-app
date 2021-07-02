import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, CssBaseline} from '@material-ui/core';
import logo from "../Images/Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight:"bolder",
    fontSize:15,
    letterSpacing:2,
  },
  buttonText:{
    paddingLeft:12,
    paddingRight:12,
    marginRight:10,
    marginLeft:10,
    fontWeight:"bold",
    color:"DarkGray",
  },
  sbutton:{
    color:"#00ccff",
    fontWeight:"bold",
    border:"1px solid #00ccff",
    borderRadius:3,
  },
  logo:{
    maxWidth:50,
    margin:5
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: theme.spacing(3),
    maxHeight: "110vh",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

function Dashboard({children}) {
  const classes=useStyles();

  return (
    <div className="classes.root">
      <CssBaseline/>
      <AppBar position="fixed" elevation={1} color="#ffff">
        <Toolbar style={{marginRight:25,marginLeft:25}}>
          <img src={logo} className={classes.logo} alt="Moyyn-Logo"/>
          <Typography variant="subtitle2" className={classes.title}>
          </Typography>
          <Button className={classes.buttonText}>For Companies</Button>
          <Button className={classes.buttonText}>For Candidates</Button>
          <Button className={classes.buttonText}>DE</Button>
          <Button className={classes.buttonText}>EN</Button>
          <Button className={classes.buttonText}>Login</Button>
          <Button className={classes.sbutton}>SignUp</Button>
        </Toolbar>
      </AppBar>  
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default Dashboard

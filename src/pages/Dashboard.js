import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import {
  DashboardRounded,
  Home,
  PhotoAlbum,
  PowerSettingsNew,
} from "@material-ui/icons";
import { Switch, Route, NavLink, BrowserRouter } from "react-router-dom";

import { HomeData } from "./HomeData";
import { Gallery } from "./Gallery";
import Dashdata from "./Dashdata";
import { firebaseauth } from "../firebase";
import firebase from "../firebase";
import Login from "./Login";
import Logo from "./logo.png";
import Logout from "./Logout";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [drawer, setdrawer] = useState("Home");

  const loaddrawer = () => {
    switch (drawer) {
      case "Home":
        return <HomeData />;
      case "Gallery":
        return <Gallery />;
      case "Dashboard":
        return <Dashdata />;
      case "Login":
        return <Login />;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
     
        <AppBar position="fixed" className={classes.appBar}>
        <marquee>
          <Toolbar>
            <Typography variant="h4" noWrap>
              <img src={Logo} alt="logo" width="50px" />
            </Typography>
          </Toolbar>
      </marquee>
        </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />

        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={(e) => setdrawer("Home")}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button onClick={(e) => setdrawer("Gallery")}>
              <ListItemIcon>
                <PhotoAlbum />
              </ListItemIcon>
              <ListItemText primary="Gallery" />
            </ListItem>

            <ListItem button onClick={(e) => setdrawer("Dashboard")}>
              <ListItemIcon>
                <DashboardRounded />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <PowerSettingsNew />
              </ListItemIcon>
              <Logout/>
            </ListItem>
          </List>

          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {/* <Switch>
        <Route path='/home' exact component={HomeData} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/dashdata' exact component={Dashdata} />
         <Gallery/>
        <DashboardData/>
        </Switch> */}

        {loaddrawer()}
      </main>
    </div>
  );

  async function logout() {
    await firebaseauth.logout();
    props.history.push("/login");
  }
}

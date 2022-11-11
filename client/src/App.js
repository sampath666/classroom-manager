import React from 'react';
import { Typography, AppBar, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '700px',
    color: '#274DAF',
    backgroundColor: 'transparent',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  appBar1: {
    borderRadius: 15,
    margin: '30px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '900px',
    color: '#274DAF',
    backgroundColor: 'transparent',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  tempButton1: {
    borderRadius: 15,
    backgroundColor: '#9497B2',
    color: '#274DAF',
    width: '118px',
    height: '47px',
    fontWeight: 'bold',
    padding: '0px',
    marginRight: '12px',
  },
  tempButton: {
    borderRadius: 15,
    backgroundColor: '#9497B2',
    color: '#274DAF',
    width: '118px',
    height: '47px',
    fontWeight: 'bold',
    padding: '0px',
    marginRight: '12px',
    marginLeft: '300px',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2">ClassRoom Manager</Typography>
      </AppBar>
      <div container className={classes.container1} spacing={3}>
        <Grid className={classes.appBar1} item xs>
          <Typography variant="h4">ClassRoom Manager</Typography>
        </Grid>
        <Grid item xs>
          <Button color="primary" className={classes.tempButton} variant="contained">Contained</Button>
          <Button color="primary" className={classes.tempButton1} variant="contained">Contained</Button>
        </Grid>
      </div>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;

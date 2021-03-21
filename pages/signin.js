import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import { useAuth } from '../lib/auth'; 

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundColor: '#efefef',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(10, 12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-around',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    width: '100%', 
    marginBottom: theme.spacing(5),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const auth = useAuth(); 

  return (
    <Grid container component="main">
      
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography className={classes.title} component="h1" variant="h2">
              Sign In
            </Typography>
         
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
              size="large"
              onClick={(e) => auth.signinWithEmail(email, password, '/dashboard')}
            >
              Submit
            </Button>

            <br />
            <Divider /> 
            <br />

            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '50px' }}>
              <Button size="large" variant="contained" color="primary">
                <FacebookIcon 
                  onClick={
                    () => auth.signinWithFacebook('/dashboard')
                  }
                /> 
              </Button>
          
              <Button size="large" variant="contained" color="primary">
                <GitHubIcon 
                  onClick={
                    () => auth.signinWithGoogle('/dashboard')
                  }
                /> 
              </Button>

              <Button size="large" variant="contained" color="primary">
                <TwitterIcon 
                  onClick={
                    () => auth.signinWithGoogle('/dashboard')
                  }
                /> 
              </Button>
            </Box>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

        </div>
      </Grid>
    </Grid>
  );
}
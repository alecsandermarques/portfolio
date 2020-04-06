import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import profileImg from '../../assets/profile.png';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '80vh',
  },
  container: {
    width: '100%',
    padding: '0 24px',
  },
}));

export default function Home() {
  const classes = useStyles();

  const title = 'Alecsander Marques';
  const subtitle = 'Software Developer';
  const description = 'Node.js, React & Angular';

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item className={classes.container}>
        <Grid container>
          <Grid item xs={8}>
            <img src={profileImg} alt="Profile" />
          </Grid>

          <Grid item xs={4}>
            <div>
              <span>{title}</span>
              <span>{subtitle}</span>
              <span>{description}</span>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

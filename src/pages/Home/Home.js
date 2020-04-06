import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '80vh',
  },
  container: {},
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item xs={3}>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Typography>
              Almost before we knew it, we had left the ground.
            </Typography>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

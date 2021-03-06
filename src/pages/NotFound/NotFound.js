import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '80vh',
  },
}));

export default function NotFound() {
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
        <h1>Página não encontrada</h1>
      </Grid>
    </Grid>
  );
}

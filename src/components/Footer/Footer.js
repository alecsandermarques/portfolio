import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  typography: {
    paddingRight: 24,
    color: theme.palette.common.yellow,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.typography}
        color="secondary"
        variant="caption"
      >
        Developed by Alecsander Marques
      </Typography>
    </div>
  );
};

export default Footer;

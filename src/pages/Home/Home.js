import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import profileImg from '../../assets/profile.png';
import Footer from '../../components/Footer/Footer';

// aefuhaeufah

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '91vh',
  },
  container: {
    width: '100%',
    padding: '0 24px',
  },
  image: {
    width: '100%',
  },
  title: {
    color: theme.palette.common.yellow,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: theme.palette.secondary.main,
  },
  skills: {
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
  },
  boxInfo: {
    paddingLeft: '10%',
    paddingTop: '25%',
  },
  boxGetInTouch: {
    paddingTop: '10%',
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    '& svg': {
      marginTop: 15,
      marginRight: 20,
      transition: '0.4s',
      '&:hover': {
        color: theme.palette.common.yellow,
      },
    },
  },
  divider: {
    flex: 'auto',
    paddingTop: 30,
  },
}));

export default function Home() {
  const classes = useStyles();

  const title = "Hi, I'm Alecsander Marques";
  const subtitle = 'Software Developer';
  const description = 'Node.js, React & Angular';
  const iconSize = 30;

  return (
    <>
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
            <Grid item xs={5}>
              <img className={classes.image} src={profileImg} alt="Profile" />
            </Grid>

            <Grid item xs={7}>
              <div className={classes.boxInfo}>
                <div>
                  <Typography variant="h5" className={classes.title}>
                    {title}
                  </Typography>
                  <Typography color="secondary" variant="h6">
                    {subtitle}
                  </Typography>
                  <Typography
                    className={classes.skills}
                    color="secondary"
                    variant="caption"
                  >
                    {description}
                  </Typography>
                </div>
                <div className={classes.boxGetInTouch}>
                  <Typography color="secondary" variant="h6">
                    Get in touch...
                  </Typography>
                  <div className={classes.iconGroup}>
                    <div className={classes.icon}>
                      <FaGithubSquare size={iconSize} />
                      <FaLinkedin size={iconSize} />
                      <FaWhatsappSquare size={iconSize} />
                    </div>
                    <div className={classes.divider}>
                      <Divider variant="middle" />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

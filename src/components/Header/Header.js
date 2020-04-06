import { useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
    '&:hover': {
      '& > span': {
        color: theme.palette.common.yellow,
      },
    },
  },
  navLink: {
    color: theme.palette.secondary.main,
    fontFamily: 'Muli',
    fontWeight: 500,
    lineHeight: 1.6,
    fontSize: '1.25rem',
    marginLeft: 20,
    transition: '0.4s',
    '&:hover': {
      color: theme.palette.common.yellow,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const handleMenuClick = (item) => {
    history.replace({ pathname: item.path });
    setIsDrawerOpen(false);
  };

  const menuItems = [
    { title: 'Início', icon: <HomeIcon />, path: '/home' },
    { title: 'Sobre', icon: <LibraryBooksIcon />, path: '/about' },
    { title: 'Artigos', icon: <AssignmentIndIcon />, path: '/articles' },
  ];

  const menuToolbar = menuItems.map((item) => (
    <NavLink
      className={classes.navLink}
      activeStyle={{ color: theme.palette.common.yellow }}
      to={item.path}
      key={item.title}
    >
      {item.title}
    </NavLink>
  ));

  const menuDrawer = menuItems.map((item) => (
    <ListItem button key={item.title} onClick={() => handleMenuClick(item)}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  ));

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Hidden smUp implementation="css">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="secondary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography
              color="secondary"
              variant="h6"
              className={classes.title}
              onClick={() => handleMenuClick(menuItems[0])}
            >
              <span>A.</span> Marques
            </Typography>
            <Hidden xsDown implementation="css">
              {menuToolbar}
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List>{menuDrawer}</List>
      </SwipeableDrawer>
    </>
  );
};

export default Header;

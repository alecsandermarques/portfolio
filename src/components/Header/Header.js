import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
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

  const handleMenuClick = (item) => history.replace({ pathname: item.path });

  const menuItems = [
    { title: 'Início', icon: <HomeIcon />, path: '/' },
    { title: 'Sobre', icon: <LibraryBooksIcon />, path: '/about' },
    { title: 'Artigos', icon: <AssignmentIndIcon />, path: '/articles' },
  ];

  const menuToolbar = menuItems.map((item) => (
    <Button
      key={item.title}
      color="inherit"
      onClick={() => handleMenuClick(item)}
    >
      {item.title}
    </Button>
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
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6" className={classes.title}>
              Alecsander Marques
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

import { createMuiTheme } from '@material-ui/core/styles';

const white = '#F7F7F7';

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: white,
      main: '#18181e',
    },
    secondary: {
      contrastText: white,
      main: '#A9A9A9',
    },
    border: {
      main: '#DEC79B',
    },
  },
});

export default theme;

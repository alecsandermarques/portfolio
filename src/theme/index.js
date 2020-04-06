import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Muli',
  },
  palette: {
    common: {
      black: '#0B0B0B',
      white: '#C3C3C3',
      yellow: '#F5BA4A',
    },
    primary: {
      light: '#4D4D4D',
      main: '#0B0B0B',
      dark: '#030202',
    },
    secondary: {
      light: '#F2F2F2',
      main: '#C3C3C3',
      dark: '#696868',
    },
    divider: '#F5BA4A',
    background: {
      paper: '#C3C3C3',
      default: '#0B0B0B',
      level2: '#030202',
      level1: '#C3C3C3',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          margin: 0,
          padding: 0,
          outline: 0,
          boxSizing: 'border-box',
        },
        body: {
          textRendering: 'optimizeLegibility !important',
          WebkitFontSmoothing: 'antialiased !important',
        },
        button: {
          cursor: 'pointer',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;

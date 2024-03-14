import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul
      contrastText: '#000', // Texto claro para contraste
    },
    secondary: {
      main: '#4caf50', // Verde
      contrastText: '#fff', // Texto claro para contraste
    },
    error: {
      main: '#f44336', // Rojo
    },
    warning: {
      main: '#ff9800', // Naranja
    },
    info: {
      main: '#2196f3', // Azul claro
    },
    success: {
      main: '#4caf50', // Verde
    },
    common: {
      black: '#000',
      white: '#fff',
    },
  },
});

export default theme;

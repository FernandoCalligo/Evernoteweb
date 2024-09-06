import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // O el color de fondo deseado
        },
      },
    },
  },
});

export default theme;

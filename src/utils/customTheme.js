import { createTheme } from '@mui/material/styles';

const headingData = {
  fontFamily: ['Lato'].join(','),
};

const headings = {
  h1: { ...headingData, fontSize: '70px' },
  h2: { ...headingData, fontSize: '60px' },
  h3: { ...headingData, fontSize: '50px' },
  h4: { ...headingData, fontSize: '40px' },
  h5: { ...headingData, fontSize: '30px' },
  h6: { ...headingData, fontSize: '25px' },
};

const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    ...headings,
  },
});

export default theme;

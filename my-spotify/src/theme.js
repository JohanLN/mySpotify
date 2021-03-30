import { createMuiTheme } from '@material-ui/core';

var white = {
  500: '#ffffff',
};

var green = {
    500: "#10CD0C",
    A400: "#10CD0C"
}

export default createMuiTheme({
    palette: {
        primary: white,
        secondary: green
    },
    typography: 'Raleway, Arial',
    overrides: {
        MuiButton: {
            root: {
                "&:hover": {
                    backgroundColor: '#e6e6e6'
                }
            }
        }
    }
})
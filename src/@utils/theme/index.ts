import { red, amber } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const fontFamilyRoboto = {
  fontFamily: [
    "Roboto",
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

const fontFamilyMetropolis = {
  fontFamily: [
    "Metropolis",
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  letterSpacing: "0.015rem",
};

const lightMuiTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: amber[500],
      light: "#feefc3",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFF",
      paper: "#F1F3F4",
    },
  },
  typography: {
    ...fontFamilyRoboto,
    overline: {
      fontWeight: 500,
      fontSize: "0.7rem",
    },
  },
  shape: {
    borderRadius: 0.5,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  mixins: {
    toolbar: {
      minWidth: 280,
    },
  },
  overrides: {
    MuiListItemText: {
      primary: {
        ...fontFamilyMetropolis,
        fontWeight: 500,
        fontSize: "0.87rem",
      },
    },
  },
});

const darkMuiTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#202124",
    },
    secondary: {
      main: amber[500],
      light: "#41331C",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#E8EAED",
      secondary: "#FFFFFFDE",
    },
    background: {
      default: "#202124",
      paper: "#535456",
    },
  },
  typography: {
    ...fontFamilyRoboto,
    overline: {
      fontWeight: 500,
      fontSize: "0.7rem",
    },
  },
  shape: {
    borderRadius: 0.5,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  mixins: {
    toolbar: {
      minWidth: 280,
    },
  },
  overrides: {
    MuiListItemText: {
      primary: {
        ...fontFamilyMetropolis,
        fontWeight: 500,
        fontSize: "0.87rem",
      },
    },
  },
});

export const light = responsiveFontSizes(lightMuiTheme);
export const dark = responsiveFontSizes(darkMuiTheme);
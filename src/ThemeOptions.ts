import {
  createTheme,
  ThemeOptions,
  responsiveFontSizes,
} from "@mui/material/styles";
import {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface Palette extends MuiPalette {
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    contrastText: string;
  }

  interface PaletteOptions extends MuiPaletteOptions {
    gray?: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
    contrastText?: string;
  }
}
const components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
  MuiCard: {
    defaultProps: {
      elevation: 1,
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        width: "initial",
        height: "initial",
        backgroundColor: "#6d6875",
        boxShadow: "inset 0px 0px 1px 0px grey.700",
        borderColor: "rgb(73, 18, 110)",
        borderWidth: "1px",
        margin: "1rem",
        padding: ".5rem",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      fixed: {
        height: "100%",
        padding: "1rem",
        verticalAlign: "middle",
        position: "fixed",
        top: "25%",
        width: "80%",
        left: "10%",
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          position: "relative",
          backgroundColor: "#f5f0f0",
          overflow: "hidden",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "rosario",
          textTransform: "none",
          backgroundColor: "#2E4621",
          color: "#EEFEBF",
          marginRight: "1px",
          transition: "all 0.2s ease",
          "&.Mui-active, &.Mui-selected": {
            backgroundColor: "#88ad4c",
            color: "#ece6d4",
          },
        },
      },
    },
  },
};

const theme = createTheme({
  components,
  palette: {
    contrastThreshold: 4.5,
    mode: "light",
    primary: {
      main: "#2E4621",
      light: "#88ad4c",
    },
    secondary: {
      main: "#023047",
      light: "#d1a750",
    },
    error: { main: "#f50057" },
    gray: {
      100: "#ece6d4",
      200: "#f3ecfd",
      300: "#6d6875D9",
      500: "#9a96a9",
      700: "#392145",
      800: "#230344",
      900: "#090213",
    },
    background: {
      default: "#f8f9fa",
      paper: "#f5f0f0",
    },
    common: {
      black: "#000",
      white: "#f8f9fa",
    },
    text: {
      primary: "#212D45",
      secondary: "#7a798c",
    },
    contrastText: "#ded8cc",
    divider: "#eadece",
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  typography: {
    fontSize: 14,
    fontFamily: "'Rubik Variable', sans-serif",
    fontWeightLight: 300,
    fontWeightBold: 700,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h1: {
      fontFamily: "Major Mono Display",
      fontWeight: "800",
      textAlign: "center",
      fontSize: "2.3rem",
      color: "#212D45",
    },
    h2: {
      fontFamily: "Rosario",
      fontSize: "1.52rem",
      fontWeight: "500",
      color: "#7a798c",
    },
    h3: {
      fontFamily: "Rubik Variable",
      fontSize: "1.7rem",
      fontWeight: "400",
    },
    h4: {
      fontFamily: "Rubik Variable",
      fontSize: "1.25rem",
      fontWeight: "600",
    },
    h5: {
      fontFamily: "Rubik Variable",
      fontSize: "1.2rem",
      lineHeight: 2,
      fontWeight: "400",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Rubik Variable",
      fontWeight: "400",
      lineHeight: "1.2rem",
      textAlign: "left",
    },
    body2: {
      fontSize: ".8rem",
      fontFamily: "Rubik Variable",
      fontWeight: "400",
      lineHeight: "1rem",
      textAlign: "left",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      appear: 1000,
      enter: 2000,
      exit: 3000,
    },
  },
  shadows: [
    "none",
    "0px 0px 1px 0px rgb(73, 18, 110)",
    "2px 2px 19px -2px rgba(0, 0, 0, 0.44)",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0",
  ],
} as ThemeOptions);

const themeResponsiveFonts = responsiveFontSizes(theme);

export default themeResponsiveFonts;

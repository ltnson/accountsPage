import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.s14-gray": {
            fontSize: "14px",
            color: "#9DA7B9",
          },
          "&.s12-gray": {
            fontSize: "12px",
            color: "#9DA7B9",
          },
          "&.s14": {
            fontSize: "14px",
          },
          "&.s12": {
            fontSize: "12px",
          },
          "&.s14-green": {
            fontSize: "14px",
            color: "#2B8143",
          },
          "&.s12-green-bg": {
            fontSize: "12px",
            color: "#2B8143",
            background: "#E5FAE8",
            borderRadius: "3px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.login-btn-2": {
            border: "1px solid #80A2D9",
            borderRadius: "5px",
            color: "#80A2D9",
            width: "100%",
          },
          "&.login-btn-1": {
            background: "#80A2D9",
            borderRadius: "5px",
            color: "white",
            width: "100%",
          },
          "&.logout": {
            background: "#FFF3F4",
            borderRadius: "5px",
            color: "#FF7177",
            width: "100%",
            "@media (max-width: 640px)": {
              height: "32px",
            },
          },
          "&.navbar": {
            background: "#5E90F0",
            borderRadius: "4px",
            color: "white",
            width: "150px",
            height: "40px",
            "&:hover": {
              background: "#4dabf7",
            },
            "@media (max-width: 640px)": {
              height: "32px",
              width: "110px",
              fontSize: "12px",
            },
          },
          "&.btn-group": {
            color: "#9DA7B9",
            border: "1px solid #9DA7B9",
            "&:hover": {
              color: "white",
              background: "#5E90F0",
            },
          },
          "&.btn-group-n": {
            color: "#9DA7B9",
            border: "1px solid #9DA7B9",
            "@media (max-width: 720px)": {
              display: "none",
            },
            "&:hover": {
              color: "white",
              background: "#5E90F0",
            },
          },
          "&.btn-group-active": {
            color: "white",
            background: "#5E90F0",
          },
          "&.save": {
            background: "#5E90F0",
            borderRadius: "4px",
            color: "white",
            width: "100%",
            height: "40px",
            fontSize: "14px",
            fontWeight: "500",
            "&:hover": {
              background: "#4dabf7",
            },
            "@media (max-width: 640px)": {
              height: "32px",
              fontSize: "12px",
            },
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&:hover": {
            cursor: "pointer",
          },
          "&.sidebar": {
            width: "100%",
            height: "auto",
            padding: "10px",
            marginBottom: "10px",
            "&:hover": {
              backgroundColor: "#FFF3F4",
              borderRadius: "8px",
              path: {
                fill: "#FF424A",
              },
            },
          },
          "&.sidebar-toggle": {
            width: "36px",
            height: "auto",
            padding: "4px",

            "&:hover": {
              backgroundColor: "#FFF3F4",
              borderRadius: "8px",
              path: {
                fill: "#FF424A",
              },
            },
          },

          "&.gray": {
            path: {
              fill: "#666666",
            },
          },
          "&.red": {
            backgroundColor: "#FFF3F4",
            borderRadius: "8px",
            path: {
              fill: "#FF424A",
            },
          },
          "&.notifi-red": {
            "& path:last-child": {
              fill: "#FF424A",
            },
          },
          "&.notifi-gray": {
            "& path:last-child": {
              fill: "#666666",
            },
          },
          "&.navbar": {
            width: "auto",
            height: "40px",
            "&:hover": {
              backgroundColor: "#FFF3F4",
              borderRadius: "8px",
              path: {
                fill: "#74c0fc",
              },
            },
            "@media (max-width: 640px)": {
              height: "32px",
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.search-account .MuiInputBase-root": {
            height: "40px",
            "@media (max-width: 640px)": {
              height: "32px",
              fontSize: "14px",
            },
          },
          "&.account-tab-select .MuiInputBase-root": {
            color: "#9DA7B9",
            height: "36px",
            "@media (max-width: 640px)": {
              height: "28px",
              fontSize: "14px",
            },
          },
          "&.input-form": {
            width: "100%",
          },
          "&.skill-form .MuiOutlinedInput-notchedOutline": {
            boxShadow: "0px 0px 8px rgba(121, 121, 121, 0.12)",
            border: "none",
          },
          "&.input-form .MuiInputBase-root": {
            paddingRight: "10px",
            height: "42px",
            fontSize: "14px",
            "@media (max-width: 640px)": {
              height: "36px",
            },
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          height: "36px",
          "@media (max-width: 640px)": {
            height: "28px",
            fontSize: "14px",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          boxShadow: "0",
          flexGrow: "1",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          minWidth: "1020px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          position: "sticky",
          top: "0",
          background: "white",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "12px",
          "@media (max-width: 420px)": {
            height: "26px",
            fontSize: "12px",
            padding: "6px",
          },
        },
      },
    },
  },
});

export default theme;

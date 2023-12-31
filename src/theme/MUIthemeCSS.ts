import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.login-layout': {
            position: 'fixed',
            zIndex: '30',
            width: '100%',
            height: '100vh',
            top: '0',
            padding: '40px 32px',
            '@media (max-width: 640px)': {
              padding: '0',
            },
            '@media (max-height: 640px)': {
              padding: '0 32px',
              '@media (max-width: 640px)': {
                padding: '0',
              },
            },
          },

          '&.sideber-instance': {
            position: 'relative',
            '& div': {
              display: 'none',
            },
            '&:hover': {
              '& div': {
                display: 'flex',
              },
            },
          },

          '&.s14-gray': {
            fontSize: '14px',
            color: '#9DA7B9',
          },

          '&.s12-gray': {
            fontSize: '12px',
            color: '#9DA7B9',
          },

          '&.s14': {
            fontSize: '14px',
            whiteSpace: 'normal',
          },
          '&.email-break': {
            wordBreak: 'break-word',
          },

          '&.s12': {
            fontSize: '12px',
          },

          '&.s14-green': {
            fontSize: '14px',
            color: '#2B8143',
          },

          '&.s14-red': {
            fontSize: '14px',
            color: '#fa5252',
          },

          '&.s12-green-bg': {
            fontSize: '12px',
            color: '#2B8143',
            background: '#E5FAE8',
            borderRadius: '3px',
          },

          '&.skill-op': {
            padding: '4px 8px',
            display: 'flex',
            width: 'auto',
            whiteSpace: 'nowrap',
            color: 'black',
            fontSize: '12px',
            '@media (max-width: 640px)': {
              padding: '2px 6px',
            },
          },

          '&.skill-hover': {
            cursor: 'pointer',
          },

          '&.btn-group-next': {
            color: '#9DA7B9',
            height: '36px',
            border: '1px solid rgba(224, 224, 224, 1)',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            padding: '0 8px',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              color: 'white',
              background: '#5E90F0',
            },
            '@media (max-width: 640px)': {
              height: '28px',
              fontSize: '14px',
            },
          },

          '&.btn-group-prev': {
            color: '#9DA7B9',
            height: '36px',
            borderTop: '1px solid #D2D2D2',
            borderBottom: '1px solid #D2D2D2',
            borderLeft: '1px solid #D2D2D2',
            borderRight: '0',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            padding: '0 8px',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              color: 'white',
              background: '#5E90F0',
            },
            '@media (max-width: 640px)': {
              height: '28px',
              fontSize: '14px',
            },
            '@media (max-width: 579px)': {
              border: '1px solid #D2D2D2',
            },
          },

          '&.footer-side': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            '@media (max-height: 680px)': {
              gap: '16px',
            },
          },
          '&.sidebar-list': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            '@media (max-height: 680px)': {
              gap: '16px',
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',

          '&.btn-navbar': {
            whiteSpace: 'nowrap',
            width: 'auto',
            height: '40px',
            background: '#5E90F0',
            borderRadius: '4px',
            color: 'white',
            '@media (max-width: 640px)': {
              height: '32px',
              fontSize: '12px',
            },
          },

          '&.login-btn-2': {
            border: '1px solid #80A2D9',
            borderRadius: '5px',
            color: '#80A2D9',
            width: '100%',
            '&:hover': {
              background: '#EDF3FE',
            },
          },

          '&.login-btn-1': {
            background: '#80A2D9',
            borderRadius: '5px',
            color: 'white',
            width: '100%',
            '&:hover': {
              background: '#5C78DB',
            },
          },

          '&.logout': {
            background: '#FFF3F4',
            borderRadius: '5px',
            color: '#FF7177',
            width: '100%',
            '@media (max-width: 640px)': {
              height: '32px',
            },
            '&:hover': {
              background: '#ffa8a8',
            },
          },

          '&.navbar': {
            background: '#5E90F0',
            borderRadius: '4px',
            color: 'white',
            width: '150px',
            height: '40px',
            '&:hover': {
              background: '#4dabf7',
            },
            '@media (max-width: 640px)': {
              height: '32px',
              width: '120px',
              fontSize: '12px',
            },
          },

          '&.save': {
            background: '#5E90F0',
            borderRadius: '4px',
            color: 'white',
            width: '100%',
            height: '40px',
            fontSize: '14px',
            fontWeight: '500',
            '&:hover': {
              background: '#4dabf7',
            },
            '@media (max-width: 640px)': {
              height: '32px',
              fontSize: '12px',
            },
          },

          '&.filter-clear': {
            background: 'white',
            border: '1px solid #5E90F0',
            borderRadius: '4px',
            color: '#5E90F0',
            width: '100%',
            height: '30px',
            fontSize: '14px',
            fontWeight: '500',
            '&:hover': {
              background: '#EDF3FE',
            },
          },

          '&.filter-show': {
            background: '#5E90F0',
            borderRadius: '4px',
            color: 'white',
            width: '100%',
            height: '30px',
            fontSize: '14px',
            fontWeight: '500',
            '&:hover': {
              background: '#4dabf7',
            },
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
          },

          '&.sidebar': {
            width: '100%',
            height: 'auto',
            padding: '10px',
            '&:hover': {
              backgroundColor: '#FFF3F4',
              borderRadius: '8px',
              path: {
                fill: '#FF424A',
              },
            },
          },

          '&.sidebar-toggle': {
            width: 'auto',
            height: '100%',
            padding: '10px',
            '&:hover': {
              backgroundColor: '#FFF3F4',
              borderRadius: '8px',
              path: {
                fill: '#FF424A',
              },
            },
          },

          '&.sidebar-toggle-active': {
            width: 'auto',
            height: '100%',
            padding: '6px',
            '&:hover': {
              backgroundColor: '#FFF3F4',
              borderRadius: '8px',
              path: {
                fill: '#FF424A',
              },
            },
          },

          '&.gray': {
            path: {
              fill: '#666666',
            },
          },

          '&.red': {
            backgroundColor: '#FFF3F4',
            borderRadius: '8px',
            path: {
              fill: '#FF424A',
            },
          },

          '&.notifi-red': {
            '& path:last-child': {
              fill: '#FF424A',
            },
          },

          '&.notifi-gray': {
            '& path:last-child': {
              fill: '#666666',
            },
          },

          '&.filter-text': {
            padding: '2.5px 0 4px 0',
            width: '18px',
            height: '18px',
            '& path': {
              stroke: '#5E90F0',
            },
            '&:hover': {
              cursor: 'default',
            },
          },

          '&.navbar': {
            width: 'auto',
            height: '40px',
            '&:hover': {
              backgroundColor: '#FFF3F4',
              borderRadius: '8px',
              path: {
                fill: '#74c0fc',
              },
            },
            '@media (max-width: 640px)': {
              height: '32px',
            },
          },

          '&.delete-icon': { color: '#ff8787' },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#D2D2D2',
            },
            '&:hover fieldset': {
              border: '1px solid #9DA7B9',
            },
            '&.Mui-focused fieldset': {
              border: '1px solid #9DA7B9',
            },
          },
          '&.search-account .MuiInputBase-root': {
            width: '280px',
            height: '40px',
            '@media (max-width: 640px)': {
              height: '32px',
              fontSize: '14px',
              width: '240px',
            },
          },

          '&.account-tab-select .MuiInputBase-root': {
            color: '#9DA7B9',
            height: '36px',
            '@media (max-width: 640px)': {
              height: '28px',
              fontSize: '14px',
            },
          },

          '&.input-form': {
            width: '100%',
          },

          '&.skill-form .MuiOutlinedInput-notchedOutline': {
            boxShadow: '0px 0px 8px rgba(121, 121, 121, 0.12)',
            border: 'none',
          },

          '&.input-form .MuiInputBase-root': {
            paddingLeft: '0',
            height: '42px',
            fontSize: '14px',
            '@media (max-width: 640px)': {
              height: '36px',
            },
          },

          '&.filter-form .MuiInputBase-root': {
            paddingRight: '10px',
            width: '100%',
            height: '36px',
            fontSize: '14px',
            '@media (max-width: 640px)': {
              height: '32px',
            },
          },
        },
      },
    },

    MuiButtonGroup: {
      styleOverrides: {
        root: {
          height: '36px',
          '@media (max-width: 640px)': {
            height: '28px',
            fontSize: '14px',
          },
        },
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          border: '1px solid rgba(224, 224, 224, 1)',
          boxShadow: '0',
          flexGrow: '1',
          '& td,th': {
            borderRight: '1px solid rgba(224, 224, 224, 1)',
          },
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          position: 'sticky',
          top: '0',
          background: 'white',
          zIndex: '1',
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px',
          '@media (max-width: 420px)': {
            height: '26px',
            fontSize: '12px',
            padding: '6px',
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.filter': {
            padding: '4px 6px 4px 0',
            '&:hover': {
              background: 'none',
            },
          },
          '&  path': {
            fill: '#9DA7B9',
          },
          '&.Mui-checked path': {
            fill: '#5E90F0',
          },
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        root: {
          width: '200px',
          height: 'auto',
          color: '#5E90F0',
        },
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          '&.MuiPagination-ul': {
            gap: '0',
          },

          '&.MuiPagination-text': {
            color: '#9DA7B9',
          },

          '& ul > li > div': {
            paddingTop: '8px',
            '&:hover': {
              background: 'inherit',
              color: '#9DA7B9',
            },
          },
        },
      },
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          height: '36px',
          color: '#9DA7B9',
          borderRadius: '0',
          borderTop: '1px solid #D2D2D2',
          borderBottom: '1px solid #D2D2D2',
          borderLeft: '1px solid #D2D2D2',
          margin: '0',

          '&:hover': {
            color: 'white',
            background: '#5E90F0',
          },

          '&.Mui-selected': {
            color: 'white',
            background: '#5E90F0',
          },

          '@media (max-width: 579px)': {
            display: 'none',
          },

          '@media (max-width: 640px)': {
            height: '28px',
            fontSize: '14px',
          },
        },

        previousNext: {
          border: '0',
          padding: '0',
          '@media (max-width: 579px)': {
            display: 'inline-block',
          },

          '@media (max-width: 640px)': {
            height: '28px',
            fontSize: '14px',
          },

          '&:hover': {
            background: 'none',
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.phone-form': {
            '& .MuiSelect-icon': {
              position: 'absolute',
              left: '10px',
              '@media (max-width: 640px)': {
                left: '6px',
              },
            },
            '& .MuiSelect-select': {
              paddingLeft: '38px',
              '@media (max-width: 640px)': {
                paddingLeft: '28px',
              },
            },
            '& .MuiSelect-icon svg': {
              fontSize: '1.2rem',
            },
          },
        },
      },
    },
  },
});

export default theme;

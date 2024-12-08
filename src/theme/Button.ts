import { Theme } from '@mui/material'

const MuiButtonBase = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: (theme: Theme) => ({
    root: {
      '&:focus-visible': {
        outline: `max(3px, 0.08em) solid ${theme.palette.primary.main}`,
        outlineOffset: `min(-3px, -0.08em)`,
      },
    },
  }),
}

export default MuiButtonBase

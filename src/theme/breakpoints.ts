declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true // removes the `xs` breakpoint
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
  }
}
const breakpoints = {
  values: {
    xs: 0,
    sm: 380,
    md: 600,
    lg: 900,
    xl: 1120,
    xxl: 1440,
  },
}

export default breakpoints

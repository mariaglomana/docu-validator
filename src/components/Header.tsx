import { Typography, Box } from '@mui/material'

import docuLogo from '/document.svg'

const styles = {
  root: {
    p: '1em',
    '& .flex': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  logo: {
    color: 'secondary.main',
    '& .logoImg': {
      height: { xs: '3.2em', md: '5em' },
      padding: '0.5em',
    },
    '& h1': {
      fontWeight: 500,
      fontSize: { xs: '2.5em', md: '3.75em' },
    },
  },
}

const DocuLogo = () => {
  return (
    <Box sx={styles.logo} className='flex'>
      <img src={docuLogo} className='logoImg' alt='Docu Validator logo' />
      <Typography variant='h1'>Docu Validator</Typography>
    </Box>
  )
}

const Header = () => {
  return (
    <Box component='header' sx={styles.root} className='flex'>
      <DocuLogo />
    </Box>
  )
}

export default Header

import { Typography } from '@mui/material'

import docuLogo from '/document.svg'

const App = () => {
  return (
    <>
      <div>
        <a href='/'>
          <img src={docuLogo} className='logo' alt='Docu Validator logo' />
          <Typography variant='h1'>Docu Validator</Typography>
        </a>
      </div>
    </>
  )
}

export default App

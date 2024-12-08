import { Typography, Button } from '@mui/material'

import docuLogo from '/document.svg'

const App = () => {
  return (
    <>
      <div>
        <img src={docuLogo} className='logo' alt='Docu Validator logo' />
        <Typography variant='h1'>Docu Validator</Typography>
      </div>
      <Button variant='contained'>Empezar</Button>
    </>
  )
}

export default App

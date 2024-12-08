import { Box } from '@mui/material'

import { Header } from '../components'

const styles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  width: 'var(--container-max-width)',
  mx: 'auto',
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box component='main' sx={styles}>
        {children}
      </Box>
    </>
  )
}
export default MainLayout

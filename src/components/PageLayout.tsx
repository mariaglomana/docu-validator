import { Box, Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import texts from '../texts.json'
import { Header } from '.'
import { navigateTo } from '../utils'

const styles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  width: 'var(--container-max-width)',
  mx: 'auto',
  gap: 2,
}

interface PageLayoutProps {
  children: React.ReactNode
  withHeader?: boolean
  withGoHomeButton?: boolean
}

const PageLayout = ({
  withHeader,
  withGoHomeButton,
  children,
}: PageLayoutProps) => {
  return (
    <>
      {withHeader && <Header />}
      {withGoHomeButton && (
        <Button
          variant='text'
          color='secondary'
          sx={{ m: 2, alignSelf: 'start' }}
          startIcon={<NavigateBeforeIcon />}
          onClick={() => navigateTo('/')}
        >
          {texts.goBack}
        </Button>
      )}
      <Box component='main' sx={styles}>
        {children}
      </Box>
    </>
  )
}
export default PageLayout

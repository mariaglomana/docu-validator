import { Box, Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import texts from '../texts.json'
import { Header } from '.'
import { navigateTo } from '../utils'

const styles = {
  navigation: {
    width: 'var(--container-max-width)',
    mx: 'auto',
    mb: '2rem',
  },

  content: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    width: 'var(--content-L-max-width)',
    mx: 'auto',
    px: { xs: 2.5, md: 0 },
    gap: 2,
    '& button': {
      width: 'var(--button-max-width)',
      alignSelf: 'center',
    },
  },
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
      <Box sx={styles.navigation}>
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
      </Box>

      <Box component='main' sx={styles.content}>
        {children}
      </Box>
    </>
  )
}
export default PageLayout

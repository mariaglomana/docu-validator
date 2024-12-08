import { Typography } from '@mui/material'
import { PageLayout } from '../components'

const ErrorPage = () => {
  return (
    <PageLayout withGoHomeButton>
      <Typography variant='h4'>Ups, no deberías haber llegado aquí</Typography>
    </PageLayout>
  )
}

export default ErrorPage

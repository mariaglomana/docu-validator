import texts from '../../texts.json'
import { Typography } from '@mui/material'
import { PageLayout } from '../../components'
import Form from './Form'

const AddDocument = () => {
  return (
    <PageLayout withGoHomeButton>
      <Typography variant='h4'>{texts.addDocument}</Typography>
      <Form />
    </PageLayout>
  )
}

export default AddDocument

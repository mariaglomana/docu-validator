import React from 'react'
import texts from '../../texts.json'
import {
  Box,
  TextField,
  Button,
  FormLabel,
  FormHelperText,
} from '@mui/material'
import useNewDocumentForm from './useNewDocumentForm'
import FileUploaderInput from './FileUploaderInput'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  authorGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },
  submitBtn: {
    width: 'var(--button-max-width)',
    mt: 2,
  },
}
const AddDocument = () => {
  const submitFormFn = () => true
  const onSubmitSuccess = () => {
    alert('Success')
  }

  const {
    isSubmitting,
    formValues,
    formError,
    fieldErrors,
    updateFieldForm,
    submitForm,
  } = useNewDocumentForm(submitFormFn, onSubmitSuccess)

  return (
    <Box component='form' sx={styles.root}>
      <Box sx={styles.authorGroup}>
        <FormLabel component='legend'>{texts.author}</FormLabel>
        <TextField
          id='authorName'
          label={texts.name}
          value={formValues.authorName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            updateFieldForm('authorName', event.target.value)
          }}
          disabled={isSubmitting}
          error={!!fieldErrors.authorName}
          helperText={fieldErrors.authorName}
        />
        <TextField
          id='authorEmail'
          label='Email'
          value={formValues.authorEmail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            updateFieldForm('authorEmail', event.target.value)
          }}
          disabled={isSubmitting}
          error={!!fieldErrors.authorEmail}
          helperText={fieldErrors.authorEmail}
        />
      </Box>
      <Box>
        <FileUploaderInput
          selectedFile={formValues.document}
          setSelectedFile={(file) => updateFieldForm('document', file)}
        />
        {!!fieldErrors.document && (
          <FormHelperText error={true}>
            {texts.errorFieldFileMandatory}
          </FormHelperText>
        )}
      </Box>

      <Button
        onClick={submitForm}
        disabled={isSubmitting}
        sx={styles.submitBtn}
      >
        {texts.save}
      </Button>
    </Box>
  )
}

export default AddDocument

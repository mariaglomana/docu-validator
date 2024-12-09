import {
  Box,
  TextField,
  Button,
  FormLabel,
  FormHelperText,
} from '@mui/material'

import texts from '../../texts.json'
import { UserData } from '../../types'
import * as services from '../../services'
import * as session from '../../session'
import { navigateTo } from '../../utils'
import useNewDocumentForm, { IDocumentValues } from './useNewDocumentForm'
import FileUploaderInput from './FileUploaderInput'
import ReferredGroup from './ReferredGroup'
import { IDocument } from '../Home/types'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    '& label.groupLabel': {
      fontWeight: 'bold',
      fontSize: '1.25rem',
    },
  },
  authorGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },
  submitBtn: {
    width: 'var(--button-max-width)',
    mt: 2,
    alignSelf: 'flex-end',
  },
}

const getFormInitialValues = () => {
  const userData = session.getUser()
  if (!userData) return {}

  return {
    authorEmail: userData.email,
    authorName: userData.name,
  }
}

const AddDocument = () => {
  const submitFormFn = async (formValues: IDocumentValues) => {
    if (formValues.document) {
      const documentDataForStorage: IDocument = {
        name: formValues.document.name,
        update_date: new Date().toISOString(),
        id: crypto.randomUUID(),
        author: formValues.authorEmail,
        status: 'pending',
      }

      const authorData: UserData = {
        id: crypto.randomUUID(),
        email: formValues.authorEmail,
        name: formValues.authorName,
      }
      services.saveNewDocument(documentDataForStorage)

      if (!session.isUserAuthenticated()) {
        session.saveUser(authorData)
      }

      if (formValues.referred.length > 0) {
        await services.sendNewDocumentEmails(
          authorData,
          formValues.document,
          formValues.referred,
        )
      }
    }
  }

  const onSubmitSuccess = (formValues: IDocumentValues) => {
    alert(`Documento \'${formValues.document?.name}\' guardado con éxito`)
    navigateTo('/')
  }

  const {
    isSubmitting,
    formValues,
    formError,
    fieldErrors,
    updateFieldForm,
    submitForm,
  } = useNewDocumentForm(submitFormFn, onSubmitSuccess, getFormInitialValues())

  return (
    <Box component='form' sx={styles.root} id='newDocumentForm'>
      <Box sx={styles.authorGroup}>
        <FormLabel className='groupLabel'>{texts.author}</FormLabel>
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
          setSelectedFile={(file: File) => updateFieldForm('document', file)}
        />
        {!!fieldErrors.document && (
          <FormHelperText error={true}>
            {texts.errorFieldFileMandatory}
          </FormHelperText>
        )}
      </Box>
      <ReferredGroup
        referred={formValues.referred}
        addReferrer={(email: string) =>
          updateFieldForm('referred', [...formValues.referred, email])
        }
        removeReferrer={(emailToRemove: string) =>
          updateFieldForm(
            'referred',
            formValues.referred.filter((email) => email !== emailToRemove),
          )
        }
      />

      <Button
        form='newDocumentForm'
        onClick={submitForm}
        disabled={isSubmitting}
        sx={styles.submitBtn}
      >
        {texts.save}
      </Button>
      {!!formError && <FormHelperText error={true}>{formError}</FormHelperText>}
    </Box>
  )
}

export default AddDocument

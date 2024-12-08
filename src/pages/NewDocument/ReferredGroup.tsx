import React, { useState } from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Typography,
  Box,
  FormLabel,
  TextField,
  IconButton,
} from '@mui/material'

import texts from '../../texts.json'
import { validators } from '../../forms'

const styles = {
  root: {
    display: 'flex ',
    flexDirection: 'column',
    gap: 1,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  button: {
    width: 'fit-content',
  },
}

const ReferredGroup = ({ referred, addReferrer, removeReferrer }) => {
  const [email, setEmail] = useState('')
  const [invalidEmailError, setInvalidEmailError] = useState(false)

  const handleAddReferrer = (e) => {
    e.preventDefault()

    if (validators.isValidEmail(email)) {
      addReferrer(email)
      setEmail('')
    } else {
      setInvalidEmailError(true)
    }
  }

  return (
    <Box sx={styles.root}>
      <FormLabel className='groupLabel'>{texts.recipients}</FormLabel>
      <Typography>{texts.referredDescription}</Typography>
      <ul>
        {referred.map((referrer: string, index: number) => (
          <Box component='li' key={referrer}>
            <Box sx={styles.listItem}>
              <Typography key={index}>{referrer}</Typography>
              <IconButton
                aria-label={texts.deleteFile}
                color='secondary'
                onClick={() => removeReferrer(referrer)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
      </ul>
      <TextField
        id='recipientEmail'
        label={texts.recipientEmail}
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInvalidEmailError(false)
          setEmail(event.target.value)
        }}
        error={!!invalidEmailError}
        helperText={
          invalidEmailError ? texts.errorFieldInvalidEmail : undefined
        }
      />
      <Button
        color='secondary'
        onClick={handleAddReferrer}
        sx={styles.button}
        startIcon={<AddIcon />}
      >
        {texts.addReferrer}
      </Button>
    </Box>
  )
}

export default ReferredGroup

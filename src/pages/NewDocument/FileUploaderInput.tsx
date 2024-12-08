import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import { Typography, Box, IconButton } from '@mui/material'

import texts from '../../texts.json'

const styles = {
  fileInfo: {
    display: 'flex ',
    flexDirection: 'row',
    alignItems: 'center',
    '& p': {
      flexGrow: 2,
    },
    '& button': {
      width: 'fit-content',
    },
  },
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const allowedFileTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const FileUploaderInput = ({ selectedFile, setSelectedFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (!allowedFileTypes.includes(file.type)) {
        alert('Invalid file type. Please upload a PDF or DOCX file.')
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB. Please upload a smaller file.')
        return
      }
      setSelectedFile(file)
    }
  }

  return (
    <>
      {!selectedFile && (
        <Button
          component='label'
          role={undefined}
          color='secondary'
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          {texts.uploadFile}
          <VisuallyHiddenInput
            type='file'
            accept='.pdf,.docx'
            onChange={handleFileChange}
          />
        </Button>
      )}
      {selectedFile && (
        <Box sx={styles.fileInfo}>
          <Typography>
            <strong>{texts.selectedFile}:</strong> {selectedFile.name} (
            {(selectedFile.size / 1024).toFixed(2)} KB)
          </Typography>
          <IconButton
            aria-label={texts.deleteFile}
            color='secondary'
            onClick={() => setSelectedFile(null)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
    </>
  )
}

export default FileUploaderInput

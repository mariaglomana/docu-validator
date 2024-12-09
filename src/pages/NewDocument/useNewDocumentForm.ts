import { useState } from 'react'

import texts from '../../texts.json'
import { validateError } from '../../forms'

const getFieldsErrors = (formValues, formValidationConfig) => {
  let fieldErrors = {}

  for (const [fieldName, fieldConfig] of Object.entries(formValidationConfig)) {
    fieldErrors[fieldName] = (fieldConfig as (value: unknown) => string)(
      formValues[fieldName],
    )
  }
  return fieldErrors
}

const hasFieldErrors = (fieldErrors: Record<string, string>) =>
  Object.values(fieldErrors).some((value) => value !== '')

export interface IDocumentValues {
  authorName: string
  authorEmail: string
  document: File | null
  referred: string[]
}

const DEFAULT_FORM_VALUES = {
  authorName: '',
  authorEmail: '',
  document: null,
  referred: [],
}

const FORM_VALIDATION_CONFIG = {
  authorName: validateError.isFilled,
  authorEmail: validateError.isEmail,
  document: validateError.isNotNull,
}

const useNewDocumentForm = (
  submitFormFn: (formValues: IDocumentValues) => Promise<void>,
  onSubmitSuccess: (formValues: IDocumentValues) => void,
  initialValues = {},
) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<IDocumentValues>({
    ...DEFAULT_FORM_VALUES,
    ...initialValues,
  })
  const [formError, setFormError] = useState<string | undefined>()
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof IDocumentValues, string>>
  >({})

  const submitForm = async () => {
    setFormError(undefined)
    setIsSubmitting(true)

    const fieldErrors = getFieldsErrors(formValues, FORM_VALIDATION_CONFIG)

    if (hasFieldErrors(fieldErrors)) {
      setFieldErrors(fieldErrors)
      setIsSubmitting(false)
      return
    }

    try {
      await submitFormFn(formValues)
      onSubmitSuccess(formValues)
    } catch (error) {
      setFormError(texts.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetErrors = () => {
    setFormError(undefined)
    setFieldErrors({})
  }

  const updateFieldForm = (
    fieldName: keyof IDocumentValues,
    fieldValue: IDocumentValues[keyof IDocumentValues],
  ) => {
    resetErrors()
    setFormValues((values) => ({
      ...values,
      [fieldName]: fieldValue,
    }))
  }

  return {
    isSubmitting,
    formValues,
    formError,
    fieldErrors,
    updateFieldForm,
    submitForm,
  }
}

export default useNewDocumentForm

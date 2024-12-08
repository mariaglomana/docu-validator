import texts from './texts.json'

type ValidatorFn = (value: any) => boolean
type ValidatorMessage = string

const composeValidators =
  (fieldValidations: [ValidatorFn, ValidatorMessage][]) => (value: unknown) => {
    for (const [validationFn, validationMessage] of fieldValidations) {
      if (!validationFn(value)) {
        return validationMessage
      }
    }

    return ''
  }

export const validators = {
  isFilled: (val: unknown) => val !== '',
  isNotNull: (val: unknown) => val !== null,
  isChecked: (val: unknown) => val === 'on',
  isValidEmail: (email: string) => {
    const regexp =
      // NOTE: Regexp taken from html specification:
      // https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return regexp.test(String(email).toLowerCase())
  },
}

export const validateError = {
  isFilled: composeValidators([
    [validators.isFilled, texts.errorFieldRequired],
  ]),
  isNotNull: composeValidators([
    [validators.isNotNull, texts.errorFieldRequired],
  ]),
  isEmail: composeValidators([
    [validators.isFilled, texts.errorFieldRequired],
    [validators.isValidEmail, texts.errorFieldInvalidEmail],
  ]),
}

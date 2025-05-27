export const getCategoryValueErrors = (value: string) => {
  if (typeof value !== 'string') return 'must_be_string'
  if (!value.length) return 'empty_value'

  // if (password.length < USER_PASSWORD_MIN_LENGTH) return 'invalid_length'
}

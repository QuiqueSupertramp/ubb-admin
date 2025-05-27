export const USER_PASSWORD_MIN_LENGTH = 6

export const getPasswordErrors = (password: string) => {
  if (typeof password !== 'string') return 'must_be_string'
  if (!password.length) return 'empty_value'

  if (password.length < USER_PASSWORD_MIN_LENGTH) return 'invalid_length'
}

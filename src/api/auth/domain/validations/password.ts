export const USER_PASSWORD_MIN_LENGTH = 6

export const getPasswordErrors = (password: string) => {
  if (typeof password !== 'string') return 'invalid_type_password'
  if (!password.length) return 'empty_password'

  if (password.length < USER_PASSWORD_MIN_LENGTH) return 'min_length_password'
}

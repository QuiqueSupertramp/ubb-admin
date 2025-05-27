const AUTH_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const getEmailErrors = (email: string) => {
  if (typeof email !== 'string') return 'must_be_string'
  if (!email.length) return 'empty_value'

  if (!AUTH_EMAIL_REGEX.test(email)) return 'invalid_format'
}

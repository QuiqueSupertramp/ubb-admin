const AUTH_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const getEmailErrors = (email: string) => {
  if (typeof email !== 'string') return 'invalid_type_email'
  if (!email.length) return 'empty_email'

  if (!AUTH_EMAIL_REGEX.test(email)) return 'invalid_format_email'
}

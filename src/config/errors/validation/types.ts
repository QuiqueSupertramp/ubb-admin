export type ValidationErrors = string | undefined

export type ListOfValidationErrors<T> = { [k in keyof T]?: ValidationErrors } | null

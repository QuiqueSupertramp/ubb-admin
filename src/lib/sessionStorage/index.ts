export const getFromSessionStorage = <T>(key: string) => {
  if (!key) return null
  const item = window.sessionStorage.getItem(key)
  if (!item) return null
  try {
    const itemParsed = JSON.parse(item)
    return itemParsed.data as T
  } catch {
    return null
  }
}

export const setFromSessionStorage = (key: string, value: unknown) => {
  window.sessionStorage.setItem(key, JSON.stringify({ data: value }))
}

export const deleteFromSessionStorage = (key: string) => {
  window.sessionStorage.removeItem(key)
}

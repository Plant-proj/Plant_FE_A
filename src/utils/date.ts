export const getWeekString = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'short' }
  return date.toLocaleDateString('en-US', options).toUpperCase()
}

export const getMonthString = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'long' }
  return date.toLocaleDateString('en-US', options)
}

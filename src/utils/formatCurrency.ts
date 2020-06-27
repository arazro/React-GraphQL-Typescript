
export const formatCurrency = (value: any) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(value)
}
export const Currency = (value: any) => {
  const formatter = new Intl.NumberFormat()
  return formatter.format(value)
}

export const searchValue = (value: any) => {
  return ("%" + value + "%")
}
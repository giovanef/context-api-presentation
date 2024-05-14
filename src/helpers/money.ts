export const toMonetary = (value: number): string => {
  return parseFloat(value.toString())
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
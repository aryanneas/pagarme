export const cpfMask = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
]

export const cvvMask = [/\d/, /\d/, /\d/]

export const expirationDateMask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

export const cardNumberMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]

export const keepOnlyDigits = (text) => text.toString().replace(/\D/g, '')

const extractDecimals = (v) => {
  const decimals = v
    .split('')
    .reverse()
    .slice(0, 2)
    .map(() => /\d/)

  if (decimals.length === 1) decimals.push('0')

  return decimals.reverse()
}

const extractInts = (v) => {
  const end = v.length - 2

  const ints = v
    .split('')
    .slice(0, end)
    .reduce((acc, _, i) => {
      const nextIndex = i + 1
      const hasDot = nextIndex % 3 === 0 && nextIndex < end
      return acc.concat(hasDot ? [/\d/, '.'] : /\d/)
    }, [])

  if (ints.length < 1) ints.push('0')

  return ints.reverse()
}

export const currencyMask = (value) => {
  value = keepOnlyDigits(value)

  if (value === '0') return []

  const decimals = extractDecimals(value)
  const ints = extractInts(value)

  return ['R', '$', ' ', ...ints, ',', ...decimals]
}

const ALPHABET =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const BASE = BigInt(ALPHABET.length)

export function encodeBase62(value: number | bigint | string): string {
  let n =
    typeof value === 'bigint'
      ? value
      : typeof value === 'number'
        ? BigInt(value)
        : BigInt(value)

  if (n < 0n) {
    throw new Error('Negative numbers are not supported.')
  }

  if (n === 0n) {
    return ALPHABET[0]
  }

  let result = ''

  while (n > 0n) {
    const remainder = Number(n % BASE)
    result = ALPHABET[remainder] + result
    n /= BASE
  }

  return result
}

export function decodeBase62(encoded: string): bigint {
  let result = 0n

  for (const char of encoded) {
    const digit = ALPHABET.indexOf(char)

    if (digit === -1) {
      throw new Error(`Invalid Base62 character: ${char}`)
    }

    result = result * BASE + BigInt(digit)
  }

  return result
}

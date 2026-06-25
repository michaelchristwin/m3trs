import { z } from 'zod'
import { isAddress, getAddress, parseUnits } from 'viem'

export const formSchema = z.object({
  tokenId: z.bigint({
    error: (issue) =>
      issue.input === undefined ? 'Select an NFT' : 'Invalid token ID',
  }),
  description: z.string().min(1, { error: 'Description is required' }),
  supply: z
    .string()
    .min(1, 'Required')
    .regex(/^\d+(\.\d+)?$/, 'Invalid number format')
    .transform((val) => BigInt(val)), // → bigint,
  stopTime: z.iso
    .datetime({ local: true })
    .transform((val) => new Date(val)) // local → Date (UTC internally)
    .refine((date) => !isNaN(date.getTime()), 'Invalid date')
    .transform((date) => Math.floor(date.getTime() / 1000)), // → UTC timestamp (number)
})

export const transferFormSchema = z.object({
  recipientAddress: z
    .string()
    .refine((val) => isAddress(val), {
      message: 'Invalid Ethereum address',
    })
    .transform((val) => getAddress(val)), // checksummed,
  amount: z
    .string()
    .min(1, 'Required')
    .regex(/^\d+(\.\d+)?$/, 'Invalid number format')
    .transform((val) => parseUnits(val, 18)), // → bigint,
})

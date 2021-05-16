export {}

declare global {
  interface Window { customCards: { name: string, type: string, description: string }[] }
}

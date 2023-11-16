export async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const isHeadless = Bun.env.HEADLESS === 'false' ? false : 'new'

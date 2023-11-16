export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HEADLESS?: 'false' | 'true' | 'new'
    }
  }
}

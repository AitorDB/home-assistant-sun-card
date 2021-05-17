declare module 'custom-card-helpers' {
  export interface HomeAssistant {
    themes: Themes & { darkMode: boolean }
    language: string,
    locale: { language: string }
    states: {
      'sun.sun': {
        state: string
        attributes: {
          azimuth: number
          elevation: number
          next_dawn: string
          next_dusk: string
          next_midnight: string
          next_noon: string
          next_rising: string
          next_setting: string
          rising: boolean
        }
      }
    }
  }
}

export type TSunCardConfig = {
  darkMode?: boolean
  language?: ESunCardLanguages
  showAzimuth?: boolean
  showElevation?: boolean
  title?: string
}

export type TSunCardData = {
  azimuth: number
  dawnProgressPercent: number
  dayProgressPercent: number
  duskProgressPercent: number
  elevation: number
  sunPercentOverHorizon: number
  sunPosition: {
    x: number
    y: number
  }
  times: {
    dawn: string | null | undefined
    dusk: string | null | undefined
    noon: string | null | undefined
    sunrise: string | null | undefined
    sunset: string | null | undefined
  }
}

export type TSunCardTexts = {
  Azimuth: string
  Dawn: string
  Dusk: string
  Elevation: string
  Noon: string
  Sunrise: string
  Sunset: string
}

export enum ESunCardLanguages {
  Default = 'en',
  EN = 'en',
  ES = 'es'
}

export type TSunCardConfig = {
  darkMode?: boolean
  language?: string
  showAzimuth?: boolean
  showElevation?: boolean
  timeFormat?: '12h' | '24h'
  title?: string
}

export type TSunCardTime = {
  time: string,
  period?: 'AM' | 'PM'
}

export type TSunCardData = {
  azimuth: number
  dawnProgressPercent: number
  dayProgressPercent: number
  duskProgressPercent: number
  elevation: number
  error?: string
  sunPercentOverHorizon: number
  sunPosition: {
    x: number
    y: number
  }
  times: {
    dawn: TSunCardTime
    dusk: TSunCardTime
    noon: TSunCardTime
    sunrise: TSunCardTime
    sunset: TSunCardTime
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

  errors: {
    [key in ESunCardErrors]: string
  }
}

export enum ESunCardErrors {
  'SunIntegrationNotFound' = 'SunIntegrationNotFound'
}

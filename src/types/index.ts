import { I18N } from '../utils/I18N'


export type TSunCardFields = {
  sunrise?: boolean
  sunset?: boolean

  dawn?: boolean
  noon?: boolean
  dusk?: boolean

  azimuth?: boolean
  elevation?: boolean
}

export type TSunCardConfig = {
  i18n?: I18N
  darkMode?: boolean
  language?: string
  
  title?: string,
  component?: string
  use12hourClock?: boolean

  fields?: TSunCardFields
}

export type TSunInfo = {
  sunrise: number,
  sunset: number

  dawnProgressPercent: number
  dayProgressPercent: number
  duskProgressPercent: number
  
  sunAboveHorizon: boolean
  sunPercentOverHorizon: number
  sunPosition: {
    x: number
    y: number
  }
}

export enum ESunCardErrors {
  SunIntegrationNotFound = 'SunIntegrationNotFound'
}

export type TSunCardData = {
  azimuth: number
  elevation: number

  sunInfo: TSunInfo

  times: TSunCardTimes

  error?: ESunCardErrors
}

export type TSunCardTimes = {
  dawn: Date
  dusk: Date
  noon: Date
  sunrise: Date
  sunset: Date
}

export enum ESunCardI18NKeys {
  Azimuth = 'azimuth',
  Dawn = 'dawn',
  Dusk = 'dusk',
  Elevation = 'elevation',
  Noon = 'noon',
  Sunrise = 'sunrise',
  Sunset = 'sunset'
}

// TODO: see if we can use the above enum to generate this type
export type TSunCardI18NKeys = {
  azimuth: string
  dawn: string
  dusk: string
  elevation: string
  noon: string
  sunrise: string
  sunset: string

  errors: TSunCardI18NErrorKeys
}

export type TSunCardI18N = Record<string, unknown>

export type TSunCardI18NErrorKeys = {
  [key in ESunCardErrors]: string
}

import en from './assets/localization/languages/en.json'
import es from './assets/localization/languages/es.json'
import { ESunCardLanguages, TSunCardConfig } from './types'

export class Constants {
  static readonly DEFAULT_CONFIG: TSunCardConfig = {
    darkMode: true,
    language: ESunCardLanguages.Default,
    showAzimuth: false,
    showElevation: false
  }

  static readonly EVENT_X_POSITIONS = {
    dayStart: 5,
    sunrise: 101,
    sunset: 449,
    dayEnd: 545
  }

  static readonly HORIZON_Y = 108
  static readonly LOCALIZATION_LANGUAGES = { en, es }
  static readonly SUN_RADIUS = 17
}
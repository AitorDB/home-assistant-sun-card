import de from './assets/localization/languages/de.json'
import en from './assets/localization/languages/en.json'
import es from './assets/localization/languages/es.json'
import fi from './assets/localization/languages/fi.json'
import fr from './assets/localization/languages/fr.json'
import hu from './assets/localization/languages/hu.json'
import it from './assets/localization/languages/it.json'
import nl from './assets/localization/languages/nl.json'
import ptBR from './assets/localization/languages/pt-BR.json'
import sv from './assets/localization/languages/sv.json'
import { TSunCardConfig } from './types'

export class Constants {
  static readonly DEFAULT_CONFIG: TSunCardConfig = {
    darkMode: true,
    language: 'en',
    showAzimuth: false,
    showElevation: false,
    timeFormat: '24h'
  }

  static readonly EVENT_X_POSITIONS = {
    dayStart: 5,
    sunrise: 101,
    sunset: 449,
    dayEnd: 545
  }

  static readonly HORIZON_Y = 108
  static readonly LOCALIZATION_LANGUAGES = { de, en, es, fi, fr, hu, it, nl, 'pt-BR': ptBR, sv }
  static readonly SUN_RADIUS = 17
}

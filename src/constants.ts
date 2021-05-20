import da from './assets/localization/languages/da.json'
import de from './assets/localization/languages/de.json'
import en from './assets/localization/languages/en.json'
import es from './assets/localization/languages/es.json'
import et from './assets/localization/languages/et.json'
import fi from './assets/localization/languages/fi.json'
import fr from './assets/localization/languages/fr.json'
import hu from './assets/localization/languages/hu.json'
import it from './assets/localization/languages/it.json'
import nl from './assets/localization/languages/nl.json'
import pl from './assets/localization/languages/pl.json'
import ptBR from './assets/localization/languages/pt-BR.json'
import ru from './assets/localization/languages/ru.json'
import sl from './assets/localization/languages/sl.json'
import sv from './assets/localization/languages/sv.json'
import { TSunCardConfig, TSunCardTexts } from './types'

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
  static readonly LOCALIZATION_LANGUAGES: Record<string, TSunCardTexts> = {
    da, de, en, es, et, fi, fr, hu, it, nl, pl, 'pt-BR': ptBR, ru, sl, sv
  }
  static readonly SUN_RADIUS = 17
}

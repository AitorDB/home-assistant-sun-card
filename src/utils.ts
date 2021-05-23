import { html, TemplateResult } from 'lit-html'
import { Constants } from './constants'
import { TSunCardI18N, TSunCardI18NKeys } from './types'

export class I18N {
  private localization: TSunCardI18NKeys
  private dateFormatter: Intl.DateTimeFormat

  constructor (language: string, use12HourClock: boolean) {
    this.localization = Constants.LOCALIZATION_LANGUAGES[language]

    // https://developer.mozill a.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    this.dateFormatter = new Intl.DateTimeFormat(language, {
      hour12: use12HourClock,
      timeStyle: 'short'
    })
  }

  public formatDateAsTime (date: Date): string {
    return this.dateFormatter.formatToParts(date).map(({ type, value }) => {
      switch (type) {
        // intentional fallthrough
        case 'hour':
        case 'minute':
        case 'dayPeriod':
        case 'literal':
          return value
        default:
          return ''
      }
    })
    .join('')
  }

  public tr (trKey: string): string {
    return this.getLocalizationElement(this.localization, trKey).toString()
  }

  // Janky recursive logic to handle nested values in i18n json sources
  private getLocalizationElement (localization: TSunCardI18N, trKey: string): string | TSunCardI18N {

    if (trKey.includes('.')) {
      const parts = trKey.split('.', 2)
      // TODO: maybe add typecheck
      const localization = this.getLocalizationElement(this.localization, parts[0]) as TSunCardI18N
      return this.getLocalizationElement(localization, parts[1])
    } else {
      // if the translation isn't completed in the target language, fall back to english
      // give ugly string for developers who misstype
      return (localization ? localization[trKey] : undefined)
        ?? Constants.FALLBACK_LOCALIZATION[trKey]
        ?? `Translation key '${trKey}' doesn't have a valid translation`
    }
  }
}

export default {
  nothing: html``,
  renderFieldElement (i18n: I18N, translationKey: string, value: Date | number | string): TemplateResult {
    
    let display: string
    if (value instanceof Date) {
      display = i18n.formatDateAsTime(value)
    } else {
      display = value.toString()
    }

    return html`
      <div class="sun-card-text-container">
        <span class="sun-card-field-name">${ i18n.tr(translationKey) }</span>
        <span class="sun-card-field-value">${ display }</span>
      </div>
    `
  },
  isValidLanguage (language: string): boolean {
    return Object.keys(Constants.LOCALIZATION_LANGUAGES).includes(language)
  },
  todayAtStartOfDay (): Date {
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
  
    return today
  },
  todayAtEndOfDay (): Date {
    const today = new Date()
    today.setHours(23)
    today.setMinutes(59)
    today.setSeconds(59)
    today.setMilliseconds(999)
  
    return today
  },
  findSectionPosition (msSinceSectionStart: number, msSectionEnd: number, section: number): number {    
    return (Math.min(msSinceSectionStart, msSectionEnd) * section) / msSectionEnd
  },
  findSunProgress (sunPosition: number, startPosition: number, endPosition: number): number {
    return this.clamp(0, 100,
      (100 * (sunPosition - startPosition)) / (endPosition - startPosition)
    )
  },
  clamp (min: number, max: number, value: number): number {
    return Math.min(Math.max(value, min), max)
  }
}

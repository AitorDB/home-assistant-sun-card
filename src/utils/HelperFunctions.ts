import { html, TemplateResult } from 'lit-html'
import { Constants } from '../constants'
import { I18N } from './I18N'

export class HelperFunctions {
  public static nothing (): TemplateResult {
    return html``
  }

  public static renderFieldElement (i18n: I18N, translationKey: string, value: Date | number | string | undefined): TemplateResult {
    let display: string
    if (value === undefined) {
      return HelperFunctions.nothing()
    } else if (value instanceof Date) {
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
  }
  
  public static isValidLanguage (language: string): boolean {
    return Object.keys(Constants.LOCALIZATION_LANGUAGES).includes(language)
  }

  public static todayAtStartOfDay (): Date {
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
  
    return today
  }
  
  public static todayAtEndOfDay (): Date {
    const today = new Date()
    today.setHours(23)
    today.setMinutes(59)
    today.setSeconds(59)
    today.setMilliseconds(999)
  
    return today
  }

  public static findSectionPosition (msSinceSectionStart: number, msSectionEnd: number, section: number): number {    
    return (Math.min(msSinceSectionStart, msSectionEnd) * section) / msSectionEnd
  }

  public static findSunProgress (sunPosition: number, startPosition: number, endPosition: number): number {
    return HelperFunctions.clamp(0, 100,
      (100 * (sunPosition - startPosition)) / (endPosition - startPosition)
    )
  }
  public static clamp (min: number, max: number, value: number): number {
    if (min === max) {
      return min
    }

    if (min > max) {
      throw new RangeError('Min value can not be bigger than the max value')
    }

    return Math.min(Math.max(value, min), max)
  }
}

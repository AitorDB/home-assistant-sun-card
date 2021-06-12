import { html, TemplateResult } from 'lit-html'

export class HelperFunctions {
  public static nothing (): TemplateResult {
    return html``
  }

  public static renderFieldElement (_i18n: unknown, translationKey: string, value: Date | number | string | undefined): TemplateResult {
    if (value === undefined) {
      return HelperFunctions.nothing()
    }

    const display = value instanceof Date ? value.getTime() : value.toString()
    return html`
      <div class="sun-card-text-container">
        <span class="sun-card-field-name">${ translationKey }</span>
        <span class="sun-card-field-value">${ display }</span>
      </div>
    `
  }

  public static isValidLanguage (language: string): boolean {
    return language !== 'notSupportedLanguage'
  }

  public static findSectionPosition (_msSinceSectionStart: number, _msSectionEnd: number, _section: number): number {    
    return 0
  }

  public static todayAtStartOfDay (): Date {
    return new Date(0)
  }
  
  public static todayAtEndOfDay (): Date {
    return new Date(0)
  }

  public static clamp (_min: number, _max: number, _value: number): number {
    return 0
  }

  public static findSunProgress (_sunPosition: number, _startPosition: number, _endPosition: number): number {
    return 0
  }
}

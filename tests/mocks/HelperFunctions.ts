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
}

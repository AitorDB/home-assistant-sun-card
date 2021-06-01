import { html, TemplateResult } from 'lit-html'
import { ESunCardErrors, TSunCardConfig } from '../types'
import { I18N } from '../utils/I18N'

export class SunErrorContent {
  private i18n: I18N
  private error: ESunCardErrors

  constructor (config: TSunCardConfig, error: ESunCardErrors) {
    this.i18n = config.i18n!
    this.error = error
  }

  public render (): TemplateResult {
    const errorMessage = this.i18n.tr(`errors.${this.error}`)
    console.log(errorMessage)

    return html`
      <div class="sun-card-error">
        ${ errorMessage }
      </div>
    `
  }
}

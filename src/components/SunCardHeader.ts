import { html, TemplateResult } from 'lit-html'
import { ESunCardI18NKeys, TSunCardConfig, TSunCardData, TSunCardFields, TSunCardTimes } from '../types'
import utils, { I18N } from '../utils'

export class SunCardHeader {
  private title?: string
  private times: TSunCardTimes
  private fields: TSunCardFields
  private i18n: I18N

  constructor (config: TSunCardConfig, data: TSunCardData) {
    this.title = config.title
    this.fields = config.fields!
    this.times = data?.times

    this.i18n = config.i18n!
  }

  public render (): TemplateResult {
    return html`
      ${ this.showTitle() ? this.renderTitle() : utils.nothing }
      ${ this.renderHeader() }
    `
  }

  private renderTitle (): TemplateResult {
    return html`<div class="sun-card-title">${ this.title }</div>`
  }

  private renderHeader (): TemplateResult {
    return html`
      <div class="sun-card-header">
        ${ 
          this.fields?.sunrise
            ? utils.renderFieldElement(this.i18n, ESunCardI18NKeys.Sunrise, this.times.sunrise)
            : utils.nothing
        }
        ${ 
          this.fields?.sunset
            ? utils.renderFieldElement(this.i18n, ESunCardI18NKeys.Sunset, this.times.sunset)
            : utils.nothing
        }
      </div>
    `
  }

  private showTitle (): boolean {
    return this.title !== undefined
  }
}

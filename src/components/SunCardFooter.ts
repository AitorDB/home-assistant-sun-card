import { html, TemplateResult } from 'lit-html'
import { ESunCardI18NKeys, TSunCardConfig, TSunCardData, TSunCardFields, TSunCardTimes } from '../types'
import utils, { I18N } from '../utils'

export class SunCardFooter {
  private data: TSunCardData
  private i18n: I18N
  private times: TSunCardTimes
  private fields: TSunCardFields

  constructor (config: TSunCardConfig, data: TSunCardData) {
    this.data = data

    this.i18n = config.i18n!
    this.times = data?.times
    this.fields = config.fields!
  }

  public render (): TemplateResult {
    return html`
      <div class="sun-card-footer">
        <div class="sun-card-field-row">
          ${ 
            this.fields?.dawn
              ? utils.renderFieldElement(this.i18n, ESunCardI18NKeys.Azimuth, this.times.dawn)
              : utils.nothing
          }
          ${ 
            this.fields?.noon
              ? utils.renderFieldElement(this.i18n, ESunCardI18NKeys.Noon, this.times.noon)
              : utils.nothing
          }
          ${ 
            this.fields?.dusk
              ? utils.renderFieldElement(this.i18n, ESunCardI18NKeys.Dusk, this.times.dusk)
              : utils.nothing
          }
        </div>

        <div class="sun-card-field-row">
          ${ 
            this.fields?.azimuth 
              ? utils.renderFieldElement(this.i18n, ESunCardI18NKeys.Azimuth, this.data?.azimuth)
              : utils.nothing
          }
          ${ 
            this.fields?.elevation 
              ? utils.renderFieldElement(this.i18n, ESunCardI18NKeys.Elevation, this.data?.elevation)
              : utils.nothing
          }
        </div>
      </div>
    `
  }
}

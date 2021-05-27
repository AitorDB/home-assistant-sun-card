import { html, TemplateResult } from 'lit-html'
import { ESunCardI18NKeys, TSunCardConfig, TSunCardData, TSunCardFields, TSunCardTimes } from '../types'
import { I18N } from '../utils/I18N'
import { HelperFunctions } from '../utils/HelperFunctions'

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
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Dawn, this.times.dawn)
              : HelperFunctions.nothing()
          }
          ${ 
            this.fields?.noon
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Noon, this.times.noon)
              : HelperFunctions.nothing()
          }
          ${ 
            this.fields?.dusk
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Dusk, this.times.dusk)
              : HelperFunctions.nothing()
          }
        </div>

        <div class="sun-card-field-row">
          ${ 
            this.fields?.azimuth 
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Azimuth, this.data?.azimuth)
              : HelperFunctions.nothing()
          }
          ${ 
            this.fields?.elevation 
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Elevation, this.data?.elevation)
              : HelperFunctions.nothing()
          }
        </div>
      </div>
    `
  }
}

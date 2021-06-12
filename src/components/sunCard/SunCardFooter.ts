import { html, TemplateResult } from 'lit-html'
import { ESunCardI18NKeys, ISunCardConfig, TSunCardData, TSunCardFields, TSunCardTimes } from '../../types'
import { I18N } from '../../utils/I18N'
import { HelperFunctions } from '../../utils/HelperFunctions'

export class SunCardFooter {
  private data: TSunCardData
  private i18n: I18N
  private times: TSunCardTimes
  private fields: TSunCardFields

  constructor (config: ISunCardConfig, data: TSunCardData) {
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
            this.fields?.dawn !== undefined && this.times?.dawn !== undefined
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Dawn, this.times.dawn)
              : HelperFunctions.nothing()
          }
          ${ 
            this.fields?.noon !== undefined && this.times?.noon !== undefined
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Noon, this.times.noon)
              : HelperFunctions.nothing()
          }
          ${ 
            this.fields?.dusk !== undefined && this.times?.dusk !== undefined
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Dusk, this.times.dusk)
              : HelperFunctions.nothing()
          }
        </div>

        <div class="sun-card-field-row">
          ${ 
            this.fields?.azimuth !== undefined && this.data?.azimuth !== undefined
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Azimuth, this.data?.azimuth)
              : HelperFunctions.nothing()
          }
          ${ 
            this.fields?.elevation !== undefined && this.data?.elevation !== undefined
              ? HelperFunctions.renderFieldElement(this.i18n, ESunCardI18NKeys.Elevation, this.data?.elevation)
              : HelperFunctions.nothing()
          }
        </div>
      </div>
    `
  }
}

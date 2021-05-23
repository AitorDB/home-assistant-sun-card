import { TemplateResult, html } from 'lit-html'
import { TSunCardData, TSunCardConfig } from '../types'
import { SunCardFooter } from './SunCardFooter'
import { SunCardGraph } from './SunCardGraph'
import { SunCardHeader }  from './SunCardHeader'
import utils from '../utils'

export class SunCardContent {

    private config: TSunCardConfig
    private data: TSunCardData
  
    constructor (config: TSunCardConfig, data: TSunCardData) {
      this.config = config
      this.data = data
    }

  render (): TemplateResult {
    return html`
      <ha-card>
        <div class="sun-card ${this.config.darkMode ? 'sun-card-dark' : ''}">
          ${ this.showHeader() ? this.renderHeader() : utils.nothing }
          ${ this.renderGraph() }
          ${ this.showFooter() ? this.renderFooter() : utils.nothing }
        </div>
      </ha-card>
    `
  }

  private renderHeader (): TemplateResult {
    return new SunCardHeader(this.config, this.data).render()
  }

  private renderGraph (): TemplateResult {
    return new SunCardGraph(this.data).render()
  }

  private renderFooter (): TemplateResult {
    return new SunCardFooter(this.config, this.data).render()
  }

  private showHeader (): boolean {
      // logic based on config
      return true
  }

  private showFooter (): boolean {
      // logic based on config
      return true
  }
}

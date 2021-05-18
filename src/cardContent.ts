import { html, TemplateResult } from 'lit-element'
import { TSunCardConfig, TSunCardData, TSunCardTexts, TSunCardTime } from './types'

export class SunCardContent {
  static generate (data: TSunCardData, localization: TSunCardTexts, config: TSunCardConfig): TemplateResult {
    if (data?.error) {
      return html`
        <ha-card>
          ${this.generateError()}
        </ha-card>
      `
    }

    return html`
      <ha-card>
        <div class="sun-card ${config.darkMode ? '' : 'sun-card-light'}">
          ${this.generateHeader(data, localization, config)}
          ${this.generateBody(data)}
          ${this.generateFooter(data, localization, config)}
        </div>
      </ha-card>
    `
  }

  private static generateHeader (data: TSunCardData, localization: TSunCardTexts, config: TSunCardConfig): TemplateResult {
    const title = config.title !== undefined ? html`
      <h1 class="sun-card-title">${config.title}</h1>
    ` : html``

    return html`
      ${title}
      <div class="sun-card-header">
        <div class="sun-card-text-container">
          <span class="sun-card-text-subtitle">${localization.Sunrise}</span>
          ${data?.times.sunrise ? this.generateTime(data.times.sunrise) : ''}

        </div>
        <div class="sun-card-text-container">
          <span class="sun-card-text-subtitle">${localization.Sunset}</span>
          ${data?.times.sunset ? this.generateTime(data.times.sunset) : ''}
        </div>
      </div>
    `
  }

  private static generateBody (data: TSunCardData): TemplateResult {
    const sunID = Math.random().toString(36).replace('0.', '')
    const dawnID = Math.random().toString(36).replace('0.', '')
    const dayID = Math.random().toString(36).replace('0.', '')
    const duskID = Math.random().toString(36).replace('0.', '')

    return html`
      <div class="sun-card-body">
        <svg viewBox="0 0 550 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="${sunID}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#f9d05e;stop-opacity:1" />
              <stop offset="${data?.sunPercentOverHorizon ?? 0}%" style="stop-color:#f9d05e;stop-opacity:1" />
              <stop offset="${data?.sunPercentOverHorizon ?? 0}%" style="stop-color:rgb(0,0,0,0);stop-opacity:1" />
            </linearGradient>
            
            <linearGradient id="${dawnID}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#393b78;stop-opacity:1" />
              <stop offset="${data?.dawnProgressPercent ?? 0}%" style="stop-color:#393b78;stop-opacity:1" />
              <stop offset="${data?.dawnProgressPercent ?? 0}%" style="stop-color:rgb(0,0,0,0);stop-opacity:1" />
            </linearGradient>
            
            <linearGradient id="${dayID}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#8ebeeb;stop-opacity:1" />
              <stop offset="${data?.dayProgressPercent ?? 0}%" style="stop-color:#8ebeeb;stop-opacity:1" />
              <stop offset="${data?.dayProgressPercent ?? 0}%" style="stop-color:rgb(0,0,0,0);stop-opacity:1" />
            </linearGradient>
            
            <linearGradient id="${duskID}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#393b78;stop-opacity:1" />
              <stop offset="${data?.duskProgressPercent ?? 0}%" style="stop-color:#393b78;stop-opacity:1" />
              <stop offset="${data?.duskProgressPercent ?? 0}%" style="stop-color:rgb(0,0,0,0);stop-opacity:1" />
            </linearGradient>
          </defs>
          <path class="sun-card-sun-line" d="M5,146 C29,153 73,128 101,108 C276,-29 342,23 449,108 C473,123 509,150 545,146" fill="none" stroke="var(--sun-card-lines)" shape-rendering="geometricPrecision" />
          <path d="M5,146 C29,153 73,128 101,108 L 5 108" fill="url(#${dawnID})" opacity="${data?.dawnProgressPercent ? 1 : 0}" stroke="url(#${dawnID})" shape-rendering="geometricPrecision" />
          <path d="M101,108 C276,-29 342,23 449,108 L 104,108" fill="url(#${dayID})" opacity="${data?.dayProgressPercent ? 1 : 0}" stroke="url(#${dayID})" shape-rendering="geometricPrecision" />
          <path d="M449,108 C473,123 509,150 545,146 L 545 108" fill="url(#${duskID})" opacity="${data?.duskProgressPercent ? 1 : 0}" stroke="url(#${duskID})" shape-rendering="geometricPrecision" />
          <line x1="5" y1="108" x2="545" y2="108" stroke="var(--sun-card-lines)" />
          <line x1="101" y1="25" x2="101" y2="100" stroke="var(--sun-card-lines)" />
          <line x1="449" y1="25" x2="449" y2="100" stroke="var(--sun-card-lines)" />
          <circle cx="${data?.sunPosition.x ?? 0}" cy="${data?.sunPosition.y ?? 0}" r="17" opacity="${data?.sunPercentOverHorizon ? 1 : 0}" stroke="none" fill="url(#${sunID})" shape-rendering="geometricPrecision" />
        </svg>
      </div>
    `
  }

  private static generateError (): TemplateResult {
    return html`
      <hui-error-card></hui-error-card>
    `
  }

  private static generateFooter (data: TSunCardData, localization: TSunCardTexts, config: TSunCardConfig): TemplateResult {
    const upperRow = html`
      <div class="sun-card-footer-row">
        <div class="sun-card-text-container">
          <span class="sun-card-text-subtitle">${localization.Dawn}</span>
          ${data?.times.dawn ? this.generateTime(data.times.dawn) : ''}
        </div>
        <div class="sun-card-text-container">
          <span class="sun-card-text-subtitle">${localization.Noon}</span>
          ${data?.times.noon ? this.generateTime(data.times.noon) : ''}
        </div>
        <div class="sun-card-text-container">
          <span class="sun-card-text-subtitle">${localization.Dusk}</span>
          ${data?.times.dusk ? this.generateTime(data.times.dusk) : ''}
        </div>
      </div>
    `

    let bottomRow = html``
    if (config.showAzimuth || config.showElevation) {
      const azimuth = config.showAzimuth ? html`
        <div class="sun-card-text-container">
          <span class="sun-card-text-subtitle">${localization.Azimuth}</span>
          <span class="sun-card-dawn-time sun-card-text-time">${data?.azimuth ?? ''}</span>
        </div>
      ` : html``

      const elevation = config.showElevation ? html`
        <div class="sun-card-text-container">
          <span class="sun-card-text-subtitle">${localization.Elevation}</span>
          <span class="sun-card-dawn-time sun-card-text-time">${data?.elevation ?? ''}</span>
        </div>
      ` : html``
  
      bottomRow = html`
        <div class="sun-card-footer-row">
          ${azimuth}
          ${elevation}
        </div>
      `
    }

    return html`
      <div class="sun-card-footer">
        ${upperRow}
        ${bottomRow}
      </div>
    `
  }

  private static generateTime (time: TSunCardTime) {
    if (time.period) {
      return html`
        <span class="sun-card-text-time">
          ${time.time} <span class="sun-card-text-time-period">${time.period}</span>
        </span>
      `
    }
    
    return html`
      <span class="sun-card-text-time">${time.time}</span>
    `
  }
}

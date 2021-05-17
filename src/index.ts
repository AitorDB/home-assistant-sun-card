import { HomeAssistant } from 'custom-card-helpers'
import { customElement, LitElement, state } from 'lit-element'

import cardStyles from './cardStyles'
import { Constants } from './constants'
import { SunCardContent } from './cardContent'
import { TSunCardConfig, TSunCardData } from './types'

@customElement('sun-card')
class SunCard extends LitElement {
  static readonly cardType = 'sun-card'
  static readonly cardName = 'Sun Card'
  static readonly cardDescription = 'Custom card that display a graph to track the sun position and related events'

  @state()
  private config: TSunCardConfig = {}

  @state()
  private data!: TSunCardData

  private hasRendered = false
  private lastHass!: HomeAssistant

  set hass (hass: HomeAssistant) {
    this.lastHass = hass

    if (!this.hasRendered) {
      return
    }

    this.processLastHass()
  }

  calculatePositionAndProgressesByTime (hass: HomeAssistant) {
    const sunLine = this.shadowRoot?.querySelector('path') as SVGPathElement
    const sunrise = new Date(hass.states['sun.sun'].attributes.next_rising)
    const sunset = new Date(hass.states['sun.sun'].attributes.next_setting)
    const eventsAt = {
      dayStart: 0,
      sunrise: this.convertDateToMinutesSinceDayStarted(sunrise),
      sunset: this.convertDateToMinutesSinceDayStarted(sunset),
      dayEnd: (23 * 60) + 59
    }

    const now = new Date()
    const minutesSinceTodayStarted = this.convertDateToMinutesSinceDayStarted(now)
    
    // Dawn section position [0 - 105]
    const dawnSectionPosition = (Math.min(minutesSinceTodayStarted, eventsAt.sunrise) * 105) / eventsAt.sunrise

    // Day section position [106 - 499]
    const minutesSinceDayStarted = Math.max(minutesSinceTodayStarted - eventsAt.sunrise, 0)
    const daySectionPosition = (Math.min(minutesSinceDayStarted, eventsAt.sunset - eventsAt.sunrise) * (499 - 106)) / (eventsAt.sunset - eventsAt.sunrise)

    // Dusk section position [500 - 605]
    const minutesSinceDuskStarted = Math.max(minutesSinceTodayStarted - eventsAt.sunset, 0)
    const duskSectionPosition = (minutesSinceDuskStarted * (605 - 500)) / (eventsAt.dayEnd - eventsAt.sunset)

    const position = dawnSectionPosition + daySectionPosition + duskSectionPosition
    const sunPosition = sunLine.getPointAtLength(position)

    const dawnProgressPercent = (100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.dayStart)) / (Constants.EVENT_X_POSITIONS.sunrise - Constants.EVENT_X_POSITIONS.dayStart)
    const dayProgressPercent = (100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.sunrise)) / (Constants.EVENT_X_POSITIONS.sunset - Constants.EVENT_X_POSITIONS.sunrise)
    const duskProgressPercent = (100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.sunset)) / (Constants.EVENT_X_POSITIONS.dayEnd - Constants.EVENT_X_POSITIONS.sunset)

    const sunYTop = sunPosition.y - Constants.SUN_RADIUS
    const yOver = Constants.HORIZON_Y - sunYTop
    let sunPercentOverHorizon = 0
    if (yOver > 0) {
      sunPercentOverHorizon = Math.min((100 * yOver) / (2 * Constants.SUN_RADIUS), 100)
    }

    return {
      dawnProgressPercent,
      dayProgressPercent,
      duskProgressPercent,
      sunPercentOverHorizon,
      sunPosition: { x: sunPosition.x, y: sunPosition.y }
    }
  }

  convertDateToMinutesSinceDayStarted (date: Date) {
    return (date.getHours() * 60) + date.getMinutes()
  }

  parseTime (timeText: string) {
    const date = new Date(timeText)
    const regex = /([0-9]{2}:[0-9]{2})/
    return date.toTimeString().match(regex)?.[1]
  }

  processLastHass () {
    this.config.darkMode = this.config.darkMode ?? this.lastHass.themes.darkMode
    this.config.language = this.config.language ?? this.lastHass.locale.language

    const times = {
      dawn: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_dawn),
      dusk: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_dusk),
      noon: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_noon),
      sunrise: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_rising),
      sunset: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_setting)
    }

    const {
      dawnProgressPercent,
      dayProgressPercent,
      duskProgressPercent,
      sunPercentOverHorizon,
      sunPosition
    } = this.calculatePositionAndProgressesByTime(this.lastHass)

    const data: TSunCardData = {
      azimuth: this.lastHass.states['sun.sun'].attributes.azimuth,
      dawnProgressPercent,
      dayProgressPercent,
      duskProgressPercent,
      elevation: this.lastHass.states['sun.sun'].attributes.elevation,
      sunPercentOverHorizon,
      sunPosition,
      times
    }

    this.data = data
  }

  getConfig () {
    const config: TSunCardConfig = {}
    config.darkMode = this.config.darkMode ?? Constants.DEFAULT_CONFIG.darkMode
    config.language = this.config.language ?? Constants.DEFAULT_CONFIG.language
    config.showAzimuth = this.config.showAzimuth ?? Constants.DEFAULT_CONFIG.showAzimuth
    config.showElevation = this.config.showElevation ?? Constants.DEFAULT_CONFIG.showElevation
    config.title = this.config.title

    if (!Object.keys(Constants.LOCALIZATION_LANGUAGES).includes(config.language!)) {
      config.language = Constants.DEFAULT_CONFIG.language
    }

    return config
  }

  setConfig (config: TSunCardConfig) {
    this.config = { ...config }
  }
  
  protected render () {
    const config = this.getConfig()
    const language = config.language!
    const localization = Constants.LOCALIZATION_LANGUAGES[language]
    return SunCardContent.generate(this.data, localization, config)
  }

  protected updated (changedProperties) {
    super.updated(changedProperties)

    if (!this.hasRendered) {
      this.hasRendered = true
      this.processLastHass()
    }
  }

  static get styles () {
    return cardStyles
  }
}

window.customCards = window.customCards || [] 
window.customCards.push({
  type: SunCard.cardType,
  name: SunCard.cardName,
  description: SunCard.cardDescription
})

import { Constants } from '../../../src/constants'
import { I18N } from '../../../src/utils/I18N'

describe('I18N', () => {
  describe('constructor', () => {
    it('initializes localization correctly', () => {
      const language = 'es'
      const i18n = new I18N(language, true)
      expect(i18n['localization']).toEqual(Constants.LOCALIZATION_LANGUAGES[language])
    })

    it('initializes date formatter correctly when use12HourClock is undefined', () => {
      const language = 'es'
      const i18n = new I18N(language, undefined)
      
      const expectedDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
        timeStyle: 'short'
      }
      
      const expectedDateFormatter = new Intl.DateTimeFormat(language, expectedDateTimeFormatOptions)
      expect(i18n['dateFormatter']).toEqual(expectedDateFormatter)
    })

    it('initializes date formatter correctly when use12HourClock is true', () => {
      const language = 'es'
      const i18n = new I18N(language, true)
      
      const expectedDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
        timeStyle: 'short',
        hour12: true
      }
      
      const expectedDateFormatter = new Intl.DateTimeFormat(language, expectedDateTimeFormatOptions)
      expect(i18n['dateFormatter']).toEqual(expectedDateFormatter)
    })

    it('initializes date formatter correctly when use12HourClock is false', () => {
      const language = 'es'
      const i18n = new I18N(language, false)
      
      const expectedDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
        timeStyle: 'short',
        hour12: false
      }
      
      const expectedDateFormatter = new Intl.DateTimeFormat(language, expectedDateTimeFormatOptions)
      expect(i18n['dateFormatter']).toEqual(expectedDateFormatter)
    })
  })

  describe('formatDateAsTime', () => {
    // Tests generated from languages and options available, new languages may require regex tweaking
    const languages = Object.keys(Constants.LOCALIZATION_LANGUAGES)
    for (const language of languages) {
      for (const use12hourClock of [undefined, true, false]) {
        it(`formats time correctly with different languages and settings [${language}][${use12hourClock}]`, () => {
          const i18n = new I18N(language, use12hourClock)
          const date = new Date()
          const result = i18n.formatDateAsTime(date)

          const periodRegex = /[^0-9.:\s]/gm
          if (use12hourClock === false) {
            expect(result.toLocaleLowerCase()).not.toMatch(periodRegex)
          }

          if (use12hourClock === true) {
            expect(result.toLocaleLowerCase()).toMatch(periodRegex)
          }

          const timeRegex = /\d{1,2}[:.]\d{1,2}|[AMP]+/g
          expect(result).toMatch(timeRegex)
        })
      }
    }
  })

  describe('tr', () => {
    const languages = Object.keys(Constants.LOCALIZATION_LANGUAGES)
    for (const language of languages) {
      it(`translates correctly each language with simple translation keys [${language}]`, () => {
        const translationKey = 'sunrise'
        const i18n = new I18N(language, undefined)
        const result = i18n.tr(translationKey)
        expect(result).toEqual(Constants.LOCALIZATION_LANGUAGES[language][translationKey])
      })
    }

    for (const language of languages) {
      it(`translates correctly each language with compound translation keys [${language}]`, () => {
        const translationKey = 'errors.SunIntegrationNotFound'
        const i18n = new I18N(language, undefined)
        const result = i18n.tr(translationKey)
        expect(result).toEqual(Constants.LOCALIZATION_LANGUAGES[language]['errors']['SunIntegrationNotFound'])
      })
    }

    it('returns an error message when a translation key is not found', () => {
      const language = 'es'
      const translationKey = 'notExistantTranslationKey'
      const i18n = new I18N(language, undefined)
      const result = i18n.tr(translationKey)
      expect(result).toEqual(`Translation key '${translationKey}' doesn't have a valid translation`)
    })

    it('uses the fallback localization when there is no localization set', () => {
      const language = 'es'
      const translationKey = 'sunrise'
      const i18n = new I18N(language, undefined)
      
      delete (i18n as unknown as { localization?: string }).localization
      
      const result = i18n.tr(translationKey)
      expect(result).toEqual(Constants.FALLBACK_LOCALIZATION[translationKey])
    })
  })
})

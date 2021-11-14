import { HomeAssistant } from 'custom-card-helpers'
import { css, CSSResult } from 'lit'

import { SunCardEditor, TSunCardEditorContentEvents } from '../../../../src/components/sunCardEditor'
import { ISunCardConfig } from '../../../../src/types'
import { CustomSnapshotSerializer, TemplateResultTestHelper } from '../../../helpers/TestHelpers'
import { SunCardEditorContent } from '../../../mocks/SunCardEditorContent'

jest.mock('../../../../src/components/SunErrorContent', () => require('../../../mocks/SunErrorContent'))
jest.mock('../../../../src/utils/HelperFunctions', () => require('../../../mocks/HelperFunctions'))
jest.mock('../../../../src/utils/I18N', () => require('../../../mocks/I18N'))
jest.mock('../../../../src/cardStyles', () => css``)
jest.mock('../../../../src/components/sunCardEditor/SunCardEditorContent.ts', () => require('../../../mocks/SunCardEditorContent'))

expect.addSnapshotSerializer(new CustomSnapshotSerializer())

describe('SunCardEditor', () => {
  let sunCardEditor: SunCardEditor

  beforeEach(() => {
    SunCardEditorContent.onMock = jest.fn()
    sunCardEditor = new SunCardEditor()
  })

  describe('hass', () => {
    it('updates hass property with provided value', () => {
      const expectedValue = { language: 'test' } as HomeAssistant
      sunCardEditor.hass = expectedValue
      expect(sunCardEditor.hass).toEqual(expectedValue)
    })
  })

  describe('setConfig', () => {
    it('updates config property with provided value', () => {
      const expectedValue = { language: 'test' } as ISunCardConfig
      sunCardEditor.setConfig(expectedValue)
      expect(sunCardEditor['config']).toEqual(expectedValue)
    })
  })

  describe('configChanged', () => {
    let dispatchEventMock
    beforeEach(() => {
      dispatchEventMock = jest.fn()
      sunCardEditor.dispatchEvent = dispatchEventMock
    })

    it('retrieves correctly the value from input', () => {
      const config = { target: { configValue: 'test' }, detail: { value: 'test' } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent
      expect(customEvent.detail.config).toEqual(expect.objectContaining({
        test: 'test'
      }))
    })

    it('retrieves correctly the value from select', () => {
      const config = { target: { configValue: 'test', selected: 'true' } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent
      expect(customEvent.detail.config).toEqual(expect.objectContaining({
        test: true
      }))
    })

    it('retrieves correctly the value from checkbox', () => {
      const config = { target: { configValue: 'test', checked: true } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent
      expect(customEvent.detail.config).toEqual(expect.objectContaining({
        test: true
      }))
    })

    it('deletes the config property when it the value is default', () => {
      const config = { target: { configValue: 'test' }, detail: { value: 'default' } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent
      expect(customEvent.detail.config.test).toBeUndefined()
    })

    it('deletes the config property when it the value is undefined', () => {
      const config = { target: { configValue: 'test' } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent
      expect(customEvent.detail.config.test).toBeUndefined()
    })

    it('deletes the config property when it the value is an empty string', () => {
      const config = { target: { configValue: 'test' }, detail: { value: '' } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent
      expect(customEvent.detail.config.test).toBeUndefined()
    })

    it('transform "true"/"false" to boolean', () => {
      const config = { target: { configValue: 'test' }, detail: { value: 'false' } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent
      expect(customEvent.detail.config).toEqual(expect.objectContaining({
        test: false
      }))
    })

    it('handles field configuration correctly', () => {
      const config = { target: { configValue: 'dawn' }, detail: { value: true } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent
      expect(customEvent.detail.config).toEqual(expect.objectContaining({
        fields: {
          dawn: true
        }
      }))
    })

    it('dispatches an event', () => {
      const config = { target: { configValue: 'test' }, detail: { value: 'test' } } as TSunCardEditorContentEvents['configChanged']
      sunCardEditor.configChanged(config)

      expect(sunCardEditor.dispatchEvent).toHaveBeenCalledTimes(1)
    })
  })

  describe('render', () => {
    it('starts to listen then configChanged event from SunCardEditorContent', () => {
      sunCardEditor['render']()
      expect(SunCardEditorContent.onMock).toHaveBeenCalledWith('configChanged', expect.any(Function))
    })

    it('renders the sun card editor content render result', async () => {
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardEditor['render']>
      element.templateResultFunction = () => sunCardEditor['render']()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })
  })

  describe('get styles', () => {
    it('returns a CSSResult', () => {
      expect(SunCardEditor.styles).toBeInstanceOf(CSSResult)
    })
  })
})

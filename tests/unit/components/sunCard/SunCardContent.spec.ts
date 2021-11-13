import { html } from 'lit'

import { SunCardContent } from '../../../../src/components/sunCard/SunCardContent'
import { ISunCardConfig, TSunCardData } from '../../../../src/types'
import { HelperFunctions } from '../../../../src/utils/HelperFunctions'
import { TemplateResultTestHelper } from '../../../helpers/TestHelpers'

jest.mock('../../../../src/components/sunCard/SunCardHeader', () => require('../../../mocks/SunCardHeader'))
jest.mock('../../../../src/components/sunCard/SunCardGraph', () => require('../../../mocks/SunCardGraph'))
jest.mock('../../../../src/components/sunCard/SunCardFooter', () => require('../../../mocks/SunCardFooter'))

describe('SunCardContent', () => {
  describe('render', () => {
    beforeAll(() => {
      jest.spyOn(HelperFunctions, 'nothing').mockImplementation(() => html``)
    })

    it('sets dark mode when it is set to true on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        darkMode: true
      }

      const sunCardContent = new SunCardContent(config, {} as TSunCardData)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardContent.render>
      element.templateResultFunction = () => sunCardContent.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not set dark mode when it is set to false on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        darkMode: false
      }

      const sunCardContent = new SunCardContent(config, {} as TSunCardData)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardContent.render>
      element.templateResultFunction = () => sunCardContent.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('renders the header when show header returns true', async () => {
      const sunCardContent = new SunCardContent({} as ISunCardConfig, {} as TSunCardData)
      jest.spyOn((sunCardContent as unknown as { showHeader: () => boolean }), 'showHeader').mockImplementation(() => true)

      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardContent.render>
      element.templateResultFunction = () => sunCardContent.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the header when show header returns false', async () => {
      const sunCardContent = new SunCardContent({} as ISunCardConfig, {} as TSunCardData)
      jest.spyOn((sunCardContent as unknown as { showHeader: () => boolean }), 'showHeader').mockImplementation(() => false)

      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardContent.render>
      element.templateResultFunction = () => sunCardContent.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('renders the footer when show footer returns true', async () => {
      const sunCardContent = new SunCardContent({} as ISunCardConfig, {} as TSunCardData)
      jest.spyOn((sunCardContent as unknown as { showFooter: () => boolean }), 'showFooter').mockImplementation(() => true)

      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardContent.render>
      element.templateResultFunction = () => sunCardContent.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the footer when show footer returns false', async () => {
      const sunCardContent = new SunCardContent({} as ISunCardConfig, {} as TSunCardData)
      jest.spyOn((sunCardContent as unknown as { showFooter: () => boolean }), 'showFooter').mockImplementation(() => false)

      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardContent.render>
      element.templateResultFunction = () => sunCardContent.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })
  })
})

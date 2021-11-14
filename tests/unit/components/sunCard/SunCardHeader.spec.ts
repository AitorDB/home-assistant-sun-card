import { SunCardHeader } from '../../../../src/components/sunCard'
import { ISunCardConfig, TSunCardData, TSunCardTimes } from '../../../../src/types'
import { CustomSnapshotSerializer, TemplateResultTestHelper } from '../../../helpers/TestHelpers'

jest.mock('../../../../src/utils/HelperFunctions', () => require('../../../mocks/HelperFunctions'))

expect.addSnapshotSerializer(new CustomSnapshotSerializer())

describe('SunCardHeader', () => {
  describe('render', () => {
    it('renders the title if it is present in the configuration', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        title: 'test'
      }

      const data = {

      } as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the title if it is not present in the configuration', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card'
      }

      const data = {

      } as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('renders the sunrise field when it is present in the data and it is activated on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        fields: {
          sunrise: true
        }
      }

      const data = {
        times: {
          sunrise: new Date(0)
        } as TSunCardTimes
      } as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the sunrise field when it is present in the data but it is disabled on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        fields: {
          sunrise: false
        }
      }

      const data = {
        times: {
          sunrise: new Date(0)
        } as TSunCardTimes
      } as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the sunrise field when it is not present in the data but it is activated on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        fields: {
          sunrise: true
        }
      }

      const data = {} as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the sunrise field when it is not present in the data and it is disabled on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        fields: {
          sunrise: false
        }
      }

      const data = {} as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('renders the sunset field when it is present in the data and it is activated on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        fields: {
          sunset: true
        }
      }

      const data = {
        times: {
          sunset: new Date(0)
        } as TSunCardTimes
      } as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the sunset field when it is present in the data but it is disabled on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        fields: {
          sunset: false
        }
      }

      const data = {
        times: {
          sunset: new Date(0)
        } as TSunCardTimes
      } as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the sunset field when it is not present in the data but it is activated on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        fields: {
          sunset: true
        }
      }

      const data = {} as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })

    it('does not render the sunset field when it is not present in the data and it is disabled on the config', async () => {
      const config: ISunCardConfig = {
        type: 'sun-card',
        fields: {
          sunset: false
        }
      }

      const data = {} as TSunCardData

      const sunCardHeader = new SunCardHeader(config, data)
      const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardHeader.render>
      element.templateResultFunction = () => sunCardHeader.render()
      window.document.body.appendChild(element)
      await element.updateComplete

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
    })
  })
})

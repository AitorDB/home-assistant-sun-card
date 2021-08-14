import { SunCardFooter } from '../../../../src/components/sunCard/SunCardFooter'
import { ISunCardConfig, TSunCardData } from '../../../../src/types'
import { TemplateResultTestHelper } from '../../../helpers/TestHelpers'

jest.mock('../../../../src/utils/HelperFunctions', () => require('../../../mocks/HelperFunctions'))

describe('SunCardFooter', () => {
  const dateFields = ['dawn', 'noon', 'dusk']
  const numberFields = ['azimuth', 'elevation']
  const getConfigForValue = (field: string) => ({ fields: { [field]: true } })
  const getDataForValue = (field: string) => {
    if (dateFields.includes(field)) {
      return {
        times: {
          [field]: new Date(0)
        }
      }
    }

    if (numberFields.includes(field)) {
      return {
        [field]: 0
      }
    }

    return
  }

  describe('render', () => {
    for (const field of [...dateFields, ...numberFields]) {
      it(`should render the ${field} field when it is present in the config and data for it is provided`, async () => {
        const config = getConfigForValue(field) as ISunCardConfig
        const data = getDataForValue(field) as TSunCardData

        const sunCardFooter = new SunCardFooter(config, data)
        const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardFooter.render>
        element.templateResultFunction = () => sunCardFooter.render()
        window.document.body.appendChild(element)
        await element.updateComplete

        expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
      })

      it(`should not render the ${field} field when it is present in the config but no data for it is provided`, async () => {
        const config = getConfigForValue(field) as ISunCardConfig
        const data = {} as TSunCardData

        const sunCardFooter = new SunCardFooter(config, data)
        const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardFooter.render>
        element.templateResultFunction = () => sunCardFooter.render()
        window.document.body.appendChild(element)
        await element.updateComplete

        expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
      })

      it(`should not render the ${field} field when it is not present in the config but data for it is provided`, async () => {
        const config = {} as ISunCardConfig
        const data = getDataForValue(field) as TSunCardData

        const sunCardFooter = new SunCardFooter(config, data)
        const element = window.document.createElement('test-element') as TemplateResultTestHelper<typeof sunCardFooter.render>
        element.templateResultFunction = () => sunCardFooter.render()
        window.document.body.appendChild(element)
        await element.updateComplete

        expect(element.shadowRoot!.innerHTML).toMatchSnapshot()
      })
    }
  })
})

import { customElement, html, LitElement, state, TemplateResult } from 'lit-element'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TTemplateResultFunction = (...args: any[]) => TemplateResult

@customElement('test-element')
export class TemplateResultTestHelper <T extends TTemplateResultFunction, U extends Parameters<T> = Parameters<T>> extends LitElement {
  @state()
  templateResultFunctionData?: U

  @state()
  templateResultFunction?: T

  constructor (templateResultFunction: T, templateResultFunctionData?: U) {
    super()

    this.templateResultFunction = templateResultFunction
    this.templateResultFunctionData = templateResultFunctionData
  }

  render (): TemplateResult {
    const data = this.templateResultFunctionData ?? []
    return this.templateResultFunction?.(...data) ?? html`<span>No function assigned</span>`
  }
}

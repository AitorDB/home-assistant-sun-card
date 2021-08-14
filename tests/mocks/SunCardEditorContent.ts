import { html, TemplateResult } from 'lit-html'

export class SunCardEditorContent {
  static onMock: jest.Mock 

  public on (eventName: string, listener: () => void) {
    SunCardEditorContent.onMock(eventName, listener)
  }  

  public render (): TemplateResult {
    return html`
      <div class="card-config">
        SUN CARD EDITOR CONTENT
      </div>
    `
  }
}

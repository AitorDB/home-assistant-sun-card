export class I18N {
  public formatDateAsTime (date: Date): string {
    return `${date.getTime()}`
  }

  public tr (translationKey: string): string {
    return translationKey
  }
}

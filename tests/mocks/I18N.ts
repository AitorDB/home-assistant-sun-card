export class I18N {
  public formatDateAsTime (date: Date): string {
    return `${date.getHours()}:${date.getMinutes()}`
  }

  public tr (translationKey: string): string {
    return translationKey
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TEventList = Record<string, any>
type TEventName <T> = Extract<keyof T, string>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TEventListener <T = any> = (event: T) => void

export class EventUtils <T extends TEventList = TEventList> {
  eventMap: Map<TEventName<T>, TEventListener[]> = new Map()

  on <U extends TEventName<T> = TEventName<T>> (eventName: U, listener: TEventListener<T[U]>): void {
    const eventListeners = this.eventMap.get(eventName) || []
    eventListeners.push(listener)
    this.eventMap.set(eventName, eventListeners)
  }

  emit <U extends TEventName<T> = TEventName<T>> (eventName: U, data: T[U]): void {
    const eventListeners = this.eventMap.get(eventName) || []
    eventListeners.forEach((eventListener) => {
      eventListener(data)
    })
  }
}

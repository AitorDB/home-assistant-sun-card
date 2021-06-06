type TEventCallback <T, U extends CustomEvent<T> = CustomEvent<T>, V extends (event: U) => void = (event: U) => void> = V
type TEventList = Record<string, unknown>
type TEventName <T> = Extract<keyof T, string>

export abstract class EventEmitter <T extends TEventList> {
  target: EventTarget

  constructor () {
    this.target = new EventTarget()
  }

  on <U extends TEventName<T> = TEventName<T>, W extends CustomEvent<T[U]> = CustomEvent<T[U]>, V extends TEventCallback<T[U], W> = TEventCallback<T[U], W>> (eventName: U, listener: V): void {
    return this.target.addEventListener(eventName, listener as unknown as EventListener) // FIXME: Remove "as unknown"
  }

  once <U extends TEventName<T> = TEventName<T>, W extends CustomEvent<T[U]> = CustomEvent<T[U]>, V extends TEventCallback<T[U], W> = TEventCallback<T[U], W>> (eventName: U, listener: V): void {
    return this.target.addEventListener(eventName, listener as unknown as EventListener, { once: true }) // FIXME: Remove "as unknown"
  }

  off <U extends TEventName<T> = TEventName<T>, W extends CustomEvent<T[U]> = CustomEvent<T[U]>, V extends TEventCallback<T[U], W> = TEventCallback<T[U], W>> (eventName: U, listener: V): void {
    return this.target.removeEventListener(eventName, listener as unknown as EventListener) // FIXME: Remove "as unknown"
  }

  emit <U extends TEventName<T> = TEventName<T>> (eventName: U, detail: T[U]): boolean
  emit <U extends TEventName<T> = TEventName<T>, W extends CustomEvent<T[U]> = CustomEvent<T[U]>> (eventName: U, detail: W): boolean
  emit <U extends TEventName<T> = TEventName<T>, W extends CustomEvent<T[U]> = CustomEvent<T[U]>> (eventName: U, data: T[U] | W): boolean {
    if (data instanceof Event) {
      return this.target.dispatchEvent(data)
    }

    const event = new CustomEvent(eventName, { detail: data, cancelable: true })
    return this.target.dispatchEvent(event)
  }
}

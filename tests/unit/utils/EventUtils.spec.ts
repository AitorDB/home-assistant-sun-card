// eslint-env jest
import { EventUtils } from '../../../src/utils/EventUtils'

describe('EventUtils', () => {
  let eventUtils: EventUtils
  beforeEach(() => {
    eventUtils = new EventUtils()
  })

  describe('on', () => {
    it('adds the listener to the eventMap if the event already exists', () => {
      const event = 'test'
      const testEventListener = () => {
        return
      }
      
      eventUtils.on(event, testEventListener)
      const testEventListeners = eventUtils.eventMap.get(event)!
      expect(testEventListeners.length).toBe(1)
      expect(testEventListeners[0]).toBe(testEventListener)

      const newTestEventListener = () => {
        return
      }
      
      eventUtils.on(event, newTestEventListener)
      const newTestEventListeners = eventUtils.eventMap.get(event)!
      expect(newTestEventListeners.length).toBe(2)
      expect(newTestEventListeners[0]).toBe(testEventListener)
      expect(newTestEventListeners[1]).toBe(newTestEventListener)
    })

    it('adds the listener to the eventMap if the event did not exist before', () => {
      const event = 'test'
      const testEventListeners = eventUtils.eventMap.get(event)
      expect(testEventListeners).toBeUndefined()

      const testEventListener = () => {
        return
      }
      
      eventUtils.on(event, testEventListener)
      const newTestEventListeners = eventUtils.eventMap.get(event)!
      expect(newTestEventListeners.length).toBe(1)
      expect(newTestEventListeners[0]).toBe(testEventListener)
    })
  })

  describe('emit', () => {
    it('calls listeners if there is listeners for the event', () => {
      const event = 'test'
      const testEventListener = jest.fn()
      eventUtils.eventMap.set(event, [testEventListener])

      const data = 'testData'
      eventUtils.emit(event, data)

      expect(testEventListener).toHaveBeenCalledWith(data)
    })

    it('does not crash if there is not listeners for the event', () => {
      const event = 'test'
      let emitError

      try {
        const data = 'testData'
        eventUtils.emit(event, data)
      } catch (error) {
        emitError = error
      }

      expect(emitError).toBeUndefined()
    })
  })
})

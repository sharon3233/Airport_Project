const Passenger = require('./Passenger')
const Person = require('./Person')

describe('Passenger Class', () => {
  const passenger = new Passenger('Shelly')

    test('Passenger is a Person', () => {
       expect(passenger instanceof Person).toBeTruthy
    
    })

    test('Passengers can call flight attendant', () =>{
      console.log = jest.fn()

      passenger.callAttendant()

      expect(console.log).toHaveBeenCalledWith('Hello can I get some help')
    })

    test('Passengers can listen to music', () =>{
      expect(passenger.listenToMusic()).toBe('I love slow jams')
    })

    test('has a seat number', () =>{
      expect(passenger.seatNumber).toBe()
    })
})
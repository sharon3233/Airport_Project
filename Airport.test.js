const Airport = require('./Airport')
const Plane = require('./Plane')
const Bag = require('./Bag')
const Person = require('./Person')
const Passenger = require('./Passenger')

describe('Airport', () => {
  const airport = new Airport('Lovefield')

  const plane = new Plane('212')

  const person = new Passenger('Mikey')

  const bag = new Bag(21)


    test('airport has a name',() => {
        expect(airport.name).toBe('Lovefield');
    });
    test('airport has planes',() => {
        expect(Array.isArray(airport.planes)).toBe(true)
    });

    test('can add planes',() => {
      airport.addPlane(plane)
        expect(airport.planes.length).toBe(1);
    });
    test('airport passengers can carry on bags',() => {
        person.addBag(bag)
        plane.addPassenger(person)
        airport.addPlane(plane)
        expect(airport.planes[0].passengers[0].bags[0].weight).toBe(21)
    });
})
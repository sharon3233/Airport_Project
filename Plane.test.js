const Plane = require('./Plane')
const Airport = require('./Airport')
const Person = require('./Person')
const CrewMember = require('./Crew')
const Passenger = require('./Passenger')

describe('Plane',() => {
  const plane = new Plane('D230')

  const spirit = new Airport("Spirit")
  const valley = new Airport("Valley")

  const jerry = new Passenger('4','Jerry')
  const tyrone = new Passenger('6','Tyrone')

  const mary = new CrewMember('Mary')

    test('has a ticket number',() => {
        expect(plane.flightNum).toBe('D230');
    });

    test('has an origin', () => {
        plane.setOrigin(spirit)
          expect(plane.origin.name).toBe('Spirit')
    });
   
       
    
    test('has passengers', () => {
      plane.addPassenger(jerry)
      plane.addPassenger(tyrone)

        expect(plane.passengers.length).toBe(2);
    });

    test('has crew', () =>{
      plane.addPassenger(mary)

      expect(plane.crew.length).toBe(1)
    })
})
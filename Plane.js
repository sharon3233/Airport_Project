const Passenger = require('./Passenger')
const CrewMember = require('./Crew')
class Plane {
  constructor(flightNum){
    this.flightNum = flightNum
    this.origin = ''
    this.destination = ''
    this.passengers = []
    this.crew = []
  }
  setOrigin(airport){
    this.origin = airport
  }
  setDestination(airport){
    this.destinantion = airport
  }

  addPassenger(person){
    if(person instanceof Passenger){
        this.passengers.push(person)
    } else if  (person instanceof CrewMember) {
        this.crew.push(person)
    } else {
      return 'You do not have a flight booked'
    }
    
  }

}
 
    

module.exports = Plane
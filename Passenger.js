const Person = require('./Person')

class Passenger extends Person {
  constructor(name){
    super(name)
    this.seatNumber = this.seatNumber
  }

  callAttendant(){
    console.log('Hello can I get some help')
  }

  listenToMusic(){
    return 'I love slow jams'
  }
}

module.exports = Passenger
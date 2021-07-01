const CrewMember = require('./Crew')
const Person = require('./Person')

describe('Crew Member', () =>{

  const testCrew = new CrewMember('Lacey')
  
    test('crew members are  people on the plane too', ()=> {
      expect(testCrew instanceof Person).toBeTruthy
    })
})